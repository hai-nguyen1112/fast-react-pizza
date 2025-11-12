import { Outlet } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <h1>Content</h1>
        {/* The Outlet component represents the child component that is wrapped inside AppLayout */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
