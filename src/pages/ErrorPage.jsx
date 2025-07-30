import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Home, AlertTriangle } from "lucide-react";

const ErrorPage = () => {
	return (
		<>
			<SEOHead
				title="Page Not Found | Ankit Dalal"
				description="The page you're looking for doesn't exist."
				keywords={["404", "Page Not Found", "Error"]}
				url="/404"
			/>

			<div className="text-center space-y-8">
				<div className="space-y-4">
					<AlertTriangle className="h-16 w-16 text-muted-foreground mx-auto" />
					<h1 className="text-section-title">Page Not Found</h1>
					<p className="text-lg text-muted-foreground max-w-md mx-auto">
						Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link to="/">
						<Button className="group">
							<Home className="mr-2 h-4 w-4" />
							Go Home
						</Button>
					</Link>
					<Button variant="outline" onClick={() => window.history.back()}>
						Go Back
					</Button>
				</div>
			</div>
		</>
	);
};

export default ErrorPage; 