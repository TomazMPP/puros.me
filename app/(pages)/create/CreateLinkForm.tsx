"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import TextInput from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import { sanitizeLink } from "@/app/lib/utils";
import { verifyLink } from "@/app/actions/VerifyLink";
import { CreateLink } from "@/app/actions/CreateLink";
import { useRouter } from "next/navigation";

export default function CreateLinkForm() {
  const router = useRouter();

  const [link, setLink] = useState("");
  const [error, setError] = useState(""); 
  
  function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(e.target.value));
    setError("");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if(link.length === 0 ) return setError("Please enter a link first");

    const isLinkTaken = await verifyLink(link);
    if (isLinkTaken) return setError("This link is already taken");

   const isLinkCreated = await CreateLink(link);

   if (!isLinkCreated) return setError("An error occurred while creating the link. Try again.");

   router.push(`/${link}`)
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="w-full flex items-center justify-center gap-2">
      <span className="text-white">puros.me/</span>
      <TextInput value={link} onChange={handleLinkChange} />
      <Button className="w-[126px]">Create</Button>
    </form>

    <div>
      <span className="text-accent-pink">{error}</span>
    </div>
    
    </>
  );
}