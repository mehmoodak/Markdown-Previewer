import React, { Component } from 'react';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';
import marked from 'marked';
import './App.css';
import ('bootstrap/dist/css/bootstrap.min.css');

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      preview: ''
    };

    this.setMarkdown = this.setMarkdown.bind(this);
  }

  setMarkdown(markdown){

    this.setState({
      preview: marked(markdown)
    });

    console.clear();
    console.log(this.state.preview);
  }

  render() {
    return (
      <div className="container">
        <h1 className="app-title"> Markdown Previewer </h1>
        <div className="row">
          <MarkdownInput onMarkdownChange={this.setMarkdown}/>
          <MarkdownOutput preview={this.state.preview}/>
        </div>
      </div>
    );
  }
}

export default App;
