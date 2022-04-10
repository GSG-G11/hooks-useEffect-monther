import { Suspense } from 'react';
import Avatar from './components/Avatar';
import Counter from './components/Counter';
import Giphes from './components/Giphes';
import MouseMove from './components/MouseMove';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <>
      <Counter />
      <MouseMove />
      <Giphes />
      <Avatar />
      <UserProfile />
    </>
  );
};

export default App;
