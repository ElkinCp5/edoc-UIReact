import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import { Helper } from '../../../../utils';
import { Layout, Menu, Icon, Breadcrumb, PageHeader } from "antd";
import { Hdashboards as Header } from "../../../../components/header";
import { ECcolor, EDcolor } from "../../../images";
import "./dashboard.css";
/* Import Custom Components */

let { RouteWithSubRoutes } = Helper;
const { SubMenu } = Menu;
let { Content, Sider} = Layout;



class dashboardLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  componentDidMount() {

  }
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isMobile: false
    };
    /*this.toggleCollapsed = this.toggleCollapsed.bind(this);*/
    /*this.bodyScroll(this.toggleCollapsed);*/
  }


  render() {
    let { className, location, routes, children } = this.props;

    return (
      <Router>
        <Layout className="dashboard">
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">
              <img src={EDcolor} className={"animation"}/>
              <img src={ECcolor} className={"animation"}/>
            </div>
            <Menu  mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header  collapsed={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onCollapsed={this.toggle} />
            <PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" />
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: 'transparent',
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
export default withRouter(dashboardLayout);
