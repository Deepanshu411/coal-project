export interface Lead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  status: "new" | "contacted" | "archived";
}

export interface AnalyticsEvent {
  id: string;
  created_at: string;
  session_id: string;
  event_type: string;
  page_path: string;
}

export interface AnalyticsSummary {
  totalUniqueVisitors: number;
  averageSessionTime: number; // in seconds
  pageViews: { path: string; count: number }[];
}
