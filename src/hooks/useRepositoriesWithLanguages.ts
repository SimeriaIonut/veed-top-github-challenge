import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Repository, RepositoryWithLanguages } from '../types/repository';
import {
  getRepositoryLanguages,
  getTopRepositories,
} from '../api/repositories';

const useRepositoriesWithLanguages = (daysAgo = 0) => {
  const [isLoading, setIsLoading] = useState(false);
  const [reposWithLanguages, setReposWithLanguages] = useState<
    RepositoryWithLanguages[]
  >([]);
  const [aggregatedLanguages, setAggregatedLanguages] = useState<string[]>([]);
  const {
    isError,
    error,
    data: repositories,
  } = useQuery<Repository[], Error>(['repositories', daysAgo], () =>
    getTopRepositories(daysAgo)
  );

  useEffect(() => {
    const fetchLanguagesAndUnifyRepos = async (repos: Repository[]) => {
      const unifiedRepos: RepositoryWithLanguages[] = [];
      const allLanguages: string[] = [];

      for (const repo of repos) {
        const languages = await getRepositoryLanguages(repo.languages_url);

        unifiedRepos.push({ ...repo, languages });
        allLanguages.push(...languages);
      }

      setReposWithLanguages(unifiedRepos);
      setAggregatedLanguages([...new Set(allLanguages)]);
      setIsLoading(false);
    };

    if (repositories) {
      setIsLoading(true);
      fetchLanguagesAndUnifyRepos(repositories);
    }
  }, [repositories]);

  return {
    isLoading,
    isError,
    error,
    reposWithLanguages,
    aggregatedLanguages,
  };
};

export default useRepositoriesWithLanguages;
