import React, { Component } from 'react';
import history from './history';

export default class JoinPage extends Component {

  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      id: this.props.location.state.id
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      name: this.state.name,
      id: this.state.id
    };

    console.log("joining session...");
    console.log(data.name);
    history.push('/session/' + data.id, {id: data.id, name: data.name});
    window.location.reload();
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
        <br></br>
        <br></br>
        <button onClick={this.onSubmit}>Join Session</button>
      </div>
    );
  }
}