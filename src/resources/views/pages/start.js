import React, { Component } from "react";
import { Card, Row, Col, Icon, Tooltip, Button, Input, Checkbox } from "antd";
/* Redux Connect */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* Import Custom Components */
import { layoutDashboard as Dashboard } from "../layouts";
import { HtitleHeader as Title } from "../../../components/header";
import { cardDash as Cards } from "../../../components/cards";


class DashboardStart extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  render() {
    let { routes } = this.props;
    return (
      <Dashboard className="container" routes={routes}/>
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

export default DashboardStart;