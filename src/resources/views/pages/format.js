import React, { Component } from "react";
import { Card, Row, Col, Icon, Tooltip, Button, Input, Checkbox } from "antd";
/* Redux Connect */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* Import Custom Components */
import { HtitleHeader as Title } from "../../../components/header";
import { cardDash as Cards } from "../../../components/cards";

class FormatPage extends Component {
  render() {
    return (
      <div>
        <Title toBack={false} title="Formatos" subTitle="Multiples formatos de hoja de vida" />
        <div className="container-page">
          <Cards 
            title="Nueva hoja cv"
            description="Puedes elegir el estilo de tu curriculum"
            icon="plus-circle"
            url=""
          />
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

export default FormatPage;