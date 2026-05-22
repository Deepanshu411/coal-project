import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

import { supabase } from "@/lib/supabase";
import { Lead } from "@/types/database";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json(data || []);
  } catch (error) {
    console.error("Error reading leads data:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newLead: Partial<Lead> = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company || "",
      message: body.message,
      status: "new",
    };

    const { data, error } = await supabase
      .from("leads")
      .insert([newLead])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json({ error: "Failed to create lead" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error updating lead status:", error);
    return NextResponse.json({ error: "Failed to update lead status" }, { status: 500 });
  }
}
