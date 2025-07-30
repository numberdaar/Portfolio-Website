export const projects = [
	{
		id: 1,
		slug: "Neural-Voice-Synthesis-Platform",
		description: "Neural Voice Synthesis Platform is a comprehensive AI-driven text-to-speech system leveraging OpenAI's neural TTS API for natural voice synthesis with advanced audio processing and intelligent content management.",
		techStack: ["React.js", "Node.js", "OpenAI API", "MongoDB", "Express.js", "FFmpeg", "Database Design"],
		githubUrl: "https://github.com/numberdaar/neural-voice-synthesis",
		liveLink: "https://text-to-audio-convert.vercel.app",
		img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
		featured: true,
	},
	{
		id: 2,
		slug: "Expense-Tracker-Redux",
		description: "Expense tracker is web app for tracking daily expenses and managing budgets. Users can set a monthly budget, log expenses, and view spending insights. Key features include expense categorization, budget tracking, filters.",
		techStack: ["React", "Redux Toolkit", "React Router", "JavaScript", "CSS"],
		githubUrl: "https://github.com/numberdaar/expense-tracker-redux",
		liveLink: "https://expense-tracker-redux-two.vercel.app",
		img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
		featured: true,
	},
	{
		id: 3,
		slug: "Portfolio-Website",
		description: "A responsive portfolio website showcasing projects, skills, and professional experience with modern design and dark/light theme support.",
		techStack: ["React", "Tailwind CSS", "Vite", "React Router", "Framer Motion"],
		githubUrl: "https://github.com/numberdaar/portfolio",
		liveLink: "https://ankit-dalal-portfolio.vercel.app",
		img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
		featured: false,
	},
];

export const experiences = [
	{
		id: 1,
		title: "Software Developer",
		company: "Intelitech Electronics (Resolute Simplifying Resolutions)",
		location: "Remote",
		period: "December 2024 - Present",
		description: "Working on Etome, a comprehensive EdTech platform connecting schools, teachers, and students with interactive panels and e-ink learning devices.",
		logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
		achievements: [
			"Successfully performing maintenance on the front-end of the platform, built with React, Redux, React-Bootstrap, and custom CSS",
			"Optimized UI load times and performance by up to 80% through targeted bug fixes and code refactoring",
			"Communicated with back-end developers to troubleshoot and resolve front-end issues, ensuring seamless API integration"
		],
		technologies: ["React.js", "Redux", "React-Bootstrap", "CSS", "JavaScript", "API Integration"]
	},
	{
		id: 2,
		title: "Teaching Assistant",
		company: "Coding Ninja (Sunrise Mentors Private Limited)",
		location: "Remote",
		period: "October 15, 2023 - January 15, 2024",
		description: "Conducted doubt sessions and provided guidance to students learning React JS concepts.",
		logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
		achievements: [
			"Conducted doubt sessions to assist students in understanding React JS concepts",
			"Debugged student code to ensure functionality and adherence to best practices",
			"Demonstrated strong debugging skills and instructional abilities",
			"Achieved a high student satisfaction rating of 4.67 out of 5 for effective communication and teaching"
		],
		technologies: ["React.js", "JavaScript", "Debugging", "Teaching", "Code Review"]
	}
];

export const skills = [
	{
		category: "Languages",
		technologies: [
			{ name: "JavaScript (JS)", icon: "fab fa-js-square" },
			{ name: "JSX", icon: "fab fa-react" },
			{ name: "DOM", icon: "fas fa-code" }
		]
	},
	{
		category: "Frameworks & Libraries",
		technologies: [
			{ name: "React.js", icon: "fab fa-react" },
			{ name: "Material UI", icon: "fas fa-palette" },
			{ name: "Redux", icon: "fas fa-database" },
			{ name: "Express.js", icon: "fab fa-node-js" },
			{ name: "Mongoose", icon: "fas fa-leaf" },
			{ name: "Axios", icon: "fas fa-exchange-alt" }
		]
	},
	{
		category: "Platforms & Tools",
		technologies: [
			{ name: "MongoDB", icon: "fas fa-leaf" },
			{ name: "Postman", icon: "fas fa-paper-plane" },
			{ name: "VSCode", icon: "fas fa-code" },
			{ name: "Netlify", icon: "fas fa-cloud" },
			{ name: "Vercel", icon: "fas fa-rocket" },
			{ name: "Git", icon: "fab fa-git-alt" }
		]
	},
	{
		category: "Concepts & Technologies",
		technologies: [
			{ name: "REST API", icon: "fas fa-server" },
			{ name: "Context API", icon: "fas fa-sitemap" },
			{ name: "Database Design", icon: "fas fa-database" },
			{ name: "API Integration", icon: "fas fa-plug" }
		]
	},
	{
		category: "Problem Solving",
		technologies: [
			{ name: "Data Structures", icon: "fas fa-sitemap" },
			{ name: "Algorithms", icon: "fas fa-brain" },
			{ name: "LeetCode", icon: "fas fa-code" }
		]
	}
];

export const socialLinks = [
	{
		name: "GitHub",
		url: "https://github.com/numberdaar",
		icon: "devicon-github-original",
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/ankit-dalal-154a16229",
		icon: "devicon-linkedin-plain",
	},
	{
		name: "Portfolio",
		url: "https://www.crio.do/learn/portfolio/crio-171ankit-2020",
		icon: "devicon-github-original",
	},
];

export const contactInfo = {
	email: "171ankit.2020@gmail.com",
	phone: "+91 7988598074",
	location: "Bangalore",
	github: "https://github.com/numberdaar",
	linkedin: "https://www.linkedin.com/in/ankit-dalal-154a16229",
	portfolio: "https://www.crio.do/learn/portfolio/crio-171ankit-2020",
}; 