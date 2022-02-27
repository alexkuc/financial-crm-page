import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <>
      <header></header>
      <Navigation />
      <Outlet />
      <footer></footer>
    </>
  );
};

export default Layout;
