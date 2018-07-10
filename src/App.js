/*
 src/App.js
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

// import action creators
import { simpleAction } from './actions/simpleAction'

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bezop Frontend</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload <br/>
          <button onClick={this.simpleAction}>Test redux action</button>
        </p>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        
      </div>
    );
  }

}


// It allows the React component to subscribe to redux state updates.
const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);