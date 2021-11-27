import React, {Component} from 'react';
import UseRefBasics from './1-useRef-basics'

class UseRef extends Component{
    constructor(props) {
        super(props);
        this.state = {
            UseRefBasics: false,
        }
        this.renderUseRefBasics = this.renderUseRefBasics.bind(this)
    }

    resetProps(){
        this.setState({
            UseRefBasics: false,
        });
    }

    renderUseRefBasics(){
        this.resetProps()
        this.setState({
            UseRefBasics: true
        });
    }

    render() {
        return (
            <div className={'container'}>
                <button type={"button"} className={'btn'} onClick={this.renderUseRefBasics}>UseRef Basics</button>
                { this.state.UseRefBasics ? <UseRefBasics/> : null }
            </div>
        );
    }
};

export default UseRef;
