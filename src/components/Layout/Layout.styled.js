import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
  flex-direction: row;
  margin-left: 25px;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

export const StyledH3 = styled.h3`
  color: #7969C3;

   &:hover {
    color: #6c2ffc;
    transition: color 0.3s ease-in-out; 
  }
`;

export const StyledFallback = styled.div`
  // k
`;

export const SharedLayoutContainer = styled.div`
  // k
`;
