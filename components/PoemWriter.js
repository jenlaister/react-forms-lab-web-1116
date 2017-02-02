const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = { poem: '' };
    this.validPoem = this.validPoem.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  validPoem(){
    const poemContent = this.state.poem.split('\n')
    const validPoemContent = poemContent.length === 3
    var poemCheckLine1
    var poemCheckLine2
    var poemCheckLine3
    validPoemContent ? poemCheckLine1 = poemContent[0].trim().split(" ").length : null
    validPoemContent ? poemCheckLine2 = poemContent[1].trim().split(" ").length : null
    validPoemContent ? poemCheckLine3 = poemContent[2].trim().split(" ").length : null
    if (validPoemContent && poemCheckLine1 === 5 && poemCheckLine2 === 3 && poemCheckLine3 === 5) {
      return true
    } else {
      return false
  }
}

  handleChange(event){
    this.setState({ poem: event.target.value })
  }

  render() {
    var valid = this.validPoem()
    if( valid ){
    return (
      <div>
      <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange}/>
      </div>
    )
  }
    return (
      <div>
      <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange}/>
      <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
      </div>
    )
  }
}


module.exports = PoemWriter
