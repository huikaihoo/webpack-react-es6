/* TestOne.jsx */

"use strict";

var React = require("react");
var Const = require("../data/const.json")

export default class TestOne extends React.Component {
  render() {
    return (
      /* jshint ignore: start*/
      <div>{Const.TestOne}</div>
      /* jshint ignore: end*/
    );
  }
}