// Write your code here

import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClicking = () => {
    this.setState(previousState => {
      console.log(`${previousState.count}`)
      return {count: previousState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="click-container">
        <h1 className="heading">
          The Button has been clicked <span className="count"> {count} </span>{' '}
          times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="button" onClick={this.onClicking} type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
