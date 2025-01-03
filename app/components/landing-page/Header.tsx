import Link from "next/link";
import Button from "../ui/Button";
import { auth } from "@/app/lib/auth";
import { manageAuth } from "@/app/actions/ManageAuth";

export default async function Header() {
  const session = await auth();
  
  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
        <Link href="/">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="Puros Logo" />
          <h3 className="text-white text-2xl font-bold">Puros.me</h3>
        </div>
        </Link>
        <div className="flex items-center gap-4">
        {session && <Button>Minha Página</Button>}
        <form action={manageAuth}>
          <Button>{session ? "Sair" : "Login"}</Button>
        </form>

          
        </div>
    </div>
  )
}