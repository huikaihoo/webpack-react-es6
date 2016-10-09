/* main.jsx */

"use strict";

import "../css/main.css"

import React from "react";
import ReactDOM from "react-dom";
import TestOne from "./TestOne.jsx";
import TestTwo from "./TestTwo.jsx";

//Needed for React Developer Tools
window.React = React;

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        switch: true
    };
  }
  _toggle = (e) => {
    this.setState({
      switch: !this.state.switch
    });
  }
  render() {
    return (
      <div className="ui container">
        <div className="ui basic segment">
          <input className="ui primary button" type="button" onClick={this._toggle} value="Press Me!"/>
          {this.state.switch ? <TestOne /> : <TestTwo />}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.body);