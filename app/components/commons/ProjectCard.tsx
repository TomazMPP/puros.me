export default function ProjectCard() {
  return (
    <div className="w-[430px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <img src="/ProjectImage.png" alt="Project Image Stock" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-accent-green">
          10 clicks
        </span>
        <div className="flex flex-col">
        <span className="text-white font-bold text-xl">CodeLink</span>
        <span className="text-content-body text-sm">GitHub and GitLab integration.</span>
        </div>
      </div>
    </div>
  )
}