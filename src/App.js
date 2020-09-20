import React from 'react';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Login from './Login/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />
            <Body />
          </>
        )}
    </div>
  );
}

export default App;
