import React, {Component} from 'react';
import '../scss/App.scss';

const PUBLIC_URL = process.env.PUBLIC_URL;

class App extends Component {
  state = {users: []}

  // if app was loaded properly
  componentDidMount() {

    // running server query to express API (server)
    fetch('/users')
      .then(res => res.json())
      .then(res => this.setState({ users: res }));
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
          <form action = "/users" method = "POST">
            <label for = "name">Name: </label>
            <input name = "name" />
            <br />

            <label for = "name">Address: </label>
            <input name = "address" />
            <br />

            <label for = "name">Phone: </label>
            <input name = "phone" />
            <br/>

            <button type = "submit">Create new person</button>

          </form>
        </header>

        {this.state.users.map(user => <div>
        <h3>{user.name}</h3>
          <p><b>Address: </b>{user.address}</p>
          <p><b>Phone: </b>{user.phone}</p>
          <form action = {"/users/delete/" + user._id}><button type = "submit">Delete</button></form></div>)}
      </div>
    );
  }
}


export default App;
