"use client";

import useTeamStore from "@/hooks/useTeamStore";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { team } = useTeamStore();

  return (
    <strong
      className={`rounded-sm px-1 py-0.5 font-bold bg-${team}-primary ${className}`}
    >
      {children}
    </strong>
  );
};
