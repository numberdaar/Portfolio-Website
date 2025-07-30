import { skills } from "@/constants/index.jsx";
import { Code } from "lucide-react";

const Skills = () => {
	return (
		<section className="w-full mt-20">
			<div className="space-y-2 fade-in">
				<div className="inline-flex items-center gap-3 mb-2">
					<Code className="h-6 w-6 text-primary" />
					<h2 className="text-section-title">Skills & Technologies</h2>
				</div>
				<p className="text-muted-foreground">Technologies and tools I work with</p>
			</div>

			<div className="mt-8 space-y-8">
				{skills.map((skillCategory, index) => (
					<div key={skillCategory.category} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
						<h3 className="text-lg font-semibold mb-4">{skillCategory.category}</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
							{skillCategory.technologies.map((tech, techIndex) => (
								<div
									key={tech.name}
									className="flex flex-col items-center p-4 border rounded-lg hover:bg-accent/50 transition-colors pointer-lift"
									style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
								>
									<i className={`${tech.icon} text-3xl mb-2 pointer-bounce`}></i>
									<span className="text-sm text-center font-medium">{tech.name}</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills; 