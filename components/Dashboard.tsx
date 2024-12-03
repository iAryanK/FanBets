"use client";

import { useEffect } from "react";
import ThemeToggle from "./shared/ThemeToggle";
import useModalStore from "@/hooks/useModalStore";
import { SelectTeamModal } from "./SelectTeamModal";

const Dashboard = () => {
  const { setShowModal } = useModalStore();

  useEffect(() => {
    setTimeout(() => {
      const team = localStorage.getItem("team");
      if (!team) setShowModal(true);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      FanBets
      <ThemeToggle />
      <SelectTeamModal />
    </div>
  );
};

export default Dashboard;
