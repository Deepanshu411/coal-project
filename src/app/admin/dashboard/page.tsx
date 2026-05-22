"use client";

import { motion } from "framer-motion";
import { Users, Clock, MousePointerClick, TrendingUp } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

import { useState, useEffect } from "react";
import { AnalyticsSummary } from "@/types/database";

export default function DashboardPage() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsSummary | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("/api/analytics");
        if (response.ok) {
          const data = await response.json();
          setAnalyticsData(data);
        }
      } catch (error) {
        console.error("Failed to fetch analytics", error);
      }
    };
    fetchAnalytics();
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const statCards = analyticsData ? [
    {
      title: "Total Unique Visitors",
      value: analyticsData.totalUniqueVisitors.toLocaleString(),
      icon: Users,
      trend: "+12.5%",
      trendUp: true,
      color: "text-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Avg. Session Duration",
      value: formatTime(analyticsData.averageSessionTime),
      icon: Clock,
      trend: "+5.2%",
      trendUp: true,
      color: "text-emerald-500",
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    {
      title: "Total Page Views",
      value: analyticsData.pageViews.reduce((acc, curr) => acc + curr.count, 0).toLocaleString(),
      icon: MousePointerClick,
      trend: "+18.1%",
      trendUp: true,
      color: "text-purple-500",
      bg: "bg-purple-100 dark:bg-purple-900/30",
    },
  ] : [];

  if (!analyticsData) {
    return <div className="p-8 text-center text-slate-500">Loading analytics...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Analytics Dashboard</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Overview of your website traffic and performance.</p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <motion.div 
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="h-4 w-4" />
                {stat.trend}
              </div>
            </div>
            <div>
              <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.title}</h3>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Page View Breakdown</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={analyticsData.pageViews}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="path" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b' }}
                dy={10}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b' }}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(249, 115, 22, 0.05)' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar 
                dataKey="count" 
                fill="#f97316" 
                radius={[4, 4, 0, 0]} 
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
