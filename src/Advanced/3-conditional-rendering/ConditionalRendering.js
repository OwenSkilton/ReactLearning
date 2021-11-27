import React, {Component} from 'react';
import MultipleReturns from './1-multiple-returns'
import ShortCircuit from './2-short-circuit'
import ShowHide from './3-show-hide'
class ConditionalRendering extends Component{
    constructor(props) {
        super(props);
        this.state = {
            MultipleReturns: false,
            ShortCircuit: false,
            ShowHide: false,
        }
        this.renderMultipleReturns = this.renderMultipleReturns.bind(this)
        this.renderShortCircuit = this.renderShortCircuit.bind(this)
        this.renderShowHide = this.renderShowHide.bind(this)
    }

    resetProps(){
        this.setState({
            MultipleReturns: false,
            ShortCircuit: false,
            ShowHide: false
        });
    }

    renderMultipleReturns(){
        this.resetProps()
        this.setState({
            MultipleReturns: true
        });
    }

    renderShortCircuit(){
        this.resetProps()
        this.setState({
            ShortCircuit: true
        });
    }
    renderShowHide(){
            this.resetProps()
            this.setState({
                ShowHide: true
            });
        }


    render() {
        return (
            <div className={'container'}>
                <button type={"button"} className={'btn'} onClick={this.renderMultipleReturns}>Multiple Returns</button>
                <button type={"button"} className={'btn'} onClick={this.renderShortCircuit}>Short Circuit</button>
                <button type={"button"} className={'btn'} onClick={this.renderShowHide}>Show Hide</button>
                { this.state.MultipleReturns ? <MultipleReturns/> : null }
                { this.state.ShortCircuit ? <ShortCircuit/> : null }
                { this.state.ShowHide ? <ShowHide/> : null }
            </div>
        );
    }
};

export default ConditionalRendering;
