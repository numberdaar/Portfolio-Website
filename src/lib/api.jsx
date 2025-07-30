// GitHub API utilities
const GITHUB_API_BASE = 'https://api.github.com';

export const fetchGitHubRepos = async (username) => {
	try {
		const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=10`);
		if (!response.ok) {
			throw new Error('Failed to fetch GitHub repositories');
		}
		const repos = await response.json();
		return repos.filter(repo => !repo.fork && !repo.private);
	} catch (error) {
		console.error('Error fetching GitHub repos:', error);
		return [];
	}
};

export const fetchGitHubProfile = async (username) => {
	try {
		const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
		if (!response.ok) {
			throw new Error('Failed to fetch GitHub profile');
		}
		return await response.json();
	} catch (error) {
		console.error('Error fetching GitHub profile:', error);
		return null;
	}
};

// Utility function to format repository data
export const formatRepoData = (repo) => ({
	id: repo.id,
	name: repo.name,
	description: repo.description || 'No description available',
	url: repo.html_url,
	language: repo.language,
	stars: repo.stargazers_count,
	forks: repo.forks_count,
	updated: repo.updated_at,
	topics: repo.topics || [],
	homepage: repo.homepage,
}); 