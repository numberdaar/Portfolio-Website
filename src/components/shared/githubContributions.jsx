import GitHubCalendar from "react-github-calendar";
import { Github } from "lucide-react";

const GithubContribution = () => {
	return (
		<section className="w-full mt-20">
			<div className="space-y-2 fade-in">
				<div className="inline-flex items-center gap-3 mb-2">
					<Github className="h-6 w-6 text-primary" />
					<h2 className="text-section-title">GitHub Activity</h2>
				</div>
				<p className="text-muted-foreground">My coding activity and contributions</p>
			</div>

			<div className="mt-8 p-6 border rounded-lg slide-up">
				<div className="text-center space-y-4">
					<GitHubCalendar
						username="numberdaar"
						theme={{
							light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
							dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
						}}
						hideColorLegend
						hideMonthLabels
						hideTotalCount
					/>
					<div className="text-sm text-muted-foreground">
						<a
							href="https://github.com/numberdaar"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							View my GitHub profile
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GithubContribution; 