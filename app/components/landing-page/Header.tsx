import Button from "../ui/Button";

export default function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
        <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="Puros Logo" />
        <h3 className="text-white text-2xl font-bold">Puros.me</h3>
        </div>
        <div className="flex items-center gap-4">
          <Button>My Page</Button>
          <Button>Log Out</Button>
        </div>
    </div>
  )
}