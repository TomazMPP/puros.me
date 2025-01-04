"use client"

import { formatUrl } from "@/app/lib/utils";
import { ProjectData } from "@/app/server/GetProfileData";
import Link from "next/link";

export default function ProjectCard({
  project, isOwner, img,
}: {
  project: ProjectData,
  isOwner: boolean, 
  img: string,
}) {

  const projectUrl = formatUrl(project.projectUrl) 
  

  function handleClick() {
    console.log("clicked") // TODO: analytics
  }
  return (
    <Link href={projectUrl} target="_blank" onClick={handleClick}>
    <div className="w-[340px] min-h-[132px] max-h-96 flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <img src={img} alt="Project Image Stock" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        {
          isOwner && <span className="uppercase text-xs font-bold text-accent-green">
          {project.totalVisits || 0} Clicks
        </span>
        }
        
        <div className="flex flex-col">
        <span className="text-white font-bold text-xl">{project.projectName}</span>
        <span className="text-content-body text-sm">{project.projectDescription}</span>
        </div>
      </div>
    </div>
    </Link>
  )
}