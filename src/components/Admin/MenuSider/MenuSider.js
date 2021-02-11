import React from "react";
import "./MenuSider.scss";
import { Link } from "react-router-dom";

const MenuSider = (props) =>{
    const {menuCollapsed, setMenuCollapsed} = props;


    return(
        <div className="divSider" collapsed={menuCollapsed}> 
        
            <div className="divSider_body" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                <div>
                     <i className={`fas fa-arrow-${menuCollapsed ? 'right': 'left'}`}></i>
                </div>            
            </div>  
            
            <Link className="divSider_body" to={"/admin"}>
                <div>
                    <i className="fas fa-home"></i>
                </div>

                <div className="aux">
                    Home
                </div>
            </Link>

            
           <Link className="divSider_body" to={"/admin/coca"}>
                <div>
                    <i className="fas fa-bars"></i>
                </div>

                <div className="aux2">
                    Menu Web
                </div>
            </Link>
           
        </div>   
    )
}


export default MenuSider;