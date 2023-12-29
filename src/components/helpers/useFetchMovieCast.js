import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo } from 'services/api';


export const useFetchMovieCast = () => {
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (!movieId) return;
    const fetchMovieCast = async () => {
      try {
        const data = await getCastInfo(movieId);
        setCredits(data.cast);
      } catch (error) {
        setError('Try to reload the page');
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return { credits, error, loading };
};