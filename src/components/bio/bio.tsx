import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './bio.scss';
import './timeline.scss';

export default class Bio extends React.Component {
    render() {
        return (
            <div>
                <span className="section-anchor" id="bio"></span>
                <section className="bio-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-heading">
                                    <h2>BIOGRAPHY</h2>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-content">

                                    <ul className="timeline">

                                        <li>
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <h4>CHIEF BUSINESS DEVELOPMENT OFFICER</h4>
                                                </div>
                                                <div className="tl-body">
                                                    <p>The Sodrel Holding Companies</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="timeline-inverted">
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <h4>ADJUNCT PROFESSOR</h4>
                                                </div>
                                                <div className="tl-body">
                                                    <p>Ivy Tech Community College</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <h4>SENIOR ADVISOR TO MIKE PENCE</h4>
                                                </div>
                                                <div className="tl-body">
                                                    <p>Office of the Indiana Governor</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="timeline-inverted">
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <h4>AMBASSADOR OF PEACE-GUATEMALA</h4>
                                                </div>
                                                <div className="tl-body">
                                                    <p>Presented by Guatemalan Vice President Jafeth Cabrera</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <h4>EXECUTIVE OF BUSINESS DEVELOPMENT, MARKETING & STRATEGY</h4>
                                                </div>
                                                <div className="tl-body">
                                                    <p>The Free Enterprise System, Inc. & Subsidiaries</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="timeline-inverted">
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <h4>U.S. ARMY VETERAN</h4>
                                                </div>
                                                <div className="tl-body">
                                                    <p>United States Armed Forces</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <h4>DIRECTOR OF INTERGOVERNMENTAL AFFAIRS</h4>
                                                </div>
                                                <div className="tl-body">
                                                    <p>Office of the Indiana Secretary of State</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <h4>BA, COMMUNICATION/POLITICAL SCIENCE</h4>
                                                </div>
                                                <div className="tl-body">
                                                    <p>Indiana University</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <h4>MASTER'S OF BUSINESS ADMINISTRATION (MBA)</h4>
                                                </div>
                                                <div className="tl-body">
                                                    <p>Krannert School of Management Purdue University</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <h4>MASTER'S OF INTERNATIONAL BUSINESS ADMINISTRATION, GLOBAL</h4>
                                                </div>
                                                <div className="tl-body">
                                                    <p>Tilburg University, The Netherlands</p>
                                                </div>
                                            </div>
                                        </li>
                                         <li>
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <h4>CONTINUED STUDIES AROUND THE WORLD</h4>
                                                </div>
                                                <div className="tl-body">
                                                    <p>Throughout the United States, Europe, Asia and Latin America</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="tl-circ"></div>
                                            <div className="timeline-panel">
                                                <div className="tl-heading">
                                                    <h4>SAGAMORE OF THE WABASH</h4>
                                                </div>
                                                <div className="tl-body">
                                                    <p>Recipient of the Sagamore of the Wabash Award</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
