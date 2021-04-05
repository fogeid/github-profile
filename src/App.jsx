import Routes from './router';
import GlobalStyle from './GlobalStyle';
import { UserStorage } from './UserContext';

function App() {

  return (
    <>
      <UserStorage>
        <GlobalStyle />
        <Routes />
      </UserStorage>
    </>
  );
}

export default App;
