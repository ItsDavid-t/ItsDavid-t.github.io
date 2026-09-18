import { siteConfig, type Project, type ProjectDefinition } from '../data/site';
import { fetchPublicRepoCount, fetchUserRepos, type GitHubRepo } from './github';

function buildGithubUrl(repoName: string): string {
  return `https://github.com/${siteConfig.githubUsername}/${repoName}`;
}

function formatRepoName(repoName: string): string {
  return repoName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function repoId(repoName: string): string {
  return repoName.toLowerCase();
}

function isEchoProduct(repo: GitHubRepo): boolean {
  const { githubSync } = siteConfig;
  const name = repo.name.toLowerCase();

  if (githubSync.excludeRepos.some((excluded) => excluded.toLowerCase() === name)) {
    return false;
  }

  if (githubSync.repoNamePrefixes.some((prefix) => name.startsWith(prefix.toLowerCase()))) {
    return true;
  }

  return githubSync.repoTopics.some((topic) =>
    repo.topics.map((t) => t.toLowerCase()).includes(topic.toLowerCase()),
  );
}

function mergeDefinition(definition: ProjectDefinition, repo?: GitHubRepo): Project {
  return {
    ...definition,
    github: repo?.html_url ?? buildGithubUrl(definition.githubRepo),
    demo: definition.demo ?? repo?.homepage ?? null,
    githubDescription: repo?.description ?? null,
    githubUpdatedAt: repo?.pushed_at ?? null,
    syncedFromGitHub: Boolean(repo),
  };
}

function definitionFromRepo(repo: GitHubRepo): Project {
  return {
    id: repoId(repo.name),
    githubRepo: repo.name,
    status: 'in-development',
    technologies: [],
    featured: false,
    image: siteConfig.githubSync.defaultImage,
    github: repo.html_url,
    demo: repo.homepage || null,
    githubDescription: repo.description,
    githubUpdatedAt: repo.pushed_at,
    syncedFromGitHub: true,
    autoDiscovered: true,
  };
}

export async function getProjects(): Promise<Project[]> {
  const repos = await fetchUserRepos(siteConfig.githubUsername);
  const repoMap = new Map(repos.map((repo) => [repo.name.toLowerCase(), repo]));

  const configured = siteConfig.projects.map((definition) =>
    mergeDefinition(definition, repoMap.get(definition.githubRepo.toLowerCase())),
  );

  const configuredRepoNames = new Set(
    siteConfig.projects.map((project) => project.githubRepo.toLowerCase()),
  );

  const discovered = repos
    .filter(isEchoProduct)
    .filter((repo) => !configuredRepoNames.has(repo.name.toLowerCase()))
    .map(definitionFromRepo);

  const merged = [...configured, ...discovered];

  return merged.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;

    const dateA = a.githubUpdatedAt ? Date.parse(a.githubUpdatedAt) : 0;
    const dateB = b.githubUpdatedAt ? Date.parse(b.githubUpdatedAt) : 0;
    return dateB - dateA;
  });
}

export async function getGitHubStats() {
  const [repos, publicRepoCount] = await Promise.all([
    fetchUserRepos(siteConfig.githubUsername),
    fetchPublicRepoCount(siteConfig.githubUsername),
  ]);

  const echoProducts = repos.filter(isEchoProduct).length;

  return {
    publicRepoCount,
    echoProducts,
    username: siteConfig.githubUsername,
  };
}

export { formatRepoName };
