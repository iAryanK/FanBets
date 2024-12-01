import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Highlight } from "./shared/Highlight";
import Form from "next/form";

const SignUp = () => {
  const handleSignUp = async () => {
    "use server";
    // TODO: Implement Signup logic
  };

  return (
    <Form className="form" action={handleSignUp}>
      <p className="title">Register</p>
      <p className="message">
        Register and get full access to <Highlight>FanBets</Highlight>
      </p>
      <div className="flex">
        <Input type="firstname" placeholder="First Name" required />

        <Input type="last name" placeholder="Last Name" required />
      </div>

      <Input type="email" placeholder="Email" required />

      <Input type="password" placeholder="Password" required />
      <Input type="confirmpassword" placeholder="Confirm Password" required />
      <Button className="submit">Submit</Button>
      <p className="signin text-center">
        Already have an acount ?{" "}
        <Link href="/signin" className="text-blue-600">
          SignIn
        </Link>
      </p>
    </Form>
  );
};

export default SignUp;
