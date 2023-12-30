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
