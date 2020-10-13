function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { rword } from 'rword';

var _default = /*#__PURE__*/function (_Component) {
  _inheritsLoose(_default, _Component);

  function _default(props) {
    var _props$word;

    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      word: (_props$word = props.word) !== null && _props$word !== void 0 ? _props$word : null
    };
    return _this;
  }

  var _proto = _default.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      word: rword.generate()
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Welcome to ModuleTwo"), /*#__PURE__*/React.createElement("span", null, "here the current world : ", this.state.word));
  };

  return _default;
}(Component);

export { _default as default };