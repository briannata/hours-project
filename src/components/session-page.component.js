import React, { Component } from 'react';
import history from './history';
import { Row, Col, Container, Alert } from "react-bootstrap";
import '../App.css';

export default class SessionPage extends Component {

  constructor(props) {
    super(props);
    this.onChangeTask = this.onChangeTask.bind(this);
    this.state = {
      participants: [this.props.location.state.name],
      tasks: [],
      id: this.props.location.state.id,
      newtask: '',
      checks: [],
      time: 0
    }
    this.addTask = this.addTask.bind(this);
    this.myRef = React.createRef();
  }

  onChangeTask(e) {
    this.setState({
      newtask: e.target.value
    });
  }

  addTask() {
    var new_task_list = this.state.tasks;
    new_task_list.push(this.state.newtask);
    this.setState({
      tasks: new_task_list
    })
    this.state.newtask = '';
    document.getElementById("txtbox").value = "";
  }

  // participants list
  // timer
  // tasks list
  // optional chat
  // copy invite code (join instead of session)

  /* 
  updateDatabase() {
    tasks = length of tasks + length of completed tasks
    duration = timer
    

  }
  
  */

  endSession() {
    console.log("ending session...");
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
            </Col>
          </Row>
          {/* Optional chat
          <br></br>
          
          <Row>
            <Col>
              <h4>Chat (optional)</h4>
              <br></br>
              <div style={{minHeight: "40vh", border: "1.5px solid black"}}>

              </div>
            </Col>
          </Row>*/}
        </Container>
        <br></br>
        <br></br>
        <button onClick={this.endSession}>Exit Session</button>
      </div>
    );
  }
}