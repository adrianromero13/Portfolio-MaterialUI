import React, { Component } from 'react';
import { render } from '@testing-library/react';

import PortfolioPage from './../../components/PortfolioPage';

class Portfolio extends Component {
    state = {
        repository: '',
        link: ''
    }
    render() {
        return (
            <PortfolioPage/>
        )
    }
}


export default Portfolio;
