import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './contact.scss';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <span className="section-anchor" id="contact"></span>
                <section className="contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-heading">
                                    <h2>GET IN TOUCH</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            </div>
                            <div className="col-md-6">
                                <div className="section-content">
                                    <p>
                                        I want to serve Indiana in the best way possible. That can only happen if I have an open dialogue with Hoosiers across the state.
                                    </p>
                                    <p>
                                        Please feel free to contact me at anytime with your questions or comments on any topic that concerns you. If I'm not available, I will always strive to get back to you just as soon as I can.
                                    </p>
                                    <p>
                                        I can be reached via email at diego@diegoforindiana.com
                                    </p>
                                    <p>
                                        <a className="btn btn-primary" href="mailto:diego@diegoforindiana.com" role="button">Send Email</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
