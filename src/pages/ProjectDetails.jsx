import { useParams, Link } from "react-router-dom";
import { projects } from "@/constants/index.jsx";
import SEOHead from "@/components/seo/SEOHead.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const ProjectDetails = () => {
	const { slug } = useParams();
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		return (
			<div className="text-center space-y-4">
				<h1 className="text-section-title">Project Not Found</h1>
				<p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
				<Link to="/projects">
					<Button>Back to Projects</Button>
				</Link>
			</div>
		);
	}

	return (
		<>
			<SEOHead
				title={`${project.slug} | Ankit Dalal`}
				description={project.description}
				keywords={[...project.techStack, "Project", "Portfolio", "Web Development"]}
				url={`/projects/${project.slug}`}
			/>

			<div className="space-y-8">
				{/* Back Button */}
				<Link to="/projects">
					<Button variant="outline" className="group">
						<ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
						Back to Projects
					</Button>
				</Link>

				{/* Project Header */}
				<div className="space-y-4">
					<h1 className="text-section-title">{project.slug}</h1>
					<p className="text-lg text-muted-foreground">{project.description}</p>
				</div>

				{/* Project Image */}
				<div className="aspect-video rounded-lg overflow-hidden border">
					<img
						src={project.img}
						alt={project.slug}
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Tech Stack */}
				<div>
					<h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
					<div className="flex flex-wrap gap-2">
						{project.techStack.map((tech, index) => (
							<span
								key={index}
								className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md"
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Features */}
				<div>
					<h2 className="text-xl font-semibold mb-3">Key Features</h2>
					<ul className="space-y-2">
						{project.features.map((feature) => (
							<li key={feature.id} className="flex items-start gap-2">
								<span className="text-primary mt-1">•</span>
								<span className="text-muted-foreground">{feature.description}</span>
							</li>
						))}
					</ul>
				</div>

				{/* Links */}
				<div className="flex flex-col sm:flex-row gap-4">
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1"
					>
						<Button className="w-full group">
							<Github className="mr-2 h-4 w-4" />
							View Code
						</Button>
					</a>
					{project.liveLink && (
						<a
							href={project.liveLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1"
						>
							<Button variant="outline" className="w-full group">
								<ExternalLink className="mr-2 h-4 w-4" />
								Live Demo
							</Button>
						</a>
					)}
				</div>
			</div>
		</>
	);
};

export default ProjectDetails; 