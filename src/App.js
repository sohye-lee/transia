// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//Components
// import Header from './components/Header/Header';
// import Home from './components/Home/Home';
import Main from './components/Main/Main';

//styles
import { GlobalStyle } from './GlobalStyle';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Main />
          <GlobalStyle />
      </div>
    </BrowserRouter>
  )
}

export default App;
