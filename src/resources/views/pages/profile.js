import React, { Component } from "react";
import { Card, Row, Col, Icon, Tooltip, Button, Input, Checkbox } from "antd";
/* Redux Connect */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* Import Custom Components */
import { HtitleHeader as Title } from "../../../components/header";
import { cardDash as Cards } from "../../../components/cards";

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <div className="container-page">
          <h1>Perfil laboral publico</h1>
        </div>
      </div>
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

export default ProfilePage;