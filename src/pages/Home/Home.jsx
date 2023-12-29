import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";
import { useFetchAllMovies } from "components/helpers/useFetchAllMovies";


const Home = () => {
  const { movies, error, loading } = useFetchAllMovies();

  return (
    <div>
      {loading && <Loader />}
      {error && <h3>Try to reload the page</h3>}
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </div>
  );
};


export default Home;