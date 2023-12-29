// import { Link, useLocation } from "react-router-dom";


// const MoviesList = ({ movies }) => {
//   const location = useLocation();


//   return (
//     <ul>
//       {movies.map(
//         ({ id, title }) =>
//           title && (
//             <li key={id}>
//               <Link to={`/movies/${id}`} state={{ from: location }}>
//                 <h4 style={{ color: 'black' }}>{title}</h4>
//               </Link>
//             </li>
//           )
//       )}
//     </ul>
//   );
// };


// export default MoviesList;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { MovieListItem, MovieTitle, MovieTitleLink, MoviesListContainer } from './MoviesList.styled';


const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesListContainer>
      {movies.map(
        ({ id, title }) =>
          title && (
            <MovieListItem key={id}>
              <MovieTitleLink to={`/movies/${id}`} state={{ from: location }}>
                <MovieTitle>{title}</MovieTitle>
              </MovieTitleLink>
            </MovieListItem>
          )
      )}
    </MoviesListContainer>
  );
};

export default MoviesList;
