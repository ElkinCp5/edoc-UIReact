import React from "react";
import { Button, Icon} from "antd";


let Sdash = (props) => {
    let {title, subTitle, toBack } = props;
    return (
        <div className="page-header">
            <div className="header-heading">
                { toBack ? 
                    <div className="header-back">
                        <Button type="link" shape="circle"  icon={"search"}/>
                    </div>: ''
                }
                
                <h1 className="header-title">{title}</h1>
                <span className="header-sub-title">{subTitle}</span>
            </div>
        </div>
    );
}

export default Sdash;

