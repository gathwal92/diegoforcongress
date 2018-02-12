import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './values.scss';

export default class Values extends React.Component {
    render() {
        return (
            <section className="values-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-heading">
                                <h2>VALUES</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="section-content">
                            <div className="col-lg-12 text-center">
                                Humanitarian • Pro Hoosier • Pro Family • Pro Business  • Pro Job Growth • Pro Free Market
            Pro Tax Reform • Pro Second Amendment • Pro Life
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
