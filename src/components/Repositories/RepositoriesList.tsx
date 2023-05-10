import React from 'react';
import RepositoryItem from './RepositoryItem';
import { Repository } from '../../types/repository';
import { motion } from 'framer-motion';

interface RepositoriesListProps {
  repos: Repository[];
  favorites: Repository[];
  onToggleFavorite: (repo: Repository) => void;
  isLoading: boolean;
}

const initial = { translateY: 20, opacity: 0 };
const whileInView = { translateY: 0, opacity: 1 };
const getTransition = (index: number) => ({
  duration: (index + 1) * 0.1,
});

const RepositoriesList: React.FC<RepositoriesListProps> = ({
  repos,
  favorites,
  onToggleFavorite,
  isLoading,
}) => {
  return (
    <div className='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 bg-gray-100 rounded-md shadow py-8 mb-12'>
      {isLoading ? (
        <div className='flex w-full justify-center text-sm min-h-[10rem] items-center text-gray-400'>
          Loading...
        </div>
      ) : (
        <ul
          role='list'
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={initial}
              whileInView={whileInView}
              transition={getTransition(index)}
              viewport={{ once: true }}
            >
              <RepositoryItem
                repo={repo}
                isFavorite={favorites.some(
                  (favorite) => favorite.id === repo.id
                )}
                onToggleFavorite={onToggleFavorite}
              />
            </motion.div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepositoriesList;
