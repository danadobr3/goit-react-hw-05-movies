// const MovieInfo = ({
//   movie: { title, poster_path, release_date, overview, genres, vote_average },
// }) => {
//   const defaultImg =
//     'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image';

//   const genreList = genres
//     ? genres.map(elem => elem.name).join(',')
//     : 'There is no information yet';



//   return (
//     <>
//       <div style={{ display: 'flex', gap: '15px', margin: '15px' }}>
//         <img
//           style={{ borderRadius: '4px' }}
//           src={
//             poster_path
//               ? `https://image.tmdb.org/t/p/w500/${poster_path}`
//               : defaultImg
//           }
//           alt={title}
//           width={250}
//         />
//         <div>
//           {title ? (
//             <>
//               <h3>{title}</h3> <h4>{release_date}</h4>
//             </>
//           ) : (
//             <>
//               <h3>Title:</h3> <p> No info </p>
//             </>
//           )}
//           <h3>User Score: </h3>
//           {vote_average ? <p>{vote_average}</p> : <p> No info</p>}
//           <h3>Overview:</h3>
//           {overview ? <p>{overview}</p> : <p> No info</p>}
//           <h3>Genres:</h3>
//           <p>{genreList}</p>
//         </div>
//       </div>
//       <h4 style={{ textAlign: 'center', textDecoration: 'underline' }}>
//         Additional information
//       </h4>
//     </>
//   );
// };



// export default MovieInfo;

import React from 'react';
import { AdditionalInfoHeading, GenresHeading, GenresList, MovieDetails, MovieImage, MovieInfoContainer, MovieTitle, OverviewHeading, OverviewText, ReleaseDate, UserScore } from './MovieInfo.styled';


const MovieInfo = ({
  movie: { title, poster_path, release_date, overview, genres, vote_average },
}) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image';

  const genreList = genres
    ? genres.map(elem => elem.name).join(',')
    : 'There is no information yet';

  return (
    <>
      <MovieInfoContainer>
        <MovieImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
          width={250}
        />
        <MovieDetails>
          {title ? (
            <>
              <MovieTitle>{title}</MovieTitle>
              <ReleaseDate>{release_date}</ReleaseDate>
            </>
          ) : (
            <>
              <MovieTitle>Title:</MovieTitle>
              <p>No info</p>
            </>
          )}
          <UserScore>User Score: {vote_average || 'No info'}</UserScore>
          <OverviewHeading>Overview:</OverviewHeading>
          <OverviewText>{overview ? overview : 'No info'}</OverviewText>
          <GenresHeading>Genres:</GenresHeading>
          <GenresList>{genreList}</GenresList>
        </MovieDetails>
      </MovieInfoContainer>
      <AdditionalInfoHeading>Additional information</AdditionalInfoHeading>
    </>
  );
};

export default MovieInfo;
