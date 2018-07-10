import React, { Component, Fragment } from 'react';
import './style.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="intro">
          Welcome to the QR reader
        </div>
        <button className="start-button" onClick={() => this.props.changeView(1)}>
          BEGIN
        </button>
      </Fragment>
    );
  }
}

export default App;
