import React, {Component} from 'react';
import '../scss/LiveUpdate.scss';

class App extends Component {
  state = {photoDb : []}

  // if app was loaded properly
  componentDidMount() {

    // running server query to express API (server)
    fetch("photos/").then((res) => {
      return res.json() }).then((res) => {
      this.setState({photoDb: res})});
  }

  // render engine to index
  render () {
    return (
      <div>
        {this.state.photoDb.map(photo => 
          <img src = {photo.url} />
        )}
      </div>
    );
  }
}

class PhotoGrid extends Component {
  render () {
    return (
      <div>
      </div>
    );
  }
}


export default App;
