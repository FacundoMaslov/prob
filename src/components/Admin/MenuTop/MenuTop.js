import { Button } from "antd";
import React from "react";
import logo1 from "../../../assets/Logo1.png"
import "./MenuTop.scss";

const MenuTop = (props) =>{
    return (

        <div className="div_MenuTop">
            
            <div className="div_MenuTop_body">
                <img src={logo1} />
            </div>

            <div className="div_MenuTop_body">
                FEDORA 
            </div>

            <div className="div_MenuTop_body">
                    <i className="far fa-address-card"></i>
            </div>
            

        </div>

    )
}

export default MenuTop;