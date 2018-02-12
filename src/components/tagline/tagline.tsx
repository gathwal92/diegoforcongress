import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './tagline.scss';

export default class Tagline extends React.Component {
    render() {
        return (
            <section className="tagline-section bg-primary text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <div>
                                <i className="fa fa-4x fa-eye  sr-icons"></i>
                                <h3>Vision</h3>
                                <p className="text-muted">Economic Development<br/> Job Creation<br/> Entrepreneurship</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div>
                                <i className="fa fa-4x fa-signal sr-icons"></i>
                                <h3>Innovate</h3>
                                <p className="text-muted">Public-Private Partnerships<br/> Break Bureaucratic Barriers<br/> Build Businesses</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div>
                                <i className="fa fa-4x fa-level-up sr-icons"></i>
                                <h3>Inspire</h3>
                                <p className="text-muted">International Relations<br/> Multicultural Diversity<br/> Hoosier Hospitality</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
