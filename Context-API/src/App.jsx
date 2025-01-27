import { UserContextProvider } from './context/userContextProvider';
import './App.css';
import Login from './component/Login';
import Profile from './component/Profile';

function App() {
  return (
    <UserContextProvider>
      <h1>Hello, this is Ashu learning Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
