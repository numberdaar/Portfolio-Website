import { projects } from "@/constants/index.jsx";
import SEOHead from "@/components/seo/SEOHead.jsx";
import Posts from "@/components/shared/posts.jsx";

const ProjectsPage = () => {
	return (
		<>
			<SEOHead
				title="Projects | Ankit Dalal"
				description="Explore my portfolio of web development projects built with modern technologies including React, Node.js, and MongoDB."
				keywords={[
					"Projects",
					"Portfolio",
					"Web Development",
					"React",
					"Node.js",
					"MongoDB",
					"Full Stack",
				]}
				url="/projects"
			/>

			<div className="space-y-8">
				<div className="text-center space-y-4">
					<h1 className="text-section-title">My Projects</h1>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						A collection of projects I've built to showcase my skills and passion for web development
					</p>
				</div>

				<div className="space-y-6">
					{projects.map((project, index) => (
						<div
							key={project.id}
							className="slide-up border rounded-lg"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<Posts slug={project.slug} description={project.description} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ProjectsPage; 