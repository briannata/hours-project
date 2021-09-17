import React, { Component } from 'react';
import TopWaves from './img/top-waves.svg';
import BottomWaves from './img/bottom-waves.svg';
import axios from 'axios';
import history from './history';

export default class HomePage extends Component {

  makeSession() {
    // making a random id
    var objectid = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 24; i++ ) {
      objectid += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    // making a new session
    const newSession = {
      name: "New Session",
      tasks_created: 0,
      tasks_completed: 0,
      duration: 0,
      id: objectid
    }
    // post request to make a new session
    axios.post('http://localhost:5000/session/add', newSession)
      .then(res => console.log(res.data));
    // redirect user to join page
      history.push('/join/' + objectid, {id: objectid});
      window.location.reload();
    console.log(objectid);
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <h1>Hi there!</h1>
        <br></br>
        <h3>Welcome to my study session organizer. Our goal is to help you finish your tasks and eliminate procrastination!</h3>
        <br></br>
        <button onClick={this.makeSession} href="/join/[sessionId]">Click here to join a study session!</button>
      </div>
    );
  }
}