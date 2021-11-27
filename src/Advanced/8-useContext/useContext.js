import React, {Component} from 'react';
import ContextApi from "./1-context-api";

class UseContext extends Component {
    constructor(props) {
        super(props);
        this.state={
            UseContext: false
        }
        this.renderUseContext = this.renderUseContext.bind(this)
    }

    resetProps(){
        this.setState({
            UseContext: false
        })
    }

    renderUseContext(){
        this.resetProps()
        this.setState({
            UseContext: true
        })
    }

    render() {
        return (
            <div className={'container'}>
                <button className={'btn'} onClick={this.renderUseContext}>UseContext</button>
                {this.state.UseContext ? <ContextApi/> : null}
            </div>
        );
    }
}

export default UseContext;