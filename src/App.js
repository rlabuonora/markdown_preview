import React, { Component } from 'react';
import './App.css';
import renderHTML from 'react-render-html';

var marked = require('marked');


class Input extends Component {

    handleInput(event) {
        console.log(event.target.value);
        this.props.onInput(event.target.value);
    }
    render() {
        return(
               <div className="input col-sm-5 col-xs-offset-1">
                <textarea  rows="25" cols="55"
                   onInput={this.handleInput.bind(this)}
                   value={this.props.value}
                >
                  </textarea>
                </div>
        )
    }
}

class Output extends Component {
    render() {
        return(
              <div className="output col-sm-5">
                <pre className="output-content">
                {renderHTML(this.props.value)}
                </pre>
              </div>
        )
    }
}

class App extends Component {
  constructor() {
      super();
      this.state = {
          txt: 'Enter __markdown__ and preview it'
      }
  }
    handleInput(txt) {
        this.setState({
            txt: txt
        });
  }
  render() {
    return (
      <div className="container">
            <h1 className="text-center row">Markdown Preview</h1>
            <div className="row">
            <Input onInput={this.handleInput.bind(this)}
                   value={this.state.txt}/>
            <Output value={marked(this.state.txt)} />
            </div>
      </div>
    );
  }
}

export default App;
