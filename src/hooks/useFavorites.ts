import { useEffect, useState } from 'react';
import { Repository } from '../types/repository';

const LOCAL_STORAGE_FAVORITES_NAME = 'favoriteRepositories';

const useFavorites = () => {
  const [favorites, setFavorites] = useState<Repository[]>([]);

  useEffect(() => {
    const existingFavorites = localStorage.getItem(LOCAL_STORAGE_FAVORITES_NAME);
    if (existingFavorites) {
      setFavorites(JSON.parse(existingFavorites));
    }
  }, []);

  const toggleFavorite = (repository: Repository) => {
    const isFavorite = favorites.find(
      (favorite) => favorite.id === repository.id
    );

    let newFavorites: Repository[] = [];

    if (isFavorite) {
      newFavorites = favorites.filter(
        (favorite) => favorite.id !== repository.id
      );
    } else {
      newFavorites = [...favorites, repository];
    }

    setFavorites(newFavorites);
    localStorage.setItem(LOCAL_STORAGE_FAVORITES_NAME, JSON.stringify(newFavorites));
  };

  return {
    favorites,
    toggleFavorite,
  };
};

export default useFavorites;
