// import logo from './logo.svg';
import React from 'react';


//Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';

//styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <GlobalStyle />
    </div>
  );
}

export default App;
