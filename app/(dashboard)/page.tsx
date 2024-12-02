"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { fetchUserDetails } from "@/lib/actions";
import useUserStore from "@/hooks/useUserStore";
import Loader from "@/components/shared/Loader";
import { redirect } from "next/navigation";
import Dashboard from "@/components/Dashboard";
import SideBar from "@/components/Navigator";

export default function Home() {
  const { setUser } = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) redirect("/signin");

        const userData = await fetchUserDetails(token);
        setUser(userData);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load user data", err);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="h-full w-full m-auto md:p-2">
      <div
        className={cn(
          "md:rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1 border mx-auto h-full border-neutral-200 dark:border-neutral-700 overflow-hidden"
        )}
      >
        <SideBar />
        <Dashboard />
      </div>
    </div>
  );
}
