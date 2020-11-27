import React from 'react'

class SetTimer extends React.Component {

    state = {
        setMins: 0,
        setSecs: 0
    }

    timeOptions() {
        let arr = [];
        for (let i = 0; i <= 59; i++) {
            arr.push(<option key={i} value={i}>{i}</option>)
        }
        return arr; 
    }

    clickHandler = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }
    render(props) {
        return (
            <div id="setTimer">
            <label htmlFor='setMins'>mins: 
            <select onChange={this.clickHandler} name="setMins" id="setMins">
                {this.timeOptions()}
            </select></label>
            <label htmlFor='setSecs'>secs: 
            <select onChange={this.clickHandler} name="setSecs" id="setSecs">
                {this.timeOptions()}
            </select></label>
            <button onClick={() => props.setTime()}>Set Time</button>
            </div>
        );
    }
}

export default SetTimer

