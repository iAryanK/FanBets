import { cn } from "@/lib/utils";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <strong
      className={cn(
        "rounded-sm bg-violet-100 px-1 py-0.5 font-bold text-vibg-violet-700 dark:bg-violet-700/[0.2] dark:text-vibg-violet-500",
        className
      )}
    >
      {children}
    </strong>
  );
};
