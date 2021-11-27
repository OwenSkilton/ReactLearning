import React, {Component} from 'react';
import FetchExample from './1-fetch-example'


class CustomHooks extends Component {
    constructor(props) {
        super(props);
        this.state={
            fetchExample: false,
        }
        this.resetProps = this.resetProps.bind(this)
        this.renderFetchExample = this.renderFetchExample.bind(this)
    }

    resetProps(){
        this.setState({
            fetchExample: false,
        })
    }

    renderFetchExample(){
        this.resetProps()
        this.setState({
            fetchExample: true
        })
    }

    render() {
        return (
            <div className={'container'}>
                <button className={'btn'} onClick={this.renderFetchExample}>Fetch Example</button>
                { this.state.fetchExample ? <FetchExample/> : null}
            </div>
        );
    }
}

export default CustomHooks;