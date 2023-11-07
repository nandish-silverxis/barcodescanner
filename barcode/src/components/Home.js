import React, { Component } from 'react';
import Webcam from './react-webcam';
import QrScanner from 'qr-scanner'


class Home extends Component {
  render() {
    return (
      <div className="App">
       <QrScanner/>
        <Webcam />
      </div>
    );
  }
}

export default Home
