export interface GitHubRepo {
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  pushed_at: string;
  topics: string[];
  fork: boolean;
  archived: boolean;
  private: boolean;
}

const GITHUB_API = 'https://api.github.com';

function getHeaders(): HeadersInit {
  const token = import.meta.env.GITHUB_TOKEN;
  if (token) {
    return {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    };
  }

  return {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
}

export async function fetchUserRepos(username: string): Promise<GitHubRepo[]> {
  const repos: GitHubRepo[] = [];
  let page = 1;

  while (page <= 5) {
    const response = await fetch(
      `${GITHUB_API}/users/${username}/repos?per_page=100&page=${page}&sort=pushed`,
      { headers: getHeaders() },
    );

    if (!response.ok) {
      console.warn(
        `[github] Failed to fetch repos for ${username}: ${response.status} ${response.statusText}`,
      );
      return repos;
    }

    const batch = (await response.json()) as GitHubRepo[];
    if (!batch.length) break;

    repos.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }

  return repos.filter((repo) => !repo.private && !repo.fork && !repo.archived);
}

export async function fetchPublicRepoCount(username: string): Promise<number> {
  const response = await fetch(`${GITHUB_API}/users/${username}`, {
    headers: getHeaders(),
  });

  if (!response.ok) return 0;

  const data = (await response.json()) as { public_repos?: number };
  return data.public_repos ?? 0;
}
