import { experiences } from "@/constants/index.jsx";
import { Briefcase, MapPin, Calendar, Award, Code } from "lucide-react";

const Experience = () => {
	return (
		<section className="w-full mt-20">
			<div className="space-y-2 fade-in">
				<div className="inline-flex items-center gap-3 mb-2">
					<Briefcase className="h-6 w-6 text-primary" />
					<h2 className="text-section-title">Work Experience</h2>
				</div>
				<p className="text-muted-foreground">My professional journey and career progression</p>
			</div>

			<div className="mt-8 space-y-8">
				{experiences.map((experience, index) => (
					<div
						key={experience.id}
						className="slide-up border rounded-lg p-6 pointer-glow hover:border-primary/50 transition-colors"
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						<div className="flex flex-col lg:flex-row gap-6">
							{/* Company Logo */}
							<div className="flex-shrink-0">
								<img
									src={experience.logo}
									alt={experience.company}
									className="w-16 h-16 rounded-lg object-cover border pointer-bounce"
								/>
							</div>

							{/* Experience Content */}
							<div className="flex-1 space-y-4">
								{/* Header */}
								<div>
									<h3 className="text-xl font-semibold mb-1 pointer-bounce">
										{experience.title}
									</h3>
									<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
										<span className="flex items-center gap-1">
											<Code className="h-4 w-4" />
											{experience.company}
										</span>
										<span className="flex items-center gap-1">
											<MapPin className="h-4 w-4" />
											{experience.location}
										</span>
										<span className="flex items-center gap-1">
											<Calendar className="h-4 w-4" />
											{experience.period}
										</span>
									</div>
									<p className="text-muted-foreground leading-relaxed">
										{experience.description}
									</p>
								</div>

								{/* Achievements */}
								<div>
									<h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
										<Award className="h-4 w-4 text-primary" />
										Key Achievements
									</h4>
									<ul className="space-y-2">
										{experience.achievements.map((achievement, achievementIndex) => (
											<li
												key={achievementIndex}
												className="flex items-start gap-2 text-sm text-muted-foreground"
											>
												<span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
												<span>{achievement}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Technologies */}
								<div>
									<h4 className="text-sm font-semibold mb-3">Technologies Used</h4>
									<div className="flex flex-wrap gap-2">
										{experience.technologies.map((tech, techIndex) => (
											<span
												key={techIndex}
												className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full pointer-pulse"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Timeline Connector */}
			<div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-border -z-10"></div>
		</section>
	);
};

export default Experience; 