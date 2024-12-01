import SignUp from "@/components/Signup";

const Page = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      <SignUp />
    </div>
  );
};

export default Page;
