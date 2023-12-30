import styled from 'styled-components';

export const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLinksList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const StyledLinkItem = styled.li`
  &:hover,
  &:focus {
    h4 {
      color: #6c2ffc;
      transition: color 0.3s ease-in-out;
    }
  }
`;

export const StyledLinkText = styled.h4`
  color: black;
`;

