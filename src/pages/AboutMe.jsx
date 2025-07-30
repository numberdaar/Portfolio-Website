import SEOHead from "@/components/seo/SEOHead.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Download, Mail } from "lucide-react";

const AboutMe = () => {
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
				title="About Ankit Dalal | Full Stack Developer"
				description="Learn more about Ankit Dalal, a passionate Full Stack Developer specializing in React, Node.js, and MongoDB with experience in building modern web applications."
				keywords={[
					"Ankit Dalal",
					"About",
					"Full Stack Developer",
					"React Developer",
					"Node.js Developer",
					"Web Development",
					"Software Engineer",
				]}
				url="/about"
			/>

			<div className="space-y-8">
				<div className="text-center space-y-4">
					<h1 className="text-section-title">About Me</h1>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Highly motivated and enthusiastic Full Stack Developer experienced in both frontend and backend technologies
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 items-start">
					{/* Profile Image */}
					<div className="space-y-4">
						<img
							src="/images/ankit-profile.jpg"
							alt="Ankit Dalal"
							className="w-full max-w-md mx-auto rounded-lg border"
						/>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button onClick={handleDownloadResume} className="group">
								<Download className="mr-2 h-4 w-4" />
								Download Resume
							</Button>
							<Button variant="outline" asChild>
								<a href="mailto:171ankit.2020@gmail.com">
									<Mail className="mr-2 h-4 w-4" />
									Get In Touch
								</a>
							</Button>
						</div>
					</div>

					{/* About Content */}
					<div className="space-y-6">
						<div>
							<h2 className="text-xl font-semibold mb-3">Who I Am</h2>
							<p className="text-muted-foreground leading-relaxed">
								I'm a highly motivated and enthusiastic Full Stack Developer experienced in both frontend and backend technologies, 
								specializing in building responsive, user-friendly interfaces using HTML, CSS, JavaScript, React.js, and Next.js. 
								On the backend, I work with Node.js and Express.js to develop robust APIs, and I efficiently manage NoSQL databases using MongoDB.
							</p>
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-3">What I Do</h2>
							<p className="text-muted-foreground leading-relaxed">
								I create comprehensive web applications that solve real-world problems. From AI-powered voice synthesis systems 
								to expense tracking applications, I handle every aspect of the development process, ensuring high-quality, 
								maintainable code and exceptional user experiences. I have demonstrated capability in development and bug fixing.
							</p>
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-3">My Approach</h2>
							<p className="text-muted-foreground leading-relaxed">
								I believe in writing clean, efficient code and staying up-to-date with the latest technologies and best practices. 
								I'm always eager to learn new things and take on challenging projects that push my skills forward. 
								I have solved more than 170+ DSA problems on LeetCode, demonstrating my strong problem-solving abilities.
							</p>
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-3">Experience</h2>
							<div className="space-y-3">
								<div className="border-l-2 border-primary pl-4">
									<h3 className="font-medium">Software Developer</h3>
									<p className="text-sm text-muted-foreground">Intelitech Electronics (Dec 2024 - Present)</p>
									<p className="text-sm text-muted-foreground mt-1">
										Working on Etome, a comprehensive EdTech platform. Optimized UI load times by up to 80% through targeted bug fixes and code refactoring.
									</p>
								</div>
								<div className="border-l-2 border-primary pl-4">
									<h3 className="font-medium">Teaching Assistant</h3>
									<p className="text-sm text-muted-foreground">Coding Ninja (Oct 2023 - Jan 2024)</p>
									<p className="text-sm text-muted-foreground mt-1">
										Conducted doubt sessions for React JS concepts and achieved a student satisfaction rating of 4.67 out of 5.
									</p>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-3">Education</h2>
							<div className="space-y-3">
								<div className="border-l-2 border-primary pl-4">
									<h3 className="font-medium">Bachelor of Technology in Electronic And Communication Engineering</h3>
									<p className="text-sm text-muted-foreground">University Institute of Engineering & Technology (MDU, Rohtak, Haryana)</p>
									<p className="text-sm text-muted-foreground">CGPA: 7.50</p>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-3">Achievements & Certifications</h2>
							<div className="space-y-3">
								<div className="border-l-2 border-primary pl-4">
									<h3 className="font-medium">Fellowship in Software Development (React + NodeJS)</h3>
									<p className="text-sm text-muted-foreground">By Crio.do</p>
								</div>
								<div className="border-l-2 border-primary pl-4">
									<h3 className="font-medium">LeetCode Problem Solving</h3>
									<p className="text-sm text-muted-foreground">Solved more than 170+ DSA Problems</p>
								</div>
								<div className="border-l-2 border-primary pl-4">
									<h3 className="font-medium">NCC C Certificate</h3>
									<p className="text-sm text-muted-foreground">A Grade</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutMe; 