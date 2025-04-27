import Link from "next/link";
import Logo from "@/components/Logo";
import React from "react";
import SignupForm from "./components/SignupForm";

function SignupPage() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen px-4 bg-background">
      <div className="flex flex-col border-[1px] w-full max-w-[450px] px-6 py-12 bg-background-secondary rounded-lg">
        <div className="flex items-center justify-center mb-5">
          <Logo />
        </div>

        <div className="flex items-center justify-center gap-1 my-8 text-center">
          <p className="text-muted-foreground">Já possui uma conta?</p>
          <Link
            className="text-primary font-semibold hover:underline"
            href="/login"
          >
            Faça o login
          </Link>
        </div>

        <SignupForm />
      </div>
    </div>
  );
}

export default SignupPage;
