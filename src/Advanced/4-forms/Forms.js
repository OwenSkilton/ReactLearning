import React, {Component} from 'react';
import ControlledInputs from './1-controlled-inputs'
import MultipleInputs from './2-multiple-inputs'
class Forms extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ControlledInputs: false,
            MultipleInputs: false,
        }
        this.renderControlledInputs = this.renderControlledInputs.bind(this)
        this.renderMultipleInputs = this.renderMultipleInputs.bind(this)
    }

    resetProps(){
        this.setState({
            ControlledInputs: false,
            MultipleInputs: false,
        });
    }

    renderControlledInputs(){
        this.resetProps()
        this.setState({
            ControlledInputs: true
        });
    }

    renderMultipleInputs(){
        this.resetProps()
        this.setState({
            MultipleInputs: true
        });
    }


    render() {
        return (
            <div className={'container'}>
                <button type={"button"} className={'btn'} onClick={this.renderControlledInputs}>Controlled Inputs</button>
                <button type={"button"} className={'btn'} onClick={this.renderMultipleInputs}>Multiple Inputs</button>
                { this.state.ControlledInputs ? <ControlledInputs/> : null }
                { this.state.MultipleInputs ? <MultipleInputs/> : null }
            </div>
        );
    }
};

export default Forms;
