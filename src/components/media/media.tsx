import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Instafeed from './instafeed.min.js';
import './media.scss';

export default class Media extends React.Component {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        if (window['twttr'] && window['twttr'].widgets) {
            window['twttr'].widgets.load();
        }

        var feed = new Instafeed({
            get: 'user',
            userId: '1510523799',
            clientId: 'b82d00dba4eb4f3498038904925694a8',
            accessToken: '1510523799.1677ed0.4088bc38af6846db8688dc84ba2db55f',
            limit: 21,
            template: '<div class="col-md-4 col-sm-4 col-xs-4 text-center"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></div>'
        });
        feed.run();
    }

    render() {

        return (
            <div>
                <span className="section-anchor" id="media"></span>
                <section className="media-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-heading">
                                    <h2>MEDIA</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 text-center" >
                                <a className="twitter-timeline" href="https://twitter.com/cdiegomorales" data-tweet-limit="3">
                                    Tweets by Diego
                                </a>
                            </div>
                            <div className="col-md-6">
                                <div className="insta-feed-header">
                                    <h3>Instagram</h3>
                                </div>
                                <div id="instafeed" className="row"></div>
                            </div>
                            <div className="col-md-6">
                                <div className="insta-feed-header">
                                    <h3>Campaign Ads</h3>
                                </div>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe frameBorder="0" allowFullScreen width="560" height="315"
                                        src="https://www.youtube.com/embed/21M-vK2vK8A?ecver=1&amp;rel=1&amp;autohide=2&amp;color=red&amp;width=560&amp;width=560">
                                        </iframe>
                                    </div>
                                    <br />
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe frameBorder="0" allowFullScreen width="560" height="315"
                                        src="https://www.youtube.com/embed/rM3b6Zjpd6U?ecver=1&amp;rel=1&amp;autohide=2&amp;color=red&amp;width=560&amp;width=560">
                                        </iframe>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
