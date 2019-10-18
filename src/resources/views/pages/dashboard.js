import React, { Component } from "react";
import { Card, Row, Col, Icon, Tooltip, Button, Input, Checkbox } from "antd";
/* Redux Connect */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* Import Custom Components */
import { layoutDashboard as Dashboard } from "../layouts";
import { HtitleHeader as Title } from "../../../components/header";


class Login extends Component {
  render() {
    return (
      <Dashboard className="container">
        <Title toBack={false} title="Title" subTitle="This is a subtitle" />
        <div className="container-page">
          <h1>Hola soy el Dashboard!!</h1>
        </div>
      </Dashboard>
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