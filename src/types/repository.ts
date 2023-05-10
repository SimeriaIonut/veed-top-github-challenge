interface RepositoryOwner {
  id: number;
  avatar_url: string;
  url: string;
  login: string;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: RepositoryOwner;
  description: string;
  html_url: string;
  forks: number;
  watchers: number;
  languages_url: string;
}

export type RepositoryWithLanguages = {
  languages: string[];
} & Repository;
