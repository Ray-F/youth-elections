import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {users: []}

  // if app was loaded properly
  componentDidMount() {

    // running server query to express API (server)
    fetch('users/')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  // render engine to index
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>You are a poop.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {this.state.users.map(user =>
          <p>{user.value}</p>
        )}
      </div>
    );
  }
}


export default App;
