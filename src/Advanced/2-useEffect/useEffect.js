import React, {Component} from 'react';
import UseEffectBasics from './1-useEffect-basics'
import UseEffectCleanup from './2-useEffect-cleanup'
import UseEffectFetchData from './3-useEffect-fetch-data'
class UseEffect extends Component{
    constructor(props) {
        super(props);
        this.state = {
            UseEffectBasics: false,
            UseEffectCleanup: false,
            UseEffectFetchData: false
        }
        this.renderUseEffectBasics = this.renderUseEffectBasics.bind(this)
        this.renderUseEffectCleanup = this.renderUseEffectCleanup.bind(this)
        this.renderUseEffectFetchData = this.renderUseEffectFetchData.bind(this)
    }

    resetProps(){
        this.setState({
            UseEffectBasics: false,
            UseEffectCleanup: false,
            UseEffectFetchData: false
        });
    }

    renderUseEffectBasics(){
        this.resetProps()
        this.setState({
            UseEffectBasics: true,
        });
    }
    renderUseEffectCleanup(){
        this.resetProps()
        this.setState({
            UseEffectCleanup: true,
        });
    }
    renderUseEffectFetchData(){
            this.resetProps()
            this.setState({
                UseEffectFetchData: true,
            });
        }

    render() {
        return (
            <div className={'container'}>
                <button type={"button"} className={'btn'} onClick={this.renderUseEffectBasics}>useEffect Basics</button>
                <button type={"button"} className={'btn'} onClick={this.renderUseEffectCleanup}>useEffect Cleanup</button>
                <button type={"button"} className={'btn'} onClick={this.renderUseEffectFetchData}>useEffect Fetch Data</button>
                { this.state.UseEffectBasics ? <UseEffectBasics/> : null }
                { this.state.UseEffectCleanup ? <UseEffectCleanup/> : null }
                { this.state.UseEffectFetchData ? <UseEffectFetchData/> : null }
            </div>
        );
    }
};

export default UseEffect;
