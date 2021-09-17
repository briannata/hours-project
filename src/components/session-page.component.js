import React, { Component } from 'react';
import history from './history';
import { Row, Col, Container, Alert } from "react-bootstrap";
import '../App.css';

export default class SessionPage extends Component {

  // constructor (binding methods, setting initial state)
  constructor(props) {
    super(props);
    this.onChangeTask = this.onChangeTask.bind(this);
    this.onChangeMinutes = this.onChangeMinutes.bind(this);
    this.state = {
      participants: [this.props.location.state.name],
      tasks: [],
      id: this.props.location.state.id,
      newtask: '',
      checks: [],
      initialDate: Date.now(),
      time: 3600,
      minutes: 0
    }
    this.addTask = this.addTask.bind(this);
    this.addMinutes = this.addMinutes.bind(this);
    this.endSession = this.endSession.bind(this);
    this.myRef = React.createRef();
  }

// sets this.state.newtask to what is in the add task textbox 
  onChangeTask(e) {
    this.setState({
      newtask: e.target.value
    });
  }

  // sets this.state.minutes to what is in the add minutes textbox
  onChangeMinutes(e) {
    this.setState({
      minutes: parseInt(e.target.value)
    });
  }

  // setting an interval for every second to update this.state.time
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: this.state.time - 1}), 1000);
  }

  // clearing the interval when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // add this.state.newtask to the this.state.tasks list, resets task textbox
  addTask() {
    var new_task_list = this.state.tasks;
    new_task_list.push(this.state.newtask);
    this.setState({
      tasks: new_task_list
    })
    this.state.newtask = '';
    document.getElementById("txtbox").value = "";
  }

  // add this.state.minutes to this.state.time, resets minutes textbox
  addMinutes() {
    var min = this.state.time + this.state.minutes * 60;
    this.setState({
      time: min
    })
    this.state.newtask = '';
    document.getElementById("minbox").value = "";
  }

  // remove participant from participants list, navigate to home
  endSession() {
    console.log("exiting session...");
    this.setState({
      participants: this.state.participants - [this.props.location.state.name]
    })
    history.push('/');
    window.location.reload();
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <h1>Session Page</h1>
        <br></br>
        <Container>
          <Row>
            <Col>
              <div>
                <h4>Tasks</h4>
                <div  style={{alignItems: "horizontal"}}>
                  <div style={{alignItems: "vertical", float: "left"}}>
                      {this.state.tasks.map((li, i) => <div><input type="checkbox"></input><br></br></div>)}
                  </div>
                  <div  style={{alignItems: "vertical", float: "left"}}>
                    <ul>{this.state.tasks.map((li, i) => <li key={i}>{li}</li>)}</ul>
                  </div>
                </div>
                <div style={{clear: "both"}}></div>
                <input type="text" id="txtbox" placeholder="add task" onChange={this.onChangeTask} style={{textAlign: "center"}}/>
                <br></br>
                <br></br>
                <button onClick={this.addTask}>Add Task</button>
              </div>
            </Col>
            <Col>
              <h5>Participants:</h5>
              <ul>{this.state.participants.map((li, i) => <li key={i}>{li}</li>)}</ul>
            </Col>
            <Col>
              <h5>Timer</h5>
              <p><b>{Math.floor(this.state.time/60)}</b> minutes, <b>{ Math.floor(this.state.time%60)}</b> seconds</p>
              <input type="text" id="minbox" placeholder="add minutes to timer" onChange={this.onChangeMinutes} style={{textAlign: "center"}}/>
                <br></br>
                <br></br>
                <button onClick={this.addMinutes}>Add Minutes</button>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <button onClick={this.endSession}>Exit Session</button>
      </div>
    );
  }
}