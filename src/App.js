
import React,{ useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';

export const UserContext = React.createContext();

function App() {
  const [isDark,SetIsDark] = useState(false);
  return (
    <UserContext.Provider
    value={{
     isDark,SetIsDark
    }}>
    <Home />
    </UserContext.Provider>
  );
}

export default App;
