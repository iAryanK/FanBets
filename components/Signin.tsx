import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Highlight } from "./shared/Highlight";
import Form from "next/form";

const SignIn = () => {
  const handleSignIn = async () => {
    "use server";
    // TODO: Implement Signin logic
  };

  return (
    <Form className="form" action={handleSignIn}>
      <p className="title">Sign In </p>
      <p className="message">
        Signin to access your <Highlight>FanBets</Highlight> account.
      </p>

      <Input type="email" placeholder="Email" required />

      <Input type="password" placeholder="Password" required />
      <p className="text-right text-xs text-muted-foreground cursor-pointer">
        Forgot Password ?
      </p>
      <Button className="submit">Submit</Button>
      <p className="signin text-center">
        Already have an acount ?{" "}
        <Link href="/signup" className="text-blue-600">
          Signup
        </Link>
      </p>
    </Form>
  );
};

export default SignIn;
