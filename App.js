import {Component} from 'react'

import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {clockShow: false}

  onToggleClock = () => {
    this.setState(prevState => ({clockShow: !prevState.clockShow}))
  }

  render() {
    const {clockShow} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
        >
          {clockShow ? 'Hide Clock' : 'Show Clock'}
        </button>
        {clockShow && <Clock />}
      </div>
    )
  }
}

export default App
