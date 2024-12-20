import SideBar from "@/components/Navigator";
import { SelectTeamModal } from "@/components/SelectTeamModal";
import TopBar from "@/components/shared/TopBar";
import { cn } from "@/lib/utils";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full m-auto md:p-2">
      <div
        className={cn(
          "md:rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1  mx-auto h-full border-neutral-200 dark:border-neutral-700 overflow-x-hidden"
        )}
      >
        <SideBar />
        <div className="flex flex-1">
          <div className="p-2 md:p-10 md:pt-5 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll">
            <TopBar />
            {children}
          </div>
        </div>
      </div>
      <SelectTeamModal />
    </div>
  );
}
