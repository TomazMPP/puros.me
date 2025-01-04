"use client"

import { Github, Instagram, Linkedin, Plus, Twitter } from "lucide-react";
import { startTransition, useState } from "react";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import { useParams, useRouter } from "next/navigation";
import createSocialLinks from "@/app/actions/CreateSocialLinks";
import TextInput from "../../ui/TextInput";

export default function EditSocialLinks({
  socialMedias,
}: {
  socialMedias?: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter: string;
  };
}) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSavingSocialLinks, setIsSavingSocialLinks] = useState(false);

  const [github, setGithub] = useState(socialMedias?.github || "");
  const [linkedin, setLinkedin] = useState(socialMedias?.linkedin || "");
  const [instagram, setInstagram] = useState(socialMedias?.instagram || "");
  const [twitter, setTwitter] = useState(socialMedias?.twitter || "");

  const { profileId } = useParams();
  
  async function handleAddSocialLinks() {
    setIsSavingSocialLinks(true);
   
    if (!profileId) return;

    await createSocialLinks({
      profileId: profileId as string,
      github,
      linkedin,
      instagram,
      twitter,
    })

    startTransition(() => {
      setIsModalOpen(false);
      setIsSavingSocialLinks(false);
      router.refresh()
    })
  }

  return (
    <>
    <button onClick={() => setIsModalOpen(true)} className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
    <Plus />
  </button>

  <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
    <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10 w-[514px]">
      <p className="text-white font-bold text-xl">Add social media</p>
      <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 w-full">
        <Github />
        <TextInput type="text" placeholder="Link Github" value={github} onChange={(e) => setGithub(e.target.value)} />
      </div>
      <div className="flex items-center gap-2 w-full">
        <Linkedin />
        <TextInput type="text" placeholder="Link Linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
      </div>
      <div className="flex items-center gap-2 w-full">
        <Instagram />
        <TextInput type="text" placeholder="Link Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
      </div>
      <div className="flex items-center gap-2 w-full">
        <Twitter />
        <TextInput type="text" placeholder="Link Twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
      </div>
      </div>
      <div className="flex gap-4 justify-end">
      <button onClick={() => setIsModalOpen(false)} className="font-bold text-white">Go Back</button>
      <Button onClick={handleAddSocialLinks} disabled={isSavingSocialLinks}>Save</Button>
      </div>
    </div>
    </Modal>
    </>
      
  );
}