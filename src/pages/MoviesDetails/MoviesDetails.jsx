import { Suspense, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useFetchMovieDetails } from "components/helpers/useFetchMoviesDetails";
import { BackBtn } from "components/BackBtn/BackBtn";
import Loader from "components/Loader/Loader";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { StyledLinkItem, StyledLinkText, StyledLinksList, StyledMovieDetails } from "./MoviesDetails.styled";


const MoviesDetails = () => {
  const { movie, error, loading } = useFetchMovieDetails();
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  return (
    <StyledMovieDetails>
      {loading && <Loader />}
      {error && <h3>Try to reload the page</h3>}
      <BackBtn path={goBack.current} />
      {movie && <MovieInfo movie={movie} />}
      <StyledLinksList>
        <StyledLinkItem>
          <Link to="cast">
            <StyledLinkText>Cast</StyledLinkText>
          </Link>
        </StyledLinkItem>
        <StyledLinkItem>
          <Link to="reviews">
            <StyledLinkText>Reviews</StyledLinkText>
          </Link>
        </StyledLinkItem>
      </StyledLinksList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledMovieDetails>
  );
};

export default MoviesDetails;

