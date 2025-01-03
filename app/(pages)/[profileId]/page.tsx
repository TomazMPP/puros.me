import ProjectCard from "@/app/components/commons/ProjectCard";
import { TotalVisits } from "@/app/components/commons/TotalVisits";
import UserCard from "@/app/components/commons/UserCard";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
  }) {
  const { profileId } = await params;

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
        <span>You're using the free trial version.</span>
        <Link href={`/${profileId}/upgrade`}>
        <button className="text-accent-green font-bold">Upgrade Now!</button>
        </Link>
      </div>
     <div className="w-1/2 flex justify-center h-min">
    <UserCard />
     </div>
     <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <button className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border border-dashed ">
          <Plus className="size-10 text-accent-green" />
          <span>New Project</span>
      </button>
     </div>
     <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
      <TotalVisits />
     </div>
    </div>
  )
}