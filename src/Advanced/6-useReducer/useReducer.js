import React, {Component} from 'react';
import UseReducerBasics from "./1-useReducer-basics";

class UseReducer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UseReducerBasics: false,
        }
        this.renderUseReducerBasics = this.renderUseReducerBasics.bind(this)
    }

    resetProps(){
        this.setState({
            UseReducerBascis: false,
        });
    }

    renderUseReducerBasics(){
        this.resetProps()
        this.setState({
            UseReducerBasics: true
        });
    }

    render() {
        return (
            <div className={'container'}>
                <button type={"button"} className={'btn'} onClick={this.renderUseReducerBasics}>UseReducer</button>
                { this.state.UseReducerBasics ? <UseReducerBasics/> : null }
            </div>
        );
    }
}

export default UseReducer;