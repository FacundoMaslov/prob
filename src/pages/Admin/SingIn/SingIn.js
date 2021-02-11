import React from "react";
import "./SingIn.scss";
import {Redirect} from "react-router-dom";
import Logo from "../../../assets/Logo1.png"
import { Button } from "antd";
import RegisterForm from "../../../components/Admin/RegisterForm/RegisterForm";

const SignIn = () =>{
    return (
        <div>
            <h1>Estamos en SingIn</h1>
            <Button>Entrar</Button>
        </div>
    )

}

export default SignIn;
