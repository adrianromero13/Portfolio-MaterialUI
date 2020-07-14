import React, { Component } from 'react';
import { render } from '@testing-library/react';

import ContactForm from './../../components/ContactForm';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }
    render() {
        return (
            <ContactForm/>
        )
    }
}


export default Contact;
