// import { useFetchMovieReviews } from "components/helpers/useFetchMovieReviews";


// const Reviews = () => {
//   const movieReviews = useFetchMovieReviews();
//   if (movieReviews.reviews.length === 0 || !movieReviews.reviews) {
//     return (
//       <p style={{ textAlign: 'center' }}>There aren't any reviews for this movie</p>
//     );
//   }

//   return (
//     <>
//       <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>
//         Rewievs
//       </h3>
//       <ul>
//         {movieReviews.reviews.map(({ movieId, author, content }) => (
//           <li key={movieId}>
//             <h3 style={{ textAlign: 'center' }}>{author}</h3>
//             <p style={{ textAlign: 'left' }}>{content}</p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };


// export default Reviews;

import React from 'react';


import { useFetchMovieReviews } from 'components/helpers/useFetchMovieReviews';
import { AuthorHeading, ContentParagraph, ReviewsContainer, ReviewsHeading, ReviewsItem, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const movieReviews = useFetchMovieReviews();
  if (movieReviews.reviews.length === 0 || !movieReviews.reviews) {
    return (
      <p style={{ textAlign: 'center' }}>There aren't any reviews for this movie</p>
    );
  }

  return (
    <ReviewsContainer>
      <ReviewsHeading>Rewievs</ReviewsHeading>
      <ReviewsList>
        {movieReviews.reviews.map(({ movieId, author, content }) => (
          <ReviewsItem key={movieId}>
            <AuthorHeading>{author}</AuthorHeading>
            <ContentParagraph>{content}</ContentParagraph>
          </ReviewsItem>
        ))}
      </ReviewsList>
    </ReviewsContainer>
  );
};

export default Reviews;
