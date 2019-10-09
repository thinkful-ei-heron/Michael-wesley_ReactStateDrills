import React from 'react';


class HelloWorld extends React.Component{
  state = {
    who: 'world'
  }
  handleClick = arg => {
    this.setState({
      who: arg
    })
  }

  render(){
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button type="button" onClick={() => this.handleClick('world')}>World</button>
        <button type="button" onClick={() => this.handleClick('friend')}>Friend</button>
        <button type="button" onClick={() => this.handleClick('React')}>React</button>
      </div>
    )
  }
}

export default HelloWorld


