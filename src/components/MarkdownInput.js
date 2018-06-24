import React, {Component} from 'react';

class MarkdownInput extends Component {

  constructor(props){
    super(props);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e){
    e.preventDefault();
    this.props.onMarkdownChange(e.target.value);
  }


  render() {
    return (
        <div className="col-sm-6">
          <h5 className="text-bold"> Markdown here </h5>
          <hr/>
          <textarea className="form-control" name="md-input" id="md-input" rows="25" onChange={this.inputChange}></textarea>
        </div>
    );
  }
}

export default MarkdownInput;

