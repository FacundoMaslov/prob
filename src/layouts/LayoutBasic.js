import React from "react";
import "./LayoutBasic.scss"
import { Route, Switch } from "react-router-dom";

const LayoutBasic = (props) =>{
    const {routes} = props;

    return(
        <div>
            <div>Titulo2</div>
            <div><LoadRoutes routes={routes} /></div>
            <div>Footer</div>
        </div>
        
    )
}

function LoadRoutes({routes}){

    return (
        <Switch>
            {routes.map((route, index)=>(
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

export default LayoutBasic;