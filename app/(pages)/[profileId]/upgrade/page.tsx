import Header from "@/app/components/landing-page/Header";
import Button from "@/app/components/ui/Button";

export default function UpgradePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Header />
      <h2 className="text-2xl font-bold">Choose your plan:</h2>
      <div className="flex gap-4">
        <Button>U$1.99 / month</Button>
        <Button>U$14.99 Lifetime</Button>
      </div>
    </div>
  )
}