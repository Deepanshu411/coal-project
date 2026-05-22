import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

import { supabase } from "@/lib/supabase";
import { AnalyticsSummary, AnalyticsEvent } from "@/types/database";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newEvent: Partial<AnalyticsEvent> = {
      session_id: body.sessionId,
      page_path: body.pagePath,
      event_type: "page_view",
    };

    const { error } = await supabase
      .from("analytics_events")
      .insert([newEvent]);

    if (error) throw error;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error logging event:", error);
    return NextResponse.json({ error: "Failed to log event" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { data: events, error } = await supabase
      .from("analytics_events")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) throw error;

    if (!events || events.length === 0) {
      return NextResponse.json({
        totalUniqueVisitors: 0,
        averageSessionTime: 0,
        pageViews: []
      } as AnalyticsSummary);
    }

    // 1. Calculate Total Unique Visitors
    const uniqueSessions = new Set(events.map(e => e.session_id));
    const totalUniqueVisitors = uniqueSessions.size;

    // 2. Calculate Page View Breakdown
    const pageViewsMap: Record<string, number> = {};
    events.forEach(e => {
      if (e.event_type === "page_view") {
        pageViewsMap[e.page_path] = (pageViewsMap[e.page_path] || 0) + 1;
      }
    });

    const pageViews = Object.entries(pageViewsMap).map(([path, count]) => ({
      path,
      count
    })).sort((a, b) => b.count - a.count);

    // 3. Calculate Average Session Time (heuristic)
    let totalSessionTime = 0;
    let sessionsWithDuration = 0;

    uniqueSessions.forEach(sessionId => {
      const sessionEvents = events.filter(e => e.session_id === sessionId);

      if (sessionEvents.length > 1) {
        const firstEvent = new Date(sessionEvents[0].created_at).getTime();
        const lastEvent = new Date(sessionEvents[sessionEvents.length - 1].created_at).getTime();
        totalSessionTime += (lastEvent - firstEvent) / 1000; // in seconds
        sessionsWithDuration++;
      }
    });

    const averageSessionTime = sessionsWithDuration > 0 ? Math.floor(totalSessionTime / sessionsWithDuration) : 10;

    return NextResponse.json({
      totalUniqueVisitors,
      averageSessionTime,
      pageViews
    } as AnalyticsSummary);

  } catch (error) {
    console.error("Error computing analytics data:", error);
    return NextResponse.json({ error: "Failed to compute analytics data" }, { status: 500 });
  }
}
