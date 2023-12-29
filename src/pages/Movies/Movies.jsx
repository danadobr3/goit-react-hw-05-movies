import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";
import SearchForm from "components/SearchForm/SearchForm";
import useFetchByQuery from "components/helpers/useFetchByQuery";


const Movies = () => {
  const { movies, error, isLoading, handleSubmit } = useFetchByQuery();
  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <h3>Try to reload the page</h3>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};


export default Movies;