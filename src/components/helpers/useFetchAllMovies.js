import { useEffect, useState } from 'react';
import { getAllMoviesList } from 'services/api';


export const useFetchAllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchAllList = async () => {
      try {
        const { data } = await getAllMoviesList();
        setMovies(data.results);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    fetchAllList();
  }, []);

  return { movies, error, loading };
};