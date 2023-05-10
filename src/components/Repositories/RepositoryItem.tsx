import React from 'react';
import { Repository } from '../../types/repository';
import { HeartIcon, LinkIcon } from '@heroicons/react/20/solid';
import { ShareIcon, StarIcon } from '@heroicons/react/24/outline';

interface RepositoryItemProps {
  repo: Repository;
  isFavorite: boolean;
  onToggleFavorite: (repo: Repository) => void;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({
  repo,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <li className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'>
      <div className='flex justify-center items-center space-x-8 py-2 text-gray-500'>
        <div className='flex items-center space-x-1 text-sm'><StarIcon className='w-3.5 h-3.5 text-yellow-500' /><div>{repo.watchers}</div></div>
        <div className='flex items-center space-x-1 text-sm'><ShareIcon className='w-3.5 h-3.5 text-sky-500' /><div>{repo.forks}</div></div>
      </div>
      <div className='flex w-full items-center justify-between space-x-6 p-6'>
        <div className='flex-1 truncate'>
          <div className='flex items-center space-x-3'>
            <h3 className='truncate text-sm font-medium text-gray-900'>
              {repo.name}
            </h3>
            <span className='inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
              {repo.private ? 'Private' : 'Public'}
            </span>
          </div>
          <p className='mt-1 truncate text-sm text-gray-500'>
            by {repo.owner.login}
          </p>
        </div>
        <img
          className='h-10 w-10 flex-shrink-0 rounded-full bg-gray-300'
          src={repo.owner.avatar_url}
          alt='Repository owner avatar'
        />
      </div>
      <div>
        <div className='-mt-px flex divide-x divide-gray-200'>
          <div className='flex w-0 flex-1'>
            <a
              target='_blank'
              href={repo.html_url}
              className='relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 group'
            >
              <LinkIcon
                className='h-5 w-5 text-gray-400 group-hover:text-gray-900 group-hover:font-medium transition-all'
                aria-hidden='true'
              />
              Visit
            </a>
          </div>
          <div className='-ml-px flex w-0 flex-1'>
            <div
              onClick={() => onToggleFavorite(repo)}
              className='relative cursor-pointer inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 group'
            >
              <HeartIcon
                className={`h-5 w-5 transition-all ${
                  isFavorite ? 'text-red-500' : 'text-gray-400'
                } group-hover:text-red-500`}
                aria-hidden='true'
              />
              {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RepositoryItem;
