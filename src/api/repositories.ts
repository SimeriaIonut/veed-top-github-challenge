import { Repository } from '../types/repository';
import apiClient from './apiClient';

// Extract this into a constant to quickly change it if needed
export const DEFAULT_DAYS_AGO = 7;

export const getTopRepositories = async (daysAgo: number) => {
  const pastDate = new Date(
    new Date().setDate(new Date().getDate() - (daysAgo || DEFAULT_DAYS_AGO))
  );
  const pastDateFormatted = pastDate.toISOString().substring(0, 10);

  const repositoriesResponse = await apiClient.get(
    `/repositories?q=created:%3E${pastDateFormatted}&sort=stars&order=desc&per_page=10`
  );

  return repositoriesResponse.data.items as Repository[];
};

export const getRepositoryLanguages = async (languagesUrl: string) => {
  const response = await apiClient.get(languagesUrl);
  return Object.keys(response.data);
};
