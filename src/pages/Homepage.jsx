import SEOHead from "@/components/seo/SEOHead.jsx";
import ProjectSection from "@/components/shared/projectSection.jsx";
import Skills from "@/components/shared/skills.jsx";
import BlogSection from "@/components/shared/blogSection.jsx";
import GithubContribution from "@/components/shared/githubContributions.jsx";
import GithubProjects from "@/components/shared/githubProjects.jsx";
import Experience from "@/components/shared/experience.jsx";

const HomePage = () => {
	return (
		<>
			<SEOHead
				title="Ankit Dalal - Full Stack Developer"
				description="Full Stack Developer specializing in React, Node.js, and MongoDB. Building modern web applications with clean code and user-centric design."
				keywords={[
					"Full Stack Developer",
					"React Developer",
					"Node.js Developer",
					"MongoDB",
					"Web Development",
					"JavaScript",
					"Portfolio",
				]}
				url="/"
			/>

			<div className="space-y-20">
				{/* Hero Section */}
				<section className="text-center space-y-6 fade-in">
					<h1 className="text-hero">
						Hi, I'm <span className="text-gradient">Ankit Dalal</span>
					</h1>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Full Stack Developer passionate about creating modern web applications with clean code and exceptional user experiences.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="#projects"
							className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors pointer-lift"
						>
							View My Work
						</a>
						<a
							href="/contact"
							className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors pointer-lift"
						>
							Get In Touch
						</a>
					</div>
				</section>

				{/* Featured Projects */}
				<ProjectSection />

				{/* GitHub Projects */}
				<GithubProjects />

				{/* Work Experience */}
				<Experience />

				{/* Skills */}
				<Skills />

				{/* GitHub Contributions */}
				<GithubContribution />

				{/* Blog Section */}
				<BlogSection />
			</div>
		</>
	);
};

export default HomePage; 