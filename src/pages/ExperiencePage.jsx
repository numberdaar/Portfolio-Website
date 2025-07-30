import { experiences } from "@/constants/index.jsx";
import SEOHead from "@/components/seo/SEOHead.jsx";
import Experience from "@/components/shared/experience.jsx";
import { Download, Briefcase, Award, Users, TrendingUp } from "lucide-react";

const ExperiencePage = () => {
	const totalExperience = experiences.length;
	const currentRole = experiences[0];
	const totalProjects = experiences.reduce((acc, exp) => acc + (exp.achievements?.length || 0), 0);

	const handleDownloadResume = () => {
		const resumeUrl = "/Ankit_SoftwareDeveloper.pdf";
		const link = document.createElement("a");
		link.href = resumeUrl;
		link.download = "Ankit_Dalal_Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<>
			<SEOHead
				title="Experience | Ankit Dalal"
				description="Explore my professional journey, work experience, and career achievements in full-stack development."
				keywords={[
					"Work Experience",
					"Career",
					"Professional Journey",
					"Full Stack Developer",
					"React Developer",
					"Node.js Developer",
				]}
				url="/experience"
			/>

			<div className="space-y-8">
				{/* Header */}
				<div className="text-center space-y-4">
					<h1 className="text-section-title">Work Experience</h1>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						My professional journey in software development, specializing in React.js, Node.js, and MongoDB with experience in building modern web applications.
					</p>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					<div className="p-6 border rounded-lg text-center pointer-glow">
						<Briefcase className="h-8 w-8 text-primary mx-auto mb-2" />
						<div className="text-2xl font-bold">{totalExperience}</div>
						<div className="text-sm text-muted-foreground">Positions Held</div>
					</div>
					<div className="p-6 border rounded-lg text-center pointer-glow">
						<Award className="h-8 w-8 text-primary mx-auto mb-2" />
						<div className="text-2xl font-bold">{totalProjects}</div>
						<div className="text-sm text-muted-foreground">Key Achievements</div>
					</div>
					<div className="p-6 border rounded-lg text-center pointer-glow">
						<Users className="h-8 w-8 text-primary mx-auto mb-2" />
						<div className="text-2xl font-bold">4.67/5</div>
						<div className="text-sm text-muted-foreground">Student Rating</div>
					</div>
					<div className="p-6 border rounded-lg text-center pointer-glow">
						<TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
						<div className="text-2xl font-bold">80%</div>
						<div className="text-sm text-muted-foreground">Performance Boost</div>
					</div>
				</div>

				{/* Current Role Highlight */}
				{currentRole && (
					<div className="p-6 border-2 border-primary/20 rounded-lg bg-primary/5 pointer-glow">
						<div className="flex items-center gap-4 mb-4">
							<img
								src={currentRole.logo}
								alt={currentRole.company}
								className="w-12 h-12 rounded-lg object-cover border"
							/>
							<div>
								<h3 className="text-lg font-semibold">{currentRole.title}</h3>
								<p className="text-muted-foreground">{currentRole.company}</p>
							</div>
						</div>
						<p className="text-muted-foreground mb-4">{currentRole.description}</p>
						<div className="flex flex-wrap gap-2">
							{currentRole.technologies.slice(0, 6).map((tech, index) => (
								<span
									key={index}
									className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full pointer-pulse"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				)}

				{/* Download Resume */}
				<div className="text-center">
					<button
						onClick={handleDownloadResume}
						className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors pointer-lift"
					>
						<Download className="h-4 w-4" />
						Download Resume
					</button>
				</div>

				{/* Experience Timeline */}
				<Experience />
			</div>
		</>
	);
};

export default ExperiencePage; 