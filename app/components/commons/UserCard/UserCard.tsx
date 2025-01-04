import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Button from "../../ui/Button"
import EditSocialLinks from "./EditSocialLinks"
import Link from "next/link"
import { ProfileData } from "@/app/server/GetProfileData"
import AddCustomLink from "./AddCustomLink"
import { formatUrl } from "@/app/lib/utils"
import EditUserCard from "./EditUserCard"
import { profile } from "console"
import { getDownloadURLFromPath } from "@/app/lib/firebase"

export default async function UserCard({
  profileData,
  isOwner
}: {
  profileData?: ProfileData
  isOwner?: boolean
}) {

  const icons = [Github, Instagram, Linkedin, Twitter];

  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img src={await getDownloadURLFromPath(profileData?.imagePath) || "/Person.png"} alt="Person Picture" className="rounded-full object-cover w-full h-full" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2">
            <h3 className="text-3xl font-bold min-w-0 overflow-hidden">{profileData?.name}</h3>
            { isOwner && <EditUserCard profileData={profileData} /> }
          </div>
          <p className="opacity-40">
            {profileData?.description}
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="uppercase text-xs font-medium">Links</span>
          <div className="flex gap-3">
            { profileData?.socialMedias?.github && <Link href={profileData?.socialMedias?.github} target="_blank" className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
            <Github />
            </Link> }
            { profileData?.socialMedias?.instagram && <Link href={profileData?.socialMedias?.instagram} target="_blank" className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
            <Instagram />
            </Link> }
            { profileData?.socialMedias?.linkedin && <Link href={profileData?.socialMedias?.linkedin} target="_blank" className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
            <Linkedin />
            </Link> }
            { profileData?.socialMedias?.twitter && <Link href={profileData?.socialMedias?.twitter} target="_blank" className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
            <Twitter />
            </Link> }
            {!profileData &&
            icons.map((Icon, index) => (
              <button
                key={index}
                className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
              >
                <Icon />
              </button>
            ))}
            { isOwner && <EditSocialLinks socialMedias={profileData?.socialMedias} /> }

          </div>
          </div>
          <div className="flex flex-col gap-3 w-full min-h-[172px]">
            <div className="w-full flex flex-col items-center gap-3">
              {!profileData && <Button className="w-full">Add your first link</Button>}
              {!profileData && <Button className="w-full">Add your first link</Button>}
              {!profileData && <Button className="w-full">Add your first link</Button>}
              { profileData?.link1 && <Link href={formatUrl(profileData?.link1.url)} target="_blank" className="w-full">
              <Button className="w-full">{profileData?.link1.title}</Button>
              </Link> }
              { profileData?.link2 && <Link href={formatUrl(profileData?.link2.url)} target="_blank" className="w-full">
              <Button className="w-full">{profileData?.link2.title}</Button>
              </Link> }
              { profileData?.link3 && <Link href={formatUrl(profileData?.link3.url)} target="_blank" className="w-full">
              <Button className="w-full">{profileData?.link3.title}</Button>
              </Link>} 
              { isOwner && <AddCustomLink /> }
            </div>
        </div>
    </div>
  )
}