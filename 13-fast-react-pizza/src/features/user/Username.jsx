import { useSelector } from 'react-redux';

function Username() {
  const usename = useSelector((state) => state.user.Username);

  return <div className="hidden text-sm font-semibold">{usename}</div>;
}

export default Username;
