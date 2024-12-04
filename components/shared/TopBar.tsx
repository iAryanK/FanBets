"use client";

import useTeamStore from "@/hooks/useTeamStore";
import ThemeToggle from "./ThemeToggle";
import { Highlight } from "./Highlight";
import { useEffect } from "react";
import useModalStore from "@/hooks/useModalStore";

const TopBar = () => {
  const { team, setTeam } = useTeamStore();
  const { setShowModal } = useModalStore();

  useEffect(() => {
    const team = localStorage.getItem("team");
    if (!team)
      setTimeout(() => {
        setShowModal(true);
      }, 5000);
    else {
      setTeam(
        team as
          | "kkr"
          | "csk"
          | "mi"
          | "rcb"
          | "dc"
          | "srh"
          | "rr"
          | "pbks"
          | "gt"
          | "lsg"
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full mb-5 p-2 flex items-center justify-between">
      <h1 className="text-semibold trackwing-wide">
        Welcome to <Highlight className="uppercase">{team}</Highlight> Fan store
        !
      </h1>
      <ThemeToggle />
    </div>
  );
};

export default TopBar;
