import React, { Component } from 'react';
import './App.css';
import {NavBar} from './NavBar';
import { ScoreTable } from './ScoreTable';
import anonymousImg from './Head.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {username: 'anonymous',
                  avatar: anonymousImg
                  };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar showAvatar={this.state.avatar} />
        </header>
        <ScoreTable />
      </div>
    );
  }
}

export default App;
