import { useState } from 'react';
import { RepositoryWithLanguages } from '../types/repository';

const useLanguageFilter = () => {
  const [languageFilter, setLanguageFilter] = useState('');

  const filterByLanguage = (repository: RepositoryWithLanguages) => {
    if (!languageFilter || languageFilter === 'All') return true;
    return repository.languages.includes(languageFilter);
  };

  return { languageFilter, setLanguageFilter, filterByLanguage };
};

export default useLanguageFilter;
