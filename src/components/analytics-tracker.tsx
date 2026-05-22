"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Only track if we are in the browser
    if (typeof window === "undefined") return;

    // Do not track admin routes
    if (pathname?.startsWith("/admin")) return;

    let sessionId = sessionStorage.getItem("sacr_session_id");
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem("sacr_session_id", sessionId);
    }

    const trackEvent = async () => {
      try {
        await fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId,
            pagePath: pathname || "/",
          }),
          // Using keepalive allows the request to finish even if the user navigates away
          keepalive: true,
        });
      } catch (error) {
        console.error("Failed to track analytics event", error);
      }
    };

    trackEvent();
  }, [pathname]);

  return null;
}
