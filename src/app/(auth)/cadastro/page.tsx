import Link from "next/link";
import React from "react";
import SignupForm from "./components/SignupForm";
import { SquareDashedMousePointer } from "lucide-react";
import { cn } from "@/lib/utils";

function SignupPage() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen px-4 bg-background">
      <div className="flex flex-col border-[1px] w-full max-w-[450px] px-6 py-12 bg-background-secondary rounded-lg">
        <div className="flex items-center justify-center mb-5">
          <Link
            href="/"
            className={cn("text-2xl font-extrabold flex items-center gap-2")}
          >
            <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-2">
              <SquareDashedMousePointer size={20} className="stroke-white" />
            </div>
            <div>
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Cadastro
              </span>
            </div>
          </Link>
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
