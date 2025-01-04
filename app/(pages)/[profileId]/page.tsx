import ProjectCard from "@/app/components/commons/ProjectCard";
import { TotalVisits } from "@/app/components/commons/TotalVisits";
import UserCard from "@/app/components/commons/UserCard/UserCard";
import { auth } from "@/app/lib/auth";
import { getProfileData, getProfileProjects } from "@/app/server/GetProfileData";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewProject from "./NewProject";
import { getDownloadURLFromPath } from "@/app/lib/firebase";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
  }) {
  const { profileId } = await params;
  
  const profileData = await getProfileData(profileId);  
  if (!profileData) return notFound();

    const projects = await getProfileProjects(profileId);

    const session = await auth();
    const isOwner = profileData.userId === session?.user?.id;

    // TODO: add page views tracker
    // If user is not on trial anymore, not let him see the project. Redirect to upgrade
    
  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      { isOwner && <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
        <span>You're using the free trial version.</span>
        <Link href={`/${profileId}/upgrade`}>
        <button className="text-accent-green font-bold">Upgrade Now!</button>
        </Link>
      </div> }
     <div className="w-1/2 flex justify-center h-min">
    <UserCard profileData={profileData} />
     </div>
     <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
     {projects.map(async (project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOwner={isOwner}
            img={(await getDownloadURLFromPath(project.imagePath)) || ""}
          />
        ))}
      {
        isOwner && (
        <NewProject profileId={profileId} />
      )}
      
     </div>
     <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
      <TotalVisits />
     </div>
    </div>
  )
}