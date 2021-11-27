import React, {Component} from 'react';
import UseStateBasics from './1-useState-basics'
import UseStateArrays from './2-useState-arrays'
import UseStateObject from './3-useState-object'
import UseStateCounter from './4-useState-counter'
class UseState extends Component{
    constructor(props) {
        super(props);
        this.state = {
            UseStateBasics: false,
            UseStateArrays: false,
            UseStateObject: false,
            UseStateCounter: false,
        }
        this.renderUseStateBasics = this.renderUseStateBasics.bind(this)
        this.renderUseStateArrays = this.renderUseStateArrays.bind(this)
        this.renderUseStateObject = this.renderUseStateObject.bind(this)
        this.renderUseStateCounter = this.renderUseStateCounter.bind(this)
    }

    resetProps(){
        this.setState({
            UseStateBasics: false,
            UseStateArrays: false,
            UseStateObject: false,
            UseStateCounter: false,
        });
    }

    renderUseStateBasics(){
        this.resetProps()
        this.setState({
            UseStateBasics: true,
        });
    }
    renderUseStateArrays(){
        this.resetProps()
        this.setState({
            UseStateArrays: true,
        });

    }
    renderUseStateObject(){
        this.resetProps()
        this.setState({
            UseStateObject: true,
        });
    }
    renderUseStateCounter(){
        this.resetProps()
        this.setState({
            UseStateCounter: true,
        });
    }

    render() {
        return (
            <div className={'container'}>
                <button type={"button"} className={'btn'} onClick={this.renderUseStateBasics}>useState Basics</button>
                <button type={"button"} className={'btn'} onClick={this.renderUseStateArrays}>UseState Arrays</button>
                <button type={"button"} className={'btn'} onClick={this.renderUseStateObject}>useState Object</button>
                <button type={"button"} className={'btn'} onClick={this.renderUseStateCounter}>useState Counter</button>
                { this.state.UseStateBasics ? <UseStateBasics/> : null }
                { this.state.UseStateArrays ? <UseStateArrays/> : null }
                { this.state.UseStateObject ? <UseStateObject/> : null }
                { this.state.UseStateCounter ? <UseStateCounter/> : null }
            </div>
        );
    }
};

export default UseState;
