import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './footer.scss';

const logo = require('../../../public/images/logo.png');

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row vertical-align">
                        <div className="col-md-4 text-center">
                            <img className="footer-logo" src={logo} alt="Diego Morales for Congress" />
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="footer-mid-section">
                                <p>
                                    <a href="mailto:diego@diegoforindiana.com">diego@diegoforindiana.com </a>
                                </p>
                                <p>
                                    <div className="copyright">
                                        © 2017. Paid for by Diego for Congress.
                                    </div>
                                </p>
                                <p>
                                    Images and use of U.S. Armed Forces pictures and descriptions do not imply endorsement by the U.S. Army or Department of Defense. 
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center footer-social-icons">
                            <a href="https://www.facebook.com/Diego-Morales-1572720369644618/" target="_blank"><i className="fa fa-2x fa-facebook"></i></a>
                            <a href="https://twitter.com/cdiegomorales?lang=en" target="_blank"><i className="fa fa-2x fa-twitter"></i></a>
                            <a href="https://www.instagram.com/cdiegomorales/" target="_blank"><i className="fa fa-2x fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/diego-morales-8723426/" target="_blank"><i className="fa fa-2x fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
