"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useModalStore from "@/hooks/useModalStore";
import useTeamStore from "@/hooks/useTeamStore";
import Image from "next/image";
import { Highlight } from "./shared/Highlight";
import { teamColor } from "@/lib/utils";
import useUserStore from "@/hooks/useUserStore";
import { updateUserTeam } from "@/lib/actions";

export function SelectTeamModal() {
  const { user, setUser } = useUserStore();
  const { showModal, setShowModal } = useModalStore();
  const { team, setTeam } = useTeamStore();
  const teams = [
    "csk",
    "mi",
    "rcb",
    "kkr",
    "dc",
    "srh",
    "rr",
    "pbks",
    "gt",
    "lsg",
  ];

  const handleSelectTeam = (
    value:
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
  ) => {
    setTeam(value);
  };

  const selectUserTeam = async () => {
    if (!user) return;
    const res = await updateUserTeam(user._id, team);

    if (res) {
      setUser({ ...user, team });
      localStorage.setItem("team", team);

      if (team) {
        document.body.style.backgroundColor = teamColor[team].primary;
      }
      setShowModal(false);
    }
  };

  if (showModal)
    return (
      <Dialog open={showModal}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogTitle>
            Welcome to <Highlight className="tracking-wide">FanBets</Highlight>
          </DialogTitle>
          <DialogHeader>
            <Image
              src="https://i.pinimg.com/736x/21/09/79/210979e1b0ef3ddd0f9ffc9a0a2266f4.jpg"
              alt="Logo"
              width={500}
              height={500}
              className="w-full h-60 object-cover rounded"
            />
            <p className="text-xs text-muted-foreground">
              You can always change your preferred team by visiting the profile
              section.
            </p>
            <Select onValueChange={handleSelectTeam}>
              <SelectTrigger className="w-[180px] ">
                <SelectValue placeholder="Select your favourite IPL team" />
              </SelectTrigger>
              <SelectContent className="">
                {teams.map((team) => (
                  <SelectItem key={team} value={team} className="uppercase">
                    {team}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </DialogHeader>

          <DialogFooter onClick={selectUserTeam}>
            <Button
              type="submit"
              className={`w-full bg-${team}-secondary hover:bg-${team}-secondary/80`}
            >
              Select
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

  return <></>;
}
