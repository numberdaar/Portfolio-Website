import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-border py-8 mt-16">
			<div className="max-w-screen-sm mx-auto px-5">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="text-sm text-muted-foreground">
						© {currentYear} Ankit Dalal. All rights reserved.
					</div>
					
					<div className="flex items-center space-x-4">
						<a
							href="https://github.com/numberdaar"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							<Github className="h-5 w-5" />
							<span className="sr-only">GitHub</span>
						</a>
						<a
							href="https://www.linkedin.com/in/ankit-dalal-154a16229"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							<Linkedin className="h-5 w-5" />
							<span className="sr-only">LinkedIn</span>
						</a>
						<a
							href="https://twitter.com/ankit_dalal"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							<Twitter className="h-5 w-5" />
							<span className="sr-only">Twitter</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer; 