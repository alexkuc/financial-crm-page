import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="layout">
      <header></header>
      <Navigation />
      <Outlet />
      <footer></footer>
    </div>
  );
};

export default Layout;
