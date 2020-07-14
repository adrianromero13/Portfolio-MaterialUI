import React from 'react';

import './../../assets/Styles/styles.css';

const ContactForm = (props) => (
    <div className="ownBackground">
        <div className="container well">
            <br />
            <div className="row border-top border-bottom border-success">
                <div className="col-auto text-success">
                    <h5 className="text-justify-center align-middle">Contact Me</h5>
                </div>
            </div>

            <br />

            <div className="container well justify-content-md-center">
                <div className="row justify-content-md-center text-justify-center text-light">

                    <form className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-xs-12 col-centered justify-content-md-center mx-auto" action="">

                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="First Name" />
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Last Name" />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="name@example.com" />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel"
                                className="form-control"
                                id="exampleFormControlInput4"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}]"
                                placeholder="(123)456-7890"
                                required />
                        </div>

                        <div className="border-top border-bottom border-success bg-success"></div>

                        <div className="form-group">
                            <label>Leave A Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea5" rows="4"></textarea>
                        </div>

                        <select className="custom-select custom-select-sm">
                            <option defaultValue>What is your preference of contact?</option>
                            <option value="1">Text</option>
                            <option value="2">Call</option>
                            <option value="3">Email</option>
                        </select>

                        <br />

                        <div className="formButton">
                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default ContactForm;
