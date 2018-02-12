import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './watermark.scss';

const ninetyDegreeLogo = require('../../../public/images/90degree-logo.png');

export default class Watermark extends React.Component {
    render() {
        return (
            <section className="watermark-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <a href="http://www.90degree.io" target="_blank">
                                <img src={ninetyDegreeLogo} alt="90degree" /> Powered by 90degree.io →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
