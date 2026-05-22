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
  page_path: string;
  session_id: string;
  duration_seconds: number;
}

export interface AnalyticsSummary {
  totalUniqueVisitors: number;
  averageSessionTime: number; // in seconds
  pageViews: { path: string; count: number }[];
}
