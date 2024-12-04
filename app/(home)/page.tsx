"use client";

import Dashboard from "@/components/Dashboard";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      redirect("/signin");
    }
  }, []);
  return (
    <>
      <Dashboard />
    </>
  );
}
