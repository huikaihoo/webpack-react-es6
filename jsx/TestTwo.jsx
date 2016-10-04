/* TestTwo.jsx */

"use strict";

var React = require("react");
var Const = require("../data/const.json")

export default class TestTwo extends React.Component {
  render() {
    return (
      /* jshint ignore: start*/
      <h1>{Const.TestTwo}</h1>
      /* jshint ignore: end*/
    );
  }
}