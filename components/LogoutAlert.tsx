import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useModalStore from "@/hooks/useModalStore";
import useUserStore from "@/hooks/useUserStore";
import { redirect } from "next/navigation";

export function LogoutAlert({ children }: { children: React.ReactNode }) {
  const { showAlert, setShowAlert } = useModalStore();
  const { clearUser } = useUserStore();

  const handleLogout = () => {
    // handle logout logic
    clearUser();
    setShowAlert(false);
    redirect("/signin");
  };
  return (
    <AlertDialog open={showAlert}>
      <AlertDialogTrigger
        asChild
        className="cursor-pointer"
        onClick={() => setShowAlert(true)}
      >
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setShowAlert(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>Log Out</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
