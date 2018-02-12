import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './inspiration.scss';

const armyImage = require('../../../public/images/DiegoArmyPhoto.jpeg');

export default class Inspiration extends React.Component {
    render() {
        return (
            <div>
                <span className="section-anchor" id="inspiration"></span>
                <section className="inspiration-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="section-heading">
                                    <h2>MY INSPIRATION</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <img className="inspiration-img" src={armyImage} alt="Diego | U.S. Army" />
                            </div>
                            <div className="col-md-6">
                                <div className="section-content">
                                    <p className="inspiration-subheader">
                                        I’m proud to be a 21st century Hoosier-American.
                                    </p>
                                    <p>
                                        I am fortunate to call Indiana "my home" and to know all Hoosiers as "my neighbors." For me, living the American Dream in the Great Hoosier State is a privilege that I never take for granted and it brings with it a duty to serve.  From my service in the U.S. Army to my vast and varied experience in the private and public sectors, I've gained insight into who we are as Americans - and what we need to do to create opportunities within our state and our local communities.
                                    </p>
                                    <p>
                                        My vision is to help Indiana's citizens and businesses be successful. My values reflect those of Hoosiers across the state. My commitment to innovation and my business experience will help us find new, more-efficient ways to govern and to help everyone discover his or her own American Dream. I look to you to guide me as I explore how best to serve you and our great state.
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
