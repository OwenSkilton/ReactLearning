import React, {Component} from 'react';
import PropDrillingBasics from './1-prop-drilling'

class PropDrilling extends Component {
    constructor(props) {
        super(props);
        this.state={
            PropDrilling: false
        }
        this.renderPropDrilling = this.renderPropDrilling.bind(this)
    }

    resetProps(){
        this.setState({
            PropDrilling: false
        })
    }

    renderPropDrilling(){
        this.resetProps()
        this.setState({
            PropDrilling: true
        })
    }

    render() {
        return (
            <div className={'container'}>
                <button className={'btn'} onClick={this.renderPropDrilling}>Prop Drilling</button>
                {this.state.PropDrilling ? <PropDrillingBasics/> : null}
            </div>
        );
    }
}

export default PropDrilling;