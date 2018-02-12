import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './donate.scss';

import Nav from '../../components/nav/nav';
import DonateForm from '../../components/donateForm/donateForm';
import Footer from '../../components/footer/footer';
import Watermark from '../../components/watermark/watermark';

export default class Donate extends React.Component {
    render() {
        return (
            <div className="root-inner-donate">

                <Nav isHomePage={false} />

                <section className="donate-section">
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
                            <DonateForm />
                        </div>
                    </div>
                </section>

                <Footer />
                <Watermark />
                
            </div>
        )
    }
}
