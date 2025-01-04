"use client"

import TextInput from "@/app/components/ui/TextInput";
import Modal from "@/app/components/ui/Modal";
import { ArrowUpFromLine, Plus } from "lucide-react";
import { ChangeEvent, startTransition, useState } from "react";
import TextArea from "@/app/components/ui/TextArea";
import Button from "@/app/components/ui/Button";
import { compressFiles, handleImageInput, triggerImageInput } from "@/app/lib/utils";
import { createProject } from "@/app/actions/CreateProject";
import { useRouter } from "next/navigation";

export default function NewProject({ profileId }: { profileId: string }) {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [projectName, setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [projectUrl, setProjectUrl] = useState("")
  const [projectImage, setProjectImage] = useState<string | null>(null)
  const [isCreatingProject, setIsCreatingProject] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  async function handleCreateProject() {
    setIsCreatingProject(true)
    const imagesInput = document.getElementById("imageInput") as HTMLInputElement
    if (!imagesInput.files) return 

    const compressedFile = await compressFiles(Array.from(imagesInput.files))

    const formData = new FormData()
    formData.append("file", compressedFile[0])
    formData.append("profileId", profileId)
    formData.append("projectName", projectName)
    formData.append("projectDescription", projectDescription)
    formData.append("projectUrl", projectUrl)

    await createProject(formData)

    startTransition(() => {
      setIsCreatingProject(false)
      setIsOpen(false)
      setProjectName("")
      setProjectDescription("")
      setProjectUrl("")
      setProjectImage(null)
      router.refresh()
    })
  }

  return (
    <>
    <button onClick={handleOpenModal} className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border border-dashed ">
    <Plus className="size-10 text-accent-green" />
    <span>New Project</span>
    </button>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
     <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10"> 
        <p className="text-white font-bold text-xl">New Project</p>
        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-3 text-xs">
            <div className="w-[100px] h-[100px] rounded-xl bg-background-tertiary overflow-hidden">
              {projectImage ? (
                <img src={projectImage} alt="Project Image" className="object-cover object-center" />
              ) : (
                <button onClick={() => triggerImageInput("imageInput")} className="w-full h-full"> 100x100 </button>
              )}
            </div>
            <button className="text-white flex items-center gap-2" onClick={() => triggerImageInput("imageInput")}>
              <ArrowUpFromLine className="size-4" />
              <span>Add Image</span>
              </button>
              <input type="file" id="imageInput" accept="image/*" className="hidden" onChange={(e) => setProjectImage(handleImageInput(e))} />
          </div>
          <div className="flex flex-col gap-4 w-[293px] ">
            <div className="flex flex-col gap-1">
              <label htmlFor="project-name" className="text-white font-bold">Project Title</label>
              <TextInput id="project-name" placeholder="Enter project title"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="project-description" className="text-white font-bold">Project Description</label>
              <TextArea id="project-description" placeholder="Enter a short description of your project" className="h-36" 
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="project-url" className="text-white font-bold">Project URL</label>
              <TextInput type="url" id="project-url" placeholder="Enter project URL" 
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-end">
          <button onClick={() => setIsOpen(false)} className="font-bold text-white">
            Go Back
          </button>
          <Button onClick={handleCreateProject} disabled={isCreatingProject}>Save</Button>
        </div>
       </div>
     </Modal>
    </>
  )
}