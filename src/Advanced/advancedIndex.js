import React, {Component} from 'react';
import './index.css'
import UseState from './1-useState/useState'
import UseEffect from './2-useEffect/useEffect'
import ConditionalRendering from "./3-conditional-rendering/ConditionalRendering";
import Forms from './4-forms/Forms'
import UseRef from './5-useRef/useRef'
import UseReducer from './6-useReducer/useReducer'
import PropDrilling from './7-prop-drilling/propDrilling'
import UseContext from './8-useContext/useContext'
import CustomHooks from './9-custom-hooks/CustomHooks'
import PropTypes from './10-prop-types/Prop-Types'
import ReactRouter from './11-react-router/ReactRouter'
import Memo from './12-memo-useMemo-useCallback/Memo'

class Advanced extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showUseState: false,
            showUseEffect: false,
            showConditionalRendering: false,
            showPropDrilling: false,
            showUseContext: false,
            showForms: false,
            showUseReducer: false,
            showUseRef: false,
            showUseMemo: false,
            showPropTypes: false,
            showReactRouter: true,
            showCustomHooks: false,
        }
        this.renderUseState = this.renderUseState.bind(this)
        this.renderUseEffect = this.renderUseEffect.bind(this)
        this.renderConditionalRendering = this.renderConditionalRendering.bind(this)
        this.renderPropDrilling = this.renderPropDrilling.bind(this)
        this.renderUseContext = this.renderUseContext.bind(this)
        this.renderForms = this.renderForms.bind(this)
        this.renderUseReducer = this.renderUseReducer.bind(this)
        this.renderUseRef = this.renderUseRef.bind(this)
        this.renderUseMemo = this.renderUseMemo.bind(this)
        this.renderPropTypes = this.renderPropTypes.bind(this)
        this.renderReactRouter = this.renderReactRouter.bind(this)
        this.resetProps = this.resetProps.bind(this)
        this.renderCustomHooks = this.renderCustomHooks.bind(this)
    }

    resetProps(){
        this.setState({
            showUseState: false,
            showUseEffect: false,
            showConditionalRendering: false,
            showPropDrilling: false,
            showUseContext: false,
            showForms: false,
            showUseReducer: false,
            showUseRef: false,
            showUseMemo: false,
            showPropTypes: false,
            showReactRouter: false,
            showCustomHooks: false,
        });
    }

    renderUseState(){
        this.resetProps()
        this.setState({
            showUseState: true,
        });
    }
    renderUseEffect(){
        this.resetProps()
        this.setState({
            showUseEffect: true,
        });

    }
    renderConditionalRendering(){
        this.resetProps()
        this.setState({
            showConditionalRendering: true,
        });
    }
    renderPropDrilling(){
        this.resetProps()
        this.setState({
            showPropDrilling: true,
        });
    }
    renderUseContext(){
        this.resetProps()
        this.setState({
            showUseContext: true,
        });
    }
    renderForms(){
        this.resetProps()
        this.setState({
            showForms: true,
        });
    }
    renderUseReducer(){
        this.resetProps()
        this.setState({
            showUseReducer: true,
        });
    }
    renderUseRef(){
        this.resetProps()
        this.setState({
            showUseRef: true,
        });
    }
    renderUseMemo(){
        this.resetProps()
        this.setState({
            showUseMemo: true,
        });
    }
    renderPropTypes(){
        this.resetProps()
        this.setState({
            showPropTypes: true,
        });
    }
    renderReactRouter(){
        this.resetProps()
        this.setState({
            showReactRouter: true,
        });
    }
    renderCustomHooks(){
        this.resetProps()
        this.setState({
            showCustomHooks: true,
        });
    }

    render() {
        return (
            <div className='container'>
                <button type={"button"} className={'btn'} onClick={this.renderUseState}>useState</button>
                <button type={"button"} className={'btn'} onClick={this.renderUseEffect}>useEffect</button>
                <button type={"button"} className={'btn'} onClick={this.renderConditionalRendering}>Conditional rendering</button>
                <button type={"button"} className={'btn'} onClick={this.renderForms}>Forms</button>
                <button type={"button"} className={'btn'} onClick={this.renderUseRef}>useRef</button>
                <button type={"button"} className={'btn'} onClick={this.renderUseReducer}>useReducer</button>
                <button type={"button"} className={'btn'} onClick={this.renderPropDrilling}>Prop Drilling</button>
                <button type={"button"} className={'btn'} onClick={this.renderUseContext}>useContext</button>
                <button type={"button"} className={'btn'} onClick={this.renderCustomHooks}>Custom Hooks</button>
                <button type={"button"} className={'btn'} onClick={this.renderPropTypes}>Prop Types</button>
                <button type={"button"} className={'btn'} onClick={this.renderUseMemo}>useMemo / useCallback</button>
                <button type={"button"} className={'btn'} onClick={this.renderReactRouter}>React Router</button>
                {this.state.showUseState ? <UseState/> : null}
                {this.state.showUseEffect ? <UseEffect/> : null}
                {this.state.showConditionalRendering ? <ConditionalRendering/> : null}
                {this.state.showForms ? <Forms/> : null}
                {this.state.showUseRef ? <UseRef/> : null}
                {this.state.showUseReducer ? <UseReducer/> : null}
                {this.state.showPropDrilling ? <PropDrilling/> : null}
                {this.state.showUseContext ? <UseContext/> : null}
                {this.state.showCustomHooks ? <CustomHooks/> : null}
                {this.state.showPropTypes ? <PropTypes/> : null}
                {this.state.showReactRouter ? <ReactRouter/> : null}
                {this.state.showUseMemo ? <Memo/> : null}
            </div>
        );
    }
}

export default Advanced;
