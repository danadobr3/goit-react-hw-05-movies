import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsInfo } from 'services/api';


export const useFetchMovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (!movieId) return;
    const fetchMovieReviews = async () => {
      try {
        const { data } = await getReviewsInfo(movieId);
        setReviews(data.results);
      } catch (error) {
        setError('Try to reload the page');
      } finally {
        setLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return { reviews, error, loading };
};