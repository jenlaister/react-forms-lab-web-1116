const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
