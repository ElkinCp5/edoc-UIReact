import React from "react";
import { Layout, Menu, Icon } from "antd";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
/* var global system */
import { Helper } from '../../../../utils';
import "./layoutStandar.css";

/* Import Custom Components */

let { RouteWithSubRoutes } = Helper;
let { Header, Content, Sider} = Layout;



class standarLayout extends React.Component {
  componentDidMount() {

  }
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isMobile: false
    };

  }


  render() {
    let { className, location, routes, children } = this.props;

    return (
    <Layout className={className}>
        <Content>
            {children}
        </Content>
    </Layout>
    );
  }
}
export default withRouter(standarLayout);
