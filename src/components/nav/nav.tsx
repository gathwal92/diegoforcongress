import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Affix } from 'react-overlays';
import { Navbar, NavItem, Nav as ReactNav } from 'react-bootstrap';
import './nav.scss';

const logo = require('../../../public/images/logo.png');

export default class Nav extends React.Component<any, any> {

    public anchors = [ "#home", "#inspiration", "#media", "#bio", "#contact" ];

    constructor(props: any) {
        super(props);
        this.state = { isHomePage: this.props.isHomePage };

        if (this.props.isHomePage == false) {
            this.anchors = this.anchors.map((a) => {
                return "/" + a;
            });
        }
    }
    
    render() {
        return (
            <Affix offsetTop={50} affixClassName="affix">
                <Navbar collapseOnSelect className={"navbar-fixed-top" + (this.state.isHomePage ? '' : ' affix')}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            { this.state.isHomePage ? 
                                <a className="navbar-brand page-scroll" href={this.anchors[0]}>
                                    <img src={logo} alt="Diego Morales for Congress" />
                                </a>
                            :
                                <Link className="navbar-brand page-scroll" to={this.anchors[0]}>
                                    <img src={logo} alt="Diego Morales for Congress" />
                                </Link> 
                            }
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <ReactNav pullRight>

                            { this.state.isHomePage ?
                                <NavItem className="page-scroll hover" href={this.anchors[0]}>
                                    Home <span className="line css3Animate"></span></NavItem>
                            :
                                <li className="page-scroll hover"><Link to={this.anchors[0]}>
                                    Home <span className="line css3Animate"></span></Link></li>
                            }

                            { this.state.isHomePage ?
                                <NavItem className="page-scroll hover" href={this.anchors[1]}>
                                    Inspiration <span className="line css3Animate"></span></NavItem>
                            :
                                <li className="page-scroll hover"><Link to={this.anchors[1]}>
                                    Inspiration <span className="line css3Animate"></span></Link></li>
                            }

                            { this.state.isHomePage ?
                                <NavItem className="page-scroll hover" href={this.anchors[2]}>
                                    Media <span className="line css3Animate"></span></NavItem>
                            :
                                <li className="page-scroll hover"><Link to={this.anchors[2]}>
                                    Media <span className="line css3Animate"></span></Link></li>
                            }

                            { this.state.isHomePage ?
                                <NavItem className="page-scroll hover" href={this.anchors[3]}>
                                    Biography <span className="line css3Animate"></span></NavItem>
                            :
                                <li className="page-scroll hover"><Link to={this.anchors[3]}>
                                    Biography <span className="line css3Animate"></span></Link></li>
                            }

                            { this.state.isHomePage ?
                                <NavItem className="page-scroll hover" href={this.anchors[4]}>
                                    Contact <span className="line css3Animate"></span></NavItem>
                            :
                                <li className="page-scroll hover"><Link to={this.anchors[4]}>
                                    Contact <span className="line css3Animate"></span></Link></li>
                            }

                            <li className="nav-donate-btn-item">
                                <Link className="nav-donate-btn" to='/donate'>Donate</Link>
                            </li>
                            <li>
                                <a className="sr-icons" href="https://www.facebook.com/Diego-Morales-1572720369644618/" target="_blank"><i className="fa fa-2x fa-facebook"></i></a>
                            </li>
                            <li>
                                <a className="sr-icons" href="https://twitter.com/cdiegomorales?lang=en" target="_blank"><i className="fa fa-2x fa-twitter"></i></a>
                            </li>
                            <li>
                                <a className="sr-icons" href="https://www.instagram.com/cdiegomorales/" target="_blank"><i className="fa fa-2x fa-instagram"></i></a>
                            </li>
                            <li>
                                <a className="sr-icons" href="https://www.linkedin.com/in/diego-morales-8723426/" target="_blank"><i className="fa fa-2x fa-linkedin"></i></a>
                            </li>
                        </ReactNav>
                    </Navbar.Collapse>
                </Navbar>
            </Affix>
        );
    }
}
