import Header from "@/app/components/landing-page/Header";
import Button from "@/app/components/ui/Button";
import TextInput from "@/app/components/ui/Input";
import { Rocket } from "lucide-react";
import CreateLinkForm from "./CreateLinkForm";

export default function CreatePage() {
  return (
   <div>
    <Header />
    <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
    <div className="flex items-center gap-4">
      <h1 className="text-4xl font-bold text-white">Choose your URL</h1>
      <Rocket className="size-10" />
      </div>
      <CreateLinkForm />
    </div>
   </div>
  );
}