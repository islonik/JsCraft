import './App.css';
import { Fragment } from 'react';
import { BrowserRouter} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <Fragment className="App">
      <BrowserRouter>
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
