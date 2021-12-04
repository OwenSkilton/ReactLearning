import React, {Component} from 'react';
import './index.css'
import APICSSTest from "./1-Api-CSS-Test";


class TestIndex extends Component{
    constructor(props) {
        super(props);
        this.state = {
            APICSSTest: false
        }
        this.renderAPICSSTest = this.renderAPICSSTest.bind(this)

    }

    renderAPICSSTest(){
        this.setState({
            APICSSTest: true,
        });
    }


    render() {
        return (
            <div className='container'>
                <button type={"button"} className={'btn'} onClick={this.renderAPICSSTest}>API TEST</button>
                {this.state.APICSSTest ? <APICSSTest/> : null}
            </div>
        );
    }
}

export default TestIndex;
