import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="mt-20 text-center">
      <h1 className="mb-10 text-xl font-semibold text-yellow-500">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue to ordering,{username}
        </Button>
      )}
    </div>
  );
}

export default Home;
