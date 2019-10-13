import React, { Component } from "react";
import { Card, Row, Col, Icon, Tooltip, Button, Input, Checkbox } from "antd";
/* Redux Connect */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* Import Custom Components */
import { standar as Standar } from "../layouts";



class Login extends Component {

  render() {
    return (
      <Standar className="login-page">
          <h1>Hola Soy el login</h1>
      </Standar>
    );
  }
}
/* Mapping Actions to Props*/
const mapStateToProps = state => {
  const { data } = state;
  return {
    data
  };
};
/* Event Action Dispatch to Props */
const mapDispatchToProps = dispatch => ({
  
});

export default Login;