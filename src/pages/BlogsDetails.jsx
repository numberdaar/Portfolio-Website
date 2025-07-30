import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ArrowLeft, FileText } from "lucide-react";

const BlogsDetails = () => {
	const { slug } = useParams();

	return (
		<>
			<SEOHead
				title="Blog Post | Ankit Dalal"
				description="Read my thoughts on web development, technology trends, and best practices."
				keywords={[
					"Blog",
					"Article",
					"Web Development",
					"Technology",
					"Programming",
				]}
				url={`/blogs/${slug}`}
			/>

			<div className="space-y-8">
				{/* Back Button */}
				<Link to="/blogs">
					<Button variant="outline" className="group">
						<ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
						Back to Blog
					</Button>
				</Link>

				{/* Blog Content Placeholder */}
				<div className="p-12 border rounded-lg text-center space-y-6">
					<FileText className="h-16 w-16 text-muted-foreground mx-auto" />
					<h1 className="text-2xl font-semibold">Blog Post Coming Soon</h1>
					<p className="text-muted-foreground max-w-md mx-auto">
						This blog post is currently being written. Check back soon for interesting content about web development and technology!
					</p>
					<div className="text-sm text-muted-foreground">
						Slug: {slug}
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogsDetails; 