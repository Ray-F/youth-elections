import React, {Component} from 'react';
import '../scss/App.scss';

const PUBLIC_URL = process.env.PUBLIC_URL;

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
          <img src={PUBLIC_URL + "/resources/logo.svg"} className="App-logo" alt="logo" />
          <p>
            <code>Welcome to NZ Youth Elections 2020</code>
          </p>

          <p>Check back later for more info.<br />
          (made with <code>react.js</code>)
          </p>

        </header>

        {this.state.users.map(user => <p>{user.value}</p>)}
      </div>
    );
  }
}


export default App;
