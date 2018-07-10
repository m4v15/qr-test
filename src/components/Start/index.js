import React, { Component, Fragment } from 'react';


class Start extends Component {
  render() {
    return (
      <Fragment>
        <button className="f6 link dim br4 h4 w4 ph3 pv2 mt5 mb2 dib white bg-hot-pink" onClick={() => this.props.changeView(1)} >
          BEGIN
        </button>
      </Fragment>
    );
  }
}

export default Start;
