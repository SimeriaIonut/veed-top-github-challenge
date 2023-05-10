import LanguageFilter from '../Filters/LanguageFilter';
import RepositoriesList from './RepositoriesList';
import useRepositoriesWithLanguages from '../../hooks/useRepositoriesWithLanguages';
import useFavorites from '../../hooks/useFavorites';
import useLanguageFilter from '../../hooks/useLanguageFilter';
import TimeFilter from '../Filters/TimeFilter';
import { useState } from 'react';
import { DEFAULT_DAYS_AGO } from '../../api/repositories';

const Repositories = () => {
  const { languageFilter, setLanguageFilter, filterByLanguage } =
    useLanguageFilter();
  const [daysAgo, setDaysAgo] = useState(DEFAULT_DAYS_AGO);
  const { favorites, toggleFavorite } = useFavorites();
  const { isLoading, isError, error, reposWithLanguages, aggregatedLanguages } =
    useRepositoriesWithLanguages(daysAgo);

  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-100 rounded-md shadow mb-4 pb-6 pt-4 space-y-4'>
        <TimeFilter
          selectedTime={daysAgo}
          onSelectTime={(days) => setDaysAgo(days || 0)}
        />
        <LanguageFilter
          languages={aggregatedLanguages}
          selectedLanguage={languageFilter}
          onSelectLanguage={setLanguageFilter}
        />
      </div>

      <RepositoriesList
        repos={reposWithLanguages.filter(filterByLanguage)}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Repositories;
