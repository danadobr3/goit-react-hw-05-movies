import { Link } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';
import { StyledButton } from "./BackBtn.styled";


export const BackBtn = ({ path }) => {
  return (
    <Link to={path}>
        <StyledButton type="button">
          <BsArrowLeft style={{ marginRight: '5px' }} />
              Return
        </StyledButton>  
    </Link>
  );
};
