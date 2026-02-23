export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Language = 'js' | 'ts' | 'python' | 'rust' | 'go' | 'java' | 'cpp' | 'all';

export interface IssueTag {
  label: string;
  type: 'difficulty' | 'lang' | 'topic';
}

export interface Issue {
  id: number;
  featured?: boolean;
  repo: string;
  repoStars: string;
  repoStarsNum: number;
  av: string;
  avColor: 'green' | 'blue' | 'amber' | 'red' | 'dark';
  title: string;
  desc: string;
  tags: IssueTag[];
  difficulty: Difficulty;
  difficultyPct: number;
  lang: Language;
  comments: number;
  age: string;
  assignees: number;
  estTime: string;
  githubUrl: string;
  createdAt: Date;
}

export interface FilterState {
  difficulty: Difficulty | 'all';
  lang: Language;
  topic: string;
  repoHealth: string;
  search: string;
  sort: 'newest' | 'stars' | 'easiest' | 'comments';
}

export interface PullRequest {
  repo: string;
  stars: string;
  av: string;
  avColor: string;
  title: string;
  desc: string;
  tags: Array<{ label: string; type: string }>;
  status: 'merged' | 'open';
  additions: string;
  deletions: string;
  files: number;
  reviews: number;
  date: string;
  impact: string;
  githubUrl?: string;
}

export interface PortfolioProfile {
  name: string;
  handle: string;
  title: string;
  bio: string;
  location: string;
  website?: string;
  email?: string;
  contributingSince: string;
  avatarInitials: string;
  isPro: boolean;
  stats: {
    mergedPRs: number;
    repositories: number;
    combinedStars: string;
    linesContributed: string;
    impactScore: number;
    streakMonths: number;
  };
  skills: Array<{ name: string; pct: number; color: string; dot: string }>;
  pullRequests: PullRequest[];
  timeline: Array<{
    date: string;
    title: string;
    repo: string;
    desc: string;
  }>;
  repos: Array<{
    av: string;
    avColor: string;
    name: string;
    meta: string;
    prs: string;
  }>;
  tags: Array<{ label: string; size: 1 | 2 | 3 | 4 }>;
}
