import React, { Component } from "react";
import { Card, Row, Col, Icon, Tooltip, Button, Input, Checkbox } from "antd";
/* Redux Connect */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* Import Custom Components */
import { layoutDashboard as Dashboard } from "../layouts";
import { HtitleHeader as Title } from "../../../components/header";
import { cardDash as Cards } from "../../../components/cards";

let CardsDashboars =
[
  {
    title: "foto",
    description: "selecciona tu foto para el curriculum",
    icon: "camera",
    url: "/dashboard"
  },
  {
    title: "datos personales",
    description: "selecciona tu foto para el curriculum",
    icon: "user",
    url: "/dashboard"
  },
  {
    title: "estado militar",
    description: "selecciona tu foto para el curriculum",
    icon: "idcard",
    url: "/dashboard"
  },
  {
    title: "recidencia actual",
    description: "selecciona tu foto para el curriculum",
    icon: "environment",
    url: "/dashboard"
  },
  {
    title: "formación media",
    description: "selecciona tu foto para el curriculum",
    icon: "read",
    url: "/dashboard"
  },
  {
    title: "formación superios",
    description: "selecciona tu foto para el curriculum",
    icon: "bank",
    url: "/dashboard"
  },
  {
    title: "Lenguajes",
    description: "selecciona tu foto para el curriculum",
    icon: "global",
    url: "/dashboard"
  },
  {
    title: "correos",
    description: "selecciona tu foto para el curriculum",
    icon: "mail",
    url: "/dashboard"
  },
  {
    title: "teléfonos",
    description: "selecciona tu foto para el curriculum",
    icon: "phone",
    url: "/dashboard"
  },
  {
    title: "formación media",
    description: "selecciona tu foto para el curriculum",
    icon: "cloud-upload",
    url: "/dashboard"
  }
];

class DashboardPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  render() {
    let { routes } = this.props;
    return (
      <div>
        <Title toBack={false} title="Tablero" subTitle="Cuadrilla para diligenciar tu hoja de vida" />
        <div className="container-page">
          {
            CardsDashboars.map(
              (card, index) => (
                <Cards key={index} 
                title={card.title} 
                description={card.description} 
                icon={card.icon}
                url={card.url}/>
              )
            )
          }
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

export default DashboardPage;