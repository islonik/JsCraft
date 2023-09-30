import './assets/css/App.css';
import { Fragment } from 'react';
import { BrowserRouter} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <Fragment className="App">
      <Header/>
      <Nav/>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
      <Footer/>
    </Fragment>
  );
}

export default App;
