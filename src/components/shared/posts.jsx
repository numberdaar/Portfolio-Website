import { projects } from "@/constants/index.jsx";
import { ExternalLink, Github } from "lucide-react";

const Posts = ({ slug, description, showLinks = true }) => {
	const project = projects.find((p) => p.slug === slug);

	if (!project) return null;

	return (
		<div className="p-6 hover:bg-accent/50 transition-colors rounded-lg">
			<div className="flex flex-col md:flex-row gap-6">
				{/* Project Image */}
				<div className="flex-shrink-0">
					<img
						src={project.img}
						alt={project.slug}
						className="w-full md:w-48 h-32 object-cover rounded-lg border pointer-bounce"
					/>
				</div>

				{/* Project Content */}
				<div className="flex-1 space-y-4">
					<div>
						<h3 className="text-xl font-semibold mb-2">{project.slug}</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
					</div>

					{/* Tech Stack */}
					<div className="flex flex-wrap gap-2">
						{project.techStack.map((tech, index) => (
							<span
								key={index}
								className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md pointer-pulse"
							>
								{tech}
							</span>
						))}
					</div>

					{/* Links - Only show if showLinks is true */}
					{showLinks && (
						<div className="flex gap-3">
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors pointer-lift"
								onClick={(e) => e.stopPropagation()}
							>
								<Github className="h-4 w-4" />
								Code
							</a>
							{project.liveLink && (
								<a
									href={project.liveLink}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors pointer-lift"
									onClick={(e) => e.stopPropagation()}
								>
									<ExternalLink className="h-4 w-4" />
									Live Demo
								</a>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Posts; 