import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class ScrollToTop extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.onTwitterWidgetRendered = this.onTwitterWidgetRendered.bind(this);
    }

    componentDidMount() {

        // add an event listener to scroll to hash when widget is loaded
        window['twttr'].ready((twttr) => {
            twttr.events.bind(
                'loaded',
                this.onTwitterWidgetRendered
            );
        });
    }

    componentDidUpdate(prevProps: any) {

        // scroll to hash if its set
        if (!this.scrollToAvaliableHash()) {

            // scroll to top of page if no hash is set
            if (this.props.location !== prevProps.location) {
                window.scrollTo(0, 0);
            }
        }
    }

    onTwitterWidgetRendered(event) {
        this.scrollToAvaliableHash();
    }

    scrollToAvaliableHash() {
        if (this.props.location && this.props.location.hash != '') {
            let elementId = this.props.location.hash.slice(1);
            let el = document.getElementById(elementId);
            el.scrollIntoView();
            return true;
        }
    }
    
    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
