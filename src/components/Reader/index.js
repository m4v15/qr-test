import React, { Component, Fragment } from 'react'
import QrReader from 'react-qr-reader'

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
    }
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data) {
    if (data) {
      this.setState({
        result: data,
      })
    }
  }
  handleError(err) {
    console.error(err)
  }
  render() {
    return (
      <Fragment>
        <div>
          <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{
              width: '16rem',
              height: '16rem',
              margin: 'auto'
            }}
          />
          <p>{this.state.result}</p>
        </div>
        <button className="start-button" onClick={() => this.props.changeView(0)}>
          END
        </button>
      </Fragment>
    )
  }
}


export default Test;
