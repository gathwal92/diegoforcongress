import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home-section-container">
                <span className="home-section-anchor" id="home"></span>
                <div className="home-section">
                    <div className="home-content">
                        <div className="home-content-footer">
                            <a className="btn btn-primary typeform-share" href="https://90degree.typeform.com/to/D9lQev" data-mode="popup">
                                Join the Team 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
