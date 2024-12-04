"use client";

import useTeamStore from "@/hooks/useTeamStore";
import ThemeToggle from "./ThemeToggle";
import { Highlight } from "./Highlight";

const TopBar = () => {
  const { team } = useTeamStore();
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
