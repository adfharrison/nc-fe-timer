import './App.css';
import React from 'react'
import SetTimer from './setTimer'

class App extends React.Component {

  state = {
    initialTime: {
      mins:0,
      secs:0
    },
    timeRemaining: {
      mins: 0,
      secs: 0
    },
    timeOut: false
  }

  setTime = (mins, secs) => {
    //updates initialTime with values from timeOptions
    this.setState((currentState) => {
      const newState = { initialTime: {...currentState.initialTime, mins: mins, secs: secs}}
      console.log(newState)
    return newState
    })
    
  }

  render () {
  return (
    <div className="App">
      <h1>Timer</h1>
      <SetTimer setTime={this.setTime}/>
    </div>
  );
  }
}

export default App;
