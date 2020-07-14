import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from '../About';
import Contact from '../../containers/Contact';
import Navbar from '../NavBar';
// import Footer from '../Footer';
import PortfolioPage from '../PortfolioPage';
import UploadImages from '../../containers/UploadImages';




const App = props => (
  <Router>
    <Navbar />
    <Route exact path="/" component={About} />
    <Route exact path="/Contact" component={Contact} />
    <Route exact path="/Portfolio" component={PortfolioPage} />
    <Route exact path='/uploads' component={UploadImages} />
    {/* <Footer/> */}
  </Router>
);


export default App;