import React, {Component} from 'react';
import BookList from "./Book-Basics/BookList";
import Advanced from "./Advanced/advancedIndex";
import TestIndex from "./Test/TestIndex";
import './index.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBookComponent: false,
            showAdvancedComponent: false,
            showTestIndex: false
        }
        this.resetProps = this.resetProps.bind(this)
        this.renderBook = this.renderBook.bind(this)
        this.renderAdvanced = this.renderAdvanced.bind(this)
        this.renderTestIndex = this.renderTestIndex.bind(this)
    }
    resetProps(){
        this.setState({
            showBookComponent: false,
            showAdvancedComponent: false,
            showTestIndex: false
        })
    }
    renderBook(){
        this.resetProps()
        this.setState({
            showBookComponent: true,
        });
    }
    renderAdvanced(){
        this.resetProps()
        this.setState({
            showAdvancedComponent: true,
        });
    }
    renderTestIndex(){
        this.resetProps()
        this.setState({
            showTestIndex: true,
        });
    }
    render() {
        return (
            <div >
                <button className='homeButton' onClick={this.renderBook}>BookApp</button>
                <button className='homeButton' onClick={this.renderAdvanced}>Advanced</button>
                <button className='homeButton' onClick={this.renderTestIndex}>Test API</button>
                {this.state.showBookComponent ? <BookList/> : null}
                {this.state.showAdvancedComponent ? <Advanced/> : null}
                {this.state.showTestIndex ? <TestIndex/> : null}
            </div>
        );
    }
}

export default Home;