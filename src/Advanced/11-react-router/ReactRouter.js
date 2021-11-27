import React, {Component} from 'react';
import ReactRouterSetup from './1-react-router'

class ReactRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ReactRouter: false,
        }
        this.resetProps = this.resetProps.bind(this)
        this.renderReactRouter = this.renderReactRouter.bind(this)
    }

    resetProps(){
        this.setState({
            ReactRouter: false,
        })
    }

    renderReactRouter(){
        this.resetProps()
        this.setState({
            ReactRouter: true
        })
    }

    render() {
        return (
            <div className={'container'}>
                <button className={'btn'} onClick={this.renderReactRouter}>React Router</button>
                { this.state.ReactRouter ? <ReactRouterSetup/> : null}
            </div>
        );
    }
}

export default ReactRouter;