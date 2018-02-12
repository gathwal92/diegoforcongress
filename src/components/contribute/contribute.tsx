import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './contribute.scss';

export default class Contribute extends React.Component {
    render() {
        return (
            <section className="contribute-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-heading">
                                <h2>CONTRIBUTE TO DIEGO MORALES</h2>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-content">
                                <p>
                                    We welcome your financial support as Diego continues exploring his opportunities to serve Hoosiers.<br/>
                                    To donate by check, please make the check out to "Diego for Congress" and mail the check to:<br/>
                                    <span style={{ fontWeight:700 }}>
                                    P.O. Box 132<br/>
                                    Whitestown, IN 46075</span><br/>
                                    Please include your name, address, phone number and occupation.
                                </p>
                                <p>
                                    <Link className="btn btn-primary" to='/donate' role="button">Donate</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
