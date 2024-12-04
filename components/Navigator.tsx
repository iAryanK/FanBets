"use client";

import {
  Sidebar,
  SidebarBody,
  SidebarButton,
  SidebarLink,
} from "@/components/aceternity/sidebar";
import { useEffect, useState } from "react";
import {
  IconArrowLeft,
  IconShoppingCartPlus,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import useUserStore from "@/hooks/useUserStore";
import { fetchUserDetails } from "@/lib/actions";
import { redirect, usePathname } from "next/navigation";
import useTeamStore from "@/hooks/useTeamStore";
import { LogoutAlert } from "./LogoutAlert";

const Navigator = () => {
  const [open, setOpen] = useState(false);
  const { team } = useTeamStore();
  const pathname = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <IconShoppingCartPlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const { user, setUser } = useUserStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) redirect("/signin");

        const userData = await fetchUserDetails(token);
        setUser(userData);
      } catch (err) {
        console.error("Failed to load user data", err);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={link}
                className={`${
                  pathname === link.href &&
                  `text-${team}-primary dark:text-${team}-primary`
                }`}
              />
            ))}
            <LogoutAlert>
              <SidebarButton
                label="Logout"
                icon=<IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                className={`text-${team}-primary dark:text-${team}-primary`}
              />
            </LogoutAlert>
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: (
                <div className="flex flex-col gap-1 text-xs leading-3">
                  <p className="">
                    {user?.firstName as string} {user?.lastName as string}
                  </p>
                  <p className="text-muted-foreground">{user?.email}</p>
                </div>
              ),
              href: "#",
              icon: (
                <Image
                  src="https://github.com/shadcn.png"
                  className="h-7 w-7 flex-shrink-0 rounded-full"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        FanBets
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

export default Navigator;
