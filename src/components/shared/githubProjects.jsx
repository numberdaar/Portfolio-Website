import { useState, useEffect } from "react";
import { fetchGitHubRepos, formatRepoData } from "@/lib/api.jsx";
import { Github, Star, GitFork, ExternalLink, Calendar } from "lucide-react";

const GithubProjects = () => {
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadRepos = async () => {
			try {
				setLoading(true);
				const githubRepos = await fetchGitHubRepos("numberdaar");
				const formattedRepos = githubRepos.map(formatRepoData);
				setRepos(formattedRepos);
			} catch (err) {
				setError("Failed to load GitHub projects");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		loadRepos();
	}, []);

	if (loading) {
		return (
			<section className="w-full mt-20">
				<div className="space-y-2 fade-in">
					<div className="inline-flex items-center gap-3 mb-2">
						<Github className="h-6 w-6 text-primary" />
						<h2 className="text-section-title">GitHub Projects</h2>
					</div>
					<p className="text-muted-foreground">My latest public repositories</p>
				</div>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<div key={i} className="slide-up border rounded-lg p-6 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
							<div className="h-4 bg-muted rounded mb-2"></div>
							<div className="h-3 bg-muted rounded mb-4"></div>
							<div className="h-3 bg-muted rounded w-2/3"></div>
						</div>
					))}
				</div>
			</section>
		);
	}

	if (error) {
		return (
			<section className="w-full mt-20">
				<div className="space-y-2 fade-in">
					<div className="inline-flex items-center gap-3 mb-2">
						<Github className="h-6 w-6 text-primary" />
						<h2 className="text-section-title">GitHub Projects</h2>
					</div>
					<p className="text-muted-foreground">My latest public repositories</p>
				</div>
				<div className="mt-8 p-6 border rounded-lg text-center">
					<p className="text-muted-foreground">{error}</p>
				</div>
			</section>
		);
	}

	return (
		<section className="w-full mt-20">
			<div className="space-y-2 fade-in">
				<div className="inline-flex items-center gap-3 mb-2">
					<Github className="h-6 w-6 text-primary" />
					<h2 className="text-section-title">GitHub Projects</h2>
				</div>
				<p className="text-muted-foreground">My latest public repositories</p>
			</div>

			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{repos.map((repo, index) => (
					<div
						key={repo.id}
						className="slide-up border rounded-lg p-6 pointer-glow hover:border-primary/50 transition-colors"
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						<div className="space-y-4">
							{/* Repository Header */}
							<div>
								<h3 className="text-lg font-semibold mb-2 pointer-bounce">
									<a
										href={repo.url}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-primary transition-colors"
									>
										{repo.name}
									</a>
								</h3>
								<p className="text-sm text-muted-foreground line-clamp-2">
									{repo.description}
								</p>
							</div>

							{/* Repository Stats */}
							<div className="flex items-center gap-4 text-xs text-muted-foreground">
								{repo.language && (
									<span className="flex items-center gap-1">
										<div className="w-3 h-3 rounded-full bg-primary"></div>
										{repo.language}
									</span>
								)}
								<span className="flex items-center gap-1">
									<Star className="h-3 w-3" />
									{repo.stars}
								</span>
								<span className="flex items-center gap-1">
									<GitFork className="h-3 w-3" />
									{repo.forks}
								</span>
							</div>

							{/* Topics */}
							{repo.topics.length > 0 && (
								<div className="flex flex-wrap gap-1">
									{repo.topics.slice(0, 3).map((topic) => (
										<span
											key={topic}
											className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md pointer-pulse"
										>
											{topic}
										</span>
									))}
									{repo.topics.length > 3 && (
										<span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
											+{repo.topics.length - 3}
										</span>
									)}
								</div>
							)}

							{/* Links */}
							<div className="flex items-center justify-between pt-2">
								<div className="flex items-center gap-1 text-xs text-muted-foreground">
									<Calendar className="h-3 w-3" />
									{new Date(repo.updated).toLocaleDateString()}
								</div>
								<div className="flex gap-2">
									<a
										href={repo.url}
										target="_blank"
										rel="noopener noreferrer"
										className="p-1 text-muted-foreground hover:text-primary transition-colors pointer-lift"
									>
										<Github className="h-4 w-4" />
									</a>
									{repo.homepage && (
										<a
											href={repo.homepage}
											target="_blank"
											rel="noopener noreferrer"
											className="p-1 text-muted-foreground hover:text-primary transition-colors pointer-lift"
										>
											<ExternalLink className="h-4 w-4" />
										</a>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{repos.length === 0 && (
				<div className="mt-8 p-6 border rounded-lg text-center">
					<p className="text-muted-foreground">No public repositories found</p>
				</div>
			)}
		</section>
	);
};

export default GithubProjects; 