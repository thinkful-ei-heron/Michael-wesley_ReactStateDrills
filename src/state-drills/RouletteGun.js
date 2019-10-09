import React, { Component } from 'react'

export class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false
  }
  handleClick = arg => {
    this.setState({
      spinningTheChamber: true
  })
  
  }

componentDidMount(){
  let timeout = setTimeout(() => {
    let result = Math.floor(Math.random() * 8)+1;
    this.setState({
      chamber:result,
      spinningTheChamber: false
    })
  }, 2000 );

  this.setState({
    timeout
    })
}

  componentWillUnmount() {
    clearTimeout(this.state.timeout);
    this.setState({
      timeout: null
    })
  }

  render() {
    let status;
    if (this.state.spinningTheChamber){
      status='spinning the chamber and pulling the trigger! ...';
    } else (
      status = this.state.chamber === this.props.bulletInChamber ? 'BANG!!!' : "you're safe!!" 
    )

    return (
      <div>
        <p>{status}</p>
        <button type="button" onClick={this.handleClick}>Pull the trigger!</button>
      </div>
    )
}
}

export default RouletteGun
