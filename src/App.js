import React, { Component } from 'react';
import './App.css';
import renderHTML from 'react-render-html';

var marked = require('marked');
var txt = marked('I am using __markdown__.');

class Input extends Component {
    render() {
        return(
               <div className="input">
                  <textarea  rows="30" cols="55">
                  </textarea>
                </div>
        )
    }
}

class Output extends Component {
    render() {
        return(
              <div className="output">
                <pre>
                {renderHTML(this.props.value)}
                </pre>

              </div>
        )
    }

}

class App extends Component {
  render() {
    return (
      <div className="App">
            <h1 className="title">Markdown Preview</h1>
            <div className="panes">
              <Input />
            <Output value={txt} />
            <div className="clear"></div>
            </div>
      </div>
    );
  }
}

export default App;
