import React, {Component} from 'react';
import PropTypesIndex from './1-prop-types'

class PropTypes extends Component {
    constructor(props) {
        super(props);
        this.state={
            PropTypesIndex: false,
        }
        this.resetProps = this.resetProps.bind(this)
        this.renderPropTypesIndex = this.renderPropTypesIndex.bind(this)
    }

    resetProps(){
        this.setState({
            fetchExample: false,
        })
    }

    renderPropTypesIndex(){
        this.resetProps()
        this.setState({
            PropTypesIndex: true
        })
    }

    render() {
        return (
            <div className={'container'}>
                <button className={'btn'} onClick={this.renderPropTypesIndex}>Prop Types</button>
                { this.state.PropTypesIndex ? <PropTypesIndex/> : null}
            </div>
        );
    }
}

export default PropTypes;