import Link from "next/link";
import LoginForm from "./components/LoginForm";
import Logo from "@/components/Logo";

function LoginPage() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen px-4 bg-background">
      <div className="flex flex-col border-[1px] w-full max-w-[450px] px-6 py-12 bg-background-secondary rounded-lg">
        <div className="flex items-center justify-center mb-5">
          <Logo />
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
