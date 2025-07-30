import { Link } from "react-router-dom";
import { Button } from "../ui/button.jsx";
import { ArrowRight, FileText } from "lucide-react";

const BlogSection = () => {
	return (
		<section className="w-full mt-20">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 fade-in">
				<div className="space-y-2">
					<div className="inline-flex items-center gap-3 mb-2">
						<FileText className="h-6 w-6 text-primary" />
						<h2 className="text-section-title">Latest Blog Posts</h2>
					</div>
					<p className="text-muted-foreground">Thoughts on development, technology, and best practices</p>
				</div>
				<Link to="/blogs">
					<Button variant="outline" className="group">
						View All Posts
						<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>
				</Link>
			</div>

			<div className="mt-8 p-6 border rounded-lg slide-up">
				<div className="text-center space-y-4">
					<FileText className="h-12 w-12 text-muted-foreground mx-auto" />
					<h3 className="text-lg font-semibold">Coming Soon</h3>
					<p className="text-muted-foreground">
						I'm working on some interesting blog posts about web development, 
						MERN stack, and modern development practices. Stay tuned!
					</p>
				</div>
			</div>
		</section>
	);
};

export default BlogSection; 