import React, { Component } from 'react'

export class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0};
  }


  componentDidMount() {
    const second = 1000; //ms

    // let interval = setInterval(callback, timeInMs)
    let interval = window.setInterval(
      () => {
      let newCount = this.state.count + 1;

      this.setState({
        count: newCount
      })

      console.log(this.state.count);
    },second)

    this.setState({
      interval
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
    this.setState({
      interval: null
    })
  }


  render() {
    let str;
    if (this.state.count % 2){ // 0 is falsy, 1 is truthy
      str = 'tock'
    } else {
      str = 'tick'
    }
    if (this.state.count >= 8) {
      str = 'BOOM!!!!';
      clearInterval(this.state.interval)
      this.setState({
        interval: null
      })
    }
    return (
      <div>
        <p>{str}</p>
      </div>
    )
  }
}

export default Bomb
