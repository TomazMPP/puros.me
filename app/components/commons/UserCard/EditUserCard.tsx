"use client"

import { ArrowUpFromLine, UserPen } from "lucide-react"
import Modal from "../../ui/Modal"
import { startTransition, useState } from "react"
import TextInput from "../../ui/TextInput"
import TextArea from "../../ui/TextArea"
import Button from "../../ui/Button"
import { useParams, useRouter } from "next/navigation"
import { compressFiles, handleImageInput, triggerImageInput } from "@/app/lib/utils"
import { saveProfile } from "@/app/actions/SaveProfile"
import { ProfileData } from "@/app/server/GetProfileData"

export default function EditUserCard({ profileData, }: { profileData?: ProfileData }) {
  const router = useRouter()
  const { profileId } = useParams()

  const [isModalOpen, setIsModalOpen] = useState(false) 
  const [isSavingProfile, setIsSavingProfile] = useState(false)	
  const [profilePic, setProfilePic] = useState<string | null>(null) 
  const [yourName, setYourName] = useState(profileData?.name || "")
  const [yourDescription, setYourDescription] = useState(profileData?.description || "")
  
  async function handleSaveProfile() {
    setIsSavingProfile(true)
    
    const imagesInput = document.getElementById("profile-pic-input") as HTMLInputElement
    if (!imagesInput.files) return

    const compressedFile = await compressFiles(Array.from(imagesInput.files))

    if (!profileId) return
    const formData = new FormData()
    formData.append("profileId", profileId as string)
    formData.append("profilePic", compressedFile[0])
    formData.append("yourName", yourName)
    formData.append("yourDescription", yourDescription)

    await saveProfile(formData)

    startTransition(() => {
      setIsModalOpen(false)
      setIsSavingProfile(false)
      router.refresh()
    })
  }
  return (
    <>
     <button onClick={() => setIsModalOpen(true)}>
      <UserPen />
    </button>
    <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10">
        <p className="text-white font-bold text-xl">Edit Profile</p>
        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-3 text-xs">
            <div className="w-[100px] h-[100px] rounded-xl bg-background-tertiary overflow-hidden">
              { profilePic ? (<img src={profilePic} alt="User Profile Picture" className="object-cover object-center" /> ) : (
              <button onClick={() => triggerImageInput("profile-pic-input")} className="w-full h-full">100x100</button> )}
            </div>
            <button onClick={() => triggerImageInput("profile-pic-input")} className="text-white flex items-center gap-2">
              <ArrowUpFromLine className="size-4" />
              <span>Add picture</span>
            </button>
            <input id="profile-pic-input" type="file" accept="image/*" className="hidden" onChange={(e) => setProfilePic(handleImageInput(e))} />
          </div>
          <div className="flex flex-col gap-4 w-[293px]">
            <div className="flex flex-col gap-1">
              <label htmlFor="your-name" className="text-white font-bold">Your User</label>
              <TextInput id="your-name" placeholder="Type your user" value={yourName} onChange={(e) => setYourName(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
            <label htmlFor="your-description">Bio</label>
            <TextArea id="your-description" placeholder="Your bio..." className="h-36" value={yourDescription} onChange={(e) => setYourDescription(e.target.value)} />
          </div>
          </div> 
        </div>
        <div className="flex gap-4 justify-end">
        <button onClick={() => setIsModalOpen(false)} className="font-bold text-white">Go Back</button>
        <Button onClick={handleSaveProfile} disabled={isSavingProfile}>Save</Button>
        </div>
      </div>
    </Modal>
    </>
   
  )
}