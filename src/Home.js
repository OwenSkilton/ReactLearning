import React, {Component} from 'react';
import BookList from "./Book-Basics/BookList";
import Advanced from "./Advanced/advancedIndex";
import './index.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBookComponent: false,
            showAdvancedComponent: false
        }
        this.renderBook = this.renderBook.bind(this)
        this.renderAdvanced = this.renderAdvanced.bind(this)
    }
    renderBook(){
        this.state.showBookComponent ? this.setState({showBookComponent: false}) :
            this.setState({
            showBookComponent: true,
            showAdvancedComponent: false
        });
    }
    renderAdvanced(){
        this.state.showAdvancedComponent ? this.setState({showAdvancedComponent: false}) :
        this.setState({
            showAdvancedComponent: true,
            showBookComponent: false
        });
    }
    render() {
        return (
            <div >
                <button className='homeButton' onClick={this.renderBook}>BookApp</button>
                <button className='homeButton' onClick={this.renderAdvanced}>Advanced</button>
                {
                    this.state.showBookComponent ? <BookList/> : this.state.showAdvancedComponent ? <Advanced/> : null
                }
            </div>
        );
    }
}

export default Home;