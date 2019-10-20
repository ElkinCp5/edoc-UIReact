import React from "react";
import { Layout, Menu, Button, Icon} from "antd";
import "./sider.css";

let { Sider } = Layout;

let Sdash = (props) => {
    let {logoName, logoE, onCollapsed, collapsed } = props;

    return (
        <Sider className=".animation" trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">
              <img src={logoName} className={"animation"}/>
              <img src={logoE} className={"animation"}/>
            </div>
            <Button className="close-sider"
                type="link" 
                shape="circle" 
                icon={"close-circle"}
                onClick={onCollapsed}
            />
            <Menu  mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Icon type="profile" />
                    <span>Tablero</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="solution" />
                    <span>Formato de Cv</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="user" />
                    <span>Perfil</span>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default Sdash;

