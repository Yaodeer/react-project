import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <main className="mx-auto w-dvw overflow-auto">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
