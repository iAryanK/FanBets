import { create } from "zustand";

interface TeamStore {
  team:
    | "csk"
    | "mi"
    | "rcb"
    | "kkr"
    | "dc"
    | "srh"
    | "rr"
    | "pbks"
    | "gt"
    | "lsg";
  setTeam: (
    team:
      | "csk"
      | "mi"
      | "rcb"
      | "kkr"
      | "dc"
      | "srh"
      | "rr"
      | "pbks"
      | "gt"
      | "lsg"
  ) => void;
}

const useTeamStore = create<TeamStore>((set) => ({
  team: "kkr",
  setTeam: (team) => set({ team }),
}));

export default useTeamStore;
