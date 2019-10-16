import React from "react";
import { Layout, Menu, Icon, Button, Badge, Avatar } from "antd";

const { Header } = Layout;

let Hdash = (props) => {
    let {onCollapsed, collapsed } = props;
    return (
        <Header className="header">
            <div className="menu-buttom">
                <Button 
                    type="link" 
                    shape="circle" 
                    icon={collapsed}
                    onClick={onCollapsed}
                />
                <Button 
                    type="primary" 
                    shape="circle"
                    icon="solution"
                />                
                <Button 
                    type="primary" 
                    shape="circle"
                    icon="profile"
                />
                <Button 
                    type="primary" 
                    shape="circle"
                    icon="message"
                />
            </div>
            
            <div className="menu-avartar">
                <Button 
                    type="primary" 
                    shape="circle"
                    icon="notification"
                />
                <Badge count={1}>
                    <Avatar size={32} icon="user" />
                </Badge>
            </div>
        </Header>
    );
}

export default Hdash;