import React, {Component} from 'react';
import UseMemo from './1-useMemo'
class Memo extends Component {
    constructor(props) {
        super(props);
        this.state={
            UseMemo: false
        }
        this.renderUseMemo = this.renderUseMemo.bind(this)
    }
    renderUseMemo(){
        this.setState({
            UseMemo: true
        })
    }
    render() {
        return (
            <div className={'container'}>
                <button className={'btn'} onClick={this.renderUseMemo}>useMemo</button>
                { this.state.UseMemo ? <UseMemo/> : null}
            </div>
        );
    }
}

export default Memo;