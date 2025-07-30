import SEOHead from "@/components/seo/SEOHead.jsx";
import { FileText } from "lucide-react";

const BlogsPage = () => {
	return (
		<>
			<SEOHead
				title="Blog | Ankit Dalal"
				description="Read my thoughts on web development, technology trends, and best practices in modern software development."
				keywords={[
					"Blog",
					"Articles",
					"Web Development",
					"Technology",
					"Programming",
					"Best Practices",
				]}
				url="/blogs"
			/>

			<div className="space-y-8">
				<div className="text-center space-y-4">
					<h1 className="text-section-title">Blog</h1>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Thoughts on development, technology, and best practices
					</p>
				</div>

				<div className="p-12 border rounded-lg text-center space-y-6">
					<FileText className="h-16 w-16 text-muted-foreground mx-auto" />
					<h2 className="text-2xl font-semibold">Coming Soon</h2>
					<p className="text-muted-foreground max-w-md mx-auto">
						I'm working on some interesting blog posts about web development, 
						MERN stack, and modern development practices. Stay tuned for updates!
					</p>
					<div className="text-sm text-muted-foreground">
						Topics I'm planning to cover:
					</div>
					<div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
						{[
							"MERN Stack Development",
							"React Best Practices",
							"Node.js Performance",
							"Database Design",
							"API Development",
							"Deployment Strategies",
						].map((topic) => (
							<span
								key={topic}
								className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
							>
								{topic}
							</span>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogsPage; 