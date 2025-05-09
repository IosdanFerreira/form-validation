import Link from "next/link";
import LoginForm from "./components/LoginForm";
import { SquareDashedMousePointer } from "lucide-react";
import { cn } from "@/lib/utils";

function LoginPage() {
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
                Login
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-1 my-8 text-center">
          <p className="text-muted-foreground">Ainda não possui uma conta?</p>
          <Link
            className="text-primary font-semibold hover:underline"
            href="/cadastro"
          >
            Criar conta
          </Link>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
