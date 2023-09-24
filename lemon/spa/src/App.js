import './App.css';
import { Fragment } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <Fragment className="App">
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </Fragment>
  );
}

export default App;
