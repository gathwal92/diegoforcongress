import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './main.scss';

import Nav from '../../components/nav/nav';
import Home from '../../components/home/home';
import Tagline from '../../components/tagline/tagline';
import Inspiration from '../../components/inspiration/inspiration';
import Media from '../../components/media/media';
import Bio from '../../components/bio/bio';
import Values from '../../components/values/values';
import Contact from '../../components/contact/contact';
import Contribute from '../../components/contribute/contribute';
import Footer from '../../components/footer/footer';
import Watermark from '../../components/watermark/watermark';

export default class Main extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="root-inner">
                <Nav isHomePage={true} />
                <Home />
                <Tagline />
                <Inspiration />
                <Media />
                <Bio />
                <Values />
                <Contact />
                <Contribute />
                <Footer />
                <Watermark />
            </div>
        );
    }
}
