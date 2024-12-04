"use client";
import { Button } from "@/components/ui/button";
import useModalStore from "@/hooks/useModalStore";
import useTeamStore from "@/hooks/useTeamStore";
import useUserStore from "@/hooks/useUserStore";

const Page = () => {
  const { setShowModal } = useModalStore();
  const { team } = useTeamStore();
  const { user } = useUserStore();
  return (
    <div className="card max-md:mx-auto max-md:mt-20 overflow-hidden w-full">
      <div className="main-content">
        <div className="header">
          <span>Profile | </span>
          <span>
            {user?.firstName} {user?.lastName}
          </span>
        </div>
        <p className="heading">
          You have currently selected{" "}
          <strong className="uppercase">{team}</strong> as your favourite team.
        </p>
        <Button onClick={() => setShowModal(true)}>Change Team</Button>
      </div>
      <div className="footer">FanBets</div>
    </div>
  );
};

export default Page;
