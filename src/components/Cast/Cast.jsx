// import { useFetchMovieCast } from "components/helpers/useFetchMovieCast";


// const Cast = () => {
//   const defaultImg =
//     'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image';

//   const movieCast = useFetchMovieCast();
//   if (!movieCast.credits || movieCast.credits.length === 0) {
//     return (
//       <p style={{ textAlign: 'center' }}>There isn't any information about the movie cast</p>
//     );
//   }
//   return (
//     <>
//       <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>
//         Movie cast
//       </h3>
//       <ul style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
//         {movieCast.credits.map(
//           ({ movie_id, profile_path, original_name, character }) => (
//             <li key={movie_id}>
//               <img
//                 style={{ borderRadius: '4px', border: 'red , 2px' }}
//                 src={
//                   profile_path
//                     ? `https://image.tmdb.org/t/p/w500/${profile_path}`
//                     : defaultImg
//                 }
//                 alt={original_name}
//                 width={250}
//               />
//               <h3>{original_name}</h3>
//               <p>Character: {character}</p>
//             </li>
//           )
//         )}
//       </ul>
//     </>
//   );
// };

// export default Cast;

import React from 'react';


import { useFetchMovieCast } from 'components/helpers/useFetchMovieCast';
import { CastCharacter, CastContainer, CastHeading, CastImage, CastItem, CastList, CastName } from './Cast.styled';

const Cast = () => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image';

  const movieCast = useFetchMovieCast();
  if (!movieCast.credits || movieCast.credits.length === 0) {
    return (
      <p style={{ textAlign: 'center' }}>There isn't any information about the movie cast</p>
    );
  }

  return (
    <CastContainer>
      <CastHeading>Movie cast</CastHeading>
      <CastList>
        {movieCast.credits.map(({ movie_id, profile_path, original_name, character }) => (
          <CastItem key={movie_id}>
            <CastImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              alt={original_name}
              width={250}
            />
            <CastName>{original_name}</CastName>
            <CastCharacter>Character: {character}</CastCharacter>
          </CastItem>
        ))}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
