"use client";

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Highlight } from "./shared/Highlight";
import { redirect } from "next/navigation";
import { signInUser } from "@/lib/actions";
import { useRef } from "react";

const SignIn = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const userEmail = email.current?.value;
    const userPassword = password.current?.value;

    if (!userEmail || !userPassword) {
      alert("All fields are required");
      return;
    }

    const res = await signInUser({
      email: userEmail,
      password: userPassword,
    });
    console.log(res);

    if (res) {
      const jwt = res.token;
      localStorage.setItem("token", jwt);
      alert("User registered successfully");
      redirect("/");
    }
  };

  return (
    <form className="form">
      <p className="title">Sign In </p>
      <p className="message">
        Signin to access your <Highlight>FanBets</Highlight> account.
      </p>

      <Input ref={email} type="email" placeholder="Email" required />

      <Input ref={password} type="password" placeholder="Password" required />
      <p className="text-right text-xs text-muted-foreground cursor-pointer">
        Forgot Password ?
      </p>
      <Button className="submit" onClick={(e) => handleSignIn(e)}>
        Submit
      </Button>
      <p className="signin text-center">
        Already have an acount ?{" "}
        <Link href="/signup" className="text-blue-600">
          SignUp
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
