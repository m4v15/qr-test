import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Start from './components/Start'
import Reader from './components/Reader'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 0
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView(viewNum) {
    this.setState({ view: viewNum })
  }
  render() {
    let Page
    switch (this.state.view) {
      case 0:
        Page = <Start changeView={this.changeView} />
        break
      case 1:
        Page = <Reader changeView={this.changeView} />
        break
      default:
        Page = <Start changeView={this.changeView} />

    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {Page}
      </div>
    );
  }
}

export default App;
