import React, {useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import "./LayoutAdmin.scss";
import MenuTop from "../components/Admin/MenuTop/MenuTop";
import MenuSider from "../components/Admin/MenuSider/MenuSider";
import AdminSingIn from "../pages/Admin/SingIn/SingIn";

const LayoutAdmin = (props) =>{
    const {routes} = props;
    const [menuCollapsed, setMenuCollapsed] = useState(true);

    const user = null;

    if(!user){
        return(
            <>
                <Route path="/admin/login" component={AdminSingIn} />
                <Redirect to="admin/login" />
            </>
        )      
    }

return(
    <div className="divLayoutAdmin">
        
        <div className="divLayoutAdmin_body">
            <MenuTop/>
        </div>

        <div className="divLayoutAdmin_body">
            <MenuSider menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
        </div>
        
        <div className="divLayoutAdmin_body">
            <div><LoadRoutes routes={routes} /></div>
            <div>Footer</div>
        </div>
    </div>);
}


function LoadRoutes({routes}){

    return (        
    
        <Switch>
                {routes.map((route, index) =>(
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
            ))}
        </Switch>
    );
}

export default LayoutAdmin;