import React, { Component } from 'react';

export default class JoinPage extends Component {

  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: ''
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
    };
    
    this.setState({
      name: ''
    })
  }

  joinSession() {
    console.log("joining session...");
    history.push('/session/' + this.objectid, this.name);
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <h1>Join the Study Session</h1>
        <h3>Enter this study session to get your work done and chat with friends!</h3>
        <br></br>
        <p>Please enter your name below:</p>
        <input type="text" onChange={this.onChangeName}></input>
        <button onClick={this.joinSession}>Join Session</button>
      </div>
    );
  }
}