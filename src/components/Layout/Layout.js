// import { Suspense } from 'react';
// import { Link, Outlet } from 'react-router-dom';


// export const SharedLayout = () => {
//   return (
//     <>
//       <nav
//         style={{
//           display: 'flex',
//           gap: '15px',
//           flexDirection: 'row',
//           marginLeft: '25px',
//         }}
//       >
//         <Link to='/'>
//           <h3 style={{ color: '#fff' }}> Home </h3>
//         </Link>

//         <Link to='/movies'>
//           <h3 style={{ color: '#fff' }}> Movies </h3>
//         </Link>
//       </nav>

//       <Suspense fallback={<div> Loading page... </div>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };

import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SharedLayoutContainer, StyledFallback, StyledH3, StyledLink, StyledNav } from './Layout.styled';

export const SharedLayout = () => {
  return (
    <SharedLayoutContainer>
      <StyledNav>
        <StyledLink to='/'>
          <StyledH3>Home</StyledH3>
        </StyledLink>

        <StyledLink to='/movies'>
          <StyledH3>Movies</StyledH3>
        </StyledLink>
      </StyledNav>

      <Suspense fallback={<StyledFallback>Loading page...</StyledFallback>}>
        <Outlet />
      </Suspense>
    </SharedLayoutContainer>
  );
};

  // const Layout = () => {
  //     return (
  //         <>
  //         <header>
  //             <ul>
  //                 <li><NavLink to='/'>Home</NavLink></li>
  //                 <li><NavLink to='/movies'>Movies</NavLink></li>
  //             </ul>
  //         </header>
  //         <main>
  //             <Outlet />
  //         </main>
  //             </>
        
  //    );
  // }