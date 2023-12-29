// import { Suspense, useRef } from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";
// import { useFetchMovieDetails } from "components/helpers/useFetchMoviesDetails";
// import { BackBtn } from "components/BackBtn/BackBtn";
// import Loader from "components/Loader/Loader";
// import MovieInfo from "components/MovieInfo/MovieInfo";



// const MoviesDetailsPage = () => {
//   const { movie, error, loading } = useFetchMovieDetails();
//   const location = useLocation();
//   const goBack = useRef(location.state?.from ?? '/');

//   return (
//     <>
//       {loading && <Loader />}
//       {error && <h3>Try to reload the page</h3>}
//       <BackBtn path={goBack.current} />
//       {movie && <MovieInfo movie={movie} />}
//       <ul
//         style={{
//           display: 'flex',
//           gap: '10px',
//           flexWrap: 'wrap',
//           alignItems: 'center',
//           justifyContent: 'space-around',
//         }}
//       >
//         <li>
//           <Link to="cast">
//             <h4 style={{ color: 'black' }}>Cast</h4>{' '}
//           </Link>
//         </li>
//         <li>
//           <Link to="reviews">
//             <h4 style={{ color: 'black' }}>Reviews</h4>{' '}
//           </Link>
//         </li>
//       </ul>
//       <Suspense fallback={<Loader />}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };


// export default MoviesDetailsPage;

// MoviesDetailsPage.js
import { Suspense, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useFetchMovieDetails } from "components/helpers/useFetchMoviesDetails";
import { BackBtn } from "components/BackBtn/BackBtn";
import Loader from "components/Loader/Loader";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { StyledLinkItem, StyledLinkText, StyledLinksList, StyledMovieDetailsPage } from "./MoviesDetailsPage.styled";



const MoviesDetailsPage = () => {
  const { movie, error, loading } = useFetchMovieDetails();
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  return (
    <StyledMovieDetailsPage>
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
    </StyledMovieDetailsPage>
  );
};

export default MoviesDetailsPage;

