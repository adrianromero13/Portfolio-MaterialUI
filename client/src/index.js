import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Footer from './components/Footer';


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Router>
    <App key="1" />, 
    <Footer key="2" />
    </Router>
    ,
    document.getElementById("root"));
