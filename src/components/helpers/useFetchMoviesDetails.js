import { useParams } from 'react-router-dom';
import { getAllMoviesInfo } from 'services/api';

const { useState, useEffect } = require('react');


export const useFetchMovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    setLoading(true);
    const fetchMovie = async () => {
      try {
        const data = await getAllMoviesInfo(movieId);
        setMovie(data);
      } catch (error) {
        setError('Try to reload the page');
      } finally {
        setLoading(false);
      }
    };
      
    fetchMovie();
  }, [movieId]);
    
    
  return { movie, error, loading };
};