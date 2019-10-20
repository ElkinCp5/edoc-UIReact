import React from "react";
import { Layout, Menu, Dropdown, Icon, Tooltip, Button, Badge, Avatar } from "antd";
import "./header.css"

const { Header } = Layout;
const menuUser = (
    <Menu>
        <div className="ant-tooltip-arrow"></div>
      <Menu.Item key="0">
        <a href>1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href>2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Icon type="user" />
          Cerrar Sesion
      </Menu.Item>
    </Menu>
);

let Hdash = (props) => {
    let {onCollapsed, collapsed } = props;
    let rotate = true;
    return (
        <Header className="header">
            <div className="menu-buttom">
                <Button
                    className={collapsed ? "side-collapsed-on" : 'side-collapsed-off'}
                    type="link" 
                    shape="circle" 
                    icon={ rotate ? 'arrow-left' :(collapsed ? 'arrow-right' : 'arrow-left')}
                    onClick={onCollapsed}
                />
                <div className="hidden-md"
                    style={{
                        display: "inline-block"
                    }}>
                    <Tooltip placement="bottom" title="Vacantes libres">
                        <Button 
                            type="primary" 
                            shape="circle"
                            icon="solution"
                        />
                    </Tooltip>
                    <Tooltip placement="bottom" title="Vacantes directa">          
                        <Button 
                            type="primary" 
                            shape="circle"
                            icon="profile"
                        />
                    </Tooltip> 
                    <Tooltip placement="bottom" title="Mensajes">
                        <Button 
                            type="primary" 
                            shape="circle"
                            icon="message"
                        />
                    </Tooltip>
                    
                </div>
            </div>
            
            <div className="menu-avartar">
                <Tooltip placement="bottom" title="Notificaciones">
                    <Button 
                        type="primary" 
                        shape="circle"
                        icon="bell"
                    />
                </Tooltip>
                <Badge count={1}>
                    <Dropdown className="Dropdown-header" overlay={menuUser} trigger={['click']}>
                        <Avatar size={36} icon="user" />
                    </Dropdown>
                </Badge>
            </div>
        </Header>
    );
}

export default Hdash;