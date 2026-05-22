"use client";

import { motion } from "framer-motion";
import { Factory, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth
    setTimeout(() => {
      router.push("/admin/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
            <Factory className="h-8 w-8 text-primary-500" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Portal</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Shree Aadinath Coal Resources LLP</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="admin@shreeaadinathcoal.com" required defaultValue="admin@shreeaadinathcoal.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" required defaultValue="password" />
          </div>
          
          <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
            {isLoading ? "Authenticating..." : (
              <>
                <Lock className="w-4 h-4 mr-2" /> Secure Login
              </>
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
