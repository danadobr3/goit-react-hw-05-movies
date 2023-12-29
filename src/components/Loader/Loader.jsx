import { TailSpin } from 'react-loader-spinner';

const Loader = ({ children }) => {
  return (
    <TailSpin type="TailSpin" color="#02be6e" height={100} width={100} />
  );
}

  
export default Loader;

// import { MagnifyingGlass } from 'react-loader-spinner';

// export const Loader = ({ children }) => {
//   return (
//     <MagnifyingGlass
//       visible={true}
//       height="80"
//       width="80"
//       ariaLabel="magnifying-glass-loading"
//       wrapperStyle={{}}
//       wrapperClass="magnifying-glass-wrapper"
//       glassColor="#c0efff"
//       color="#e15b64"
//     />
//   );
// };