"use client";

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Highlight } from "./shared/Highlight";
import { useRef } from "react";
import { signUpUser } from "@/lib/actions";
import { redirect } from "next/navigation";

const SignUp = () => {
  const firstname = useRef<HTMLInputElement>(null);
  const lastname = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmpassword = useRef<HTMLInputElement>(null);

  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const firstName = firstname.current?.value;
    const lastName = lastname.current?.value;
    const userEmail = email.current?.value;
    const userPassword = password.current?.value;
    const confirmPassword = confirmpassword.current?.value;

    if (!firstName || !lastName || !userEmail || !userPassword) {
      alert("All fields are required");
      return;
    }

    if (userPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await signUpUser({
      firstName,
      lastName,
      email: userEmail,
      password: userPassword,
    });

    if (res) {
      localStorage.setItem("token", res.token);
      redirect("/");
    }
  };

  return (
    <form className="form">
      <p className="title">Register</p>
      <p className="message">
        Register and get full access to <Highlight>FanBets</Highlight>
      </p>
      <div className="flex">
        <Input
          className="bg-white border-none text-black"
          ref={firstname}
          type="firstname"
          placeholder="First Name"
          required
        />

        <Input
          className="bg-white border-none text-black"
          ref={lastname}
          type="last name"
          placeholder="Last Name"
          required
        />
      </div>

      <Input
        className="bg-white border-none text-black"
        ref={email}
        type="email"
        placeholder="Email"
        required
      />

      <Input
        className="bg-white border-none text-black"
        ref={password}
        type="password"
        placeholder="Password"
        required
      />
      <Input
        className="bg-white border-none text-black"
        ref={confirmpassword}
        type="confirmpassword"
        placeholder="Confirm Password"
        required
      />
      <Button className="submit" onClick={(e) => handleSignUp(e)}>
        Submit
      </Button>
      <p className="signin text-center">
        Already have an acount ?{" "}
        <Link href="/signin" className="text-blue-600">
          SignIn
        </Link>
      </p>
    </form>
  );
};

export default SignUp;
