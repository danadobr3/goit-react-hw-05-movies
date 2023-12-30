import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesListContainer = styled.ul`
  list-style: none;
`;

export const MovieListItem = styled.li`
  &:hover,
  &:focus {
    h4 {
      color: #6c2ffc;
      transition: color 0.3s ease-in-out;
    }
  }
`;

export const MovieTitleLink = styled(Link)`
  text-decoration: none;
`;

export const MovieTitle = styled.h4`
  color: black;
  margin: 10px;
`;
