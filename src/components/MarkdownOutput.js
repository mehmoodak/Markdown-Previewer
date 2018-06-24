import React, {Component} from 'react';

class MarkdownOutput extends Component {

  render() {
    return (
        <div className="col-sm-6">
          <h5 className="text-bold"> Preview here</h5>
          <hr/>
          <div id="md-output" dangerouslySetInnerHTML={{__html: this.props.preview}} />
        </div>
    );
  }
}

export default MarkdownOutput;