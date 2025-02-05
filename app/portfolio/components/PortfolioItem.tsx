import Image from "next/image"

interface Project {
  id: number
  title: string
  category: string
  image: string
}

interface PortfolioItemProps {
  project: Project
  onClick: () => void
}

export default function PortfolioItem({ project, onClick }: PortfolioItemProps) {
  return (
    <div className="mb-4 cursor-pointer group animate-fade-in" onClick={onClick}>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-charcoal bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
          <h3 className="font-serif text-xl text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

