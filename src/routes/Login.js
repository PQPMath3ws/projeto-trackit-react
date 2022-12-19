import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate, Navigate } from "react-router-dom";

import Context from "../context/Context";

import logo from "../images/logo.png";

import LoginStyle from "../styles/LoginStyle";

const Login = () => {
    const [inputsAndButtonsDisabled, setInputsAndButtonsDisabled] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [isLoginError, setIsLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const validateEmail = () => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailValue);

    const navigate = useNavigate();

    const context = useContext(Context);

    async function logIn() {
        setIsLoginError(false);
        if (emailValue && passwordValue) {
            if (validateEmail()) {
                setInputsAndButtonsDisabled(true);
                try {
                    let request = await axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
                        email: emailValue,
                        password: passwordValue,
                    }, {
                        "Content-Type": "application/json",
                    });
                    let json = JSON.parse(request.request.response);
                    context.image = json.image;
                    context.token = json.token;
                    localStorage.setItem(window.btoa("image"), window.btoa(json.image));
                    localStorage.setItem(window.btoa("token"), window.btoa(json.token));
                    navigate("/hoje");
                } catch (error) {
                    if (error.response.status === 422) {
                        setErrorMessage("Insira um email válido para entrar.");
                    } else {
                        setErrorMessage(error.response.data.message);
                    }
                    setIsLoginError(true);
                }
                setInputsAndButtonsDisabled(false);
            }
            else {
                setErrorMessage("Insira um email válido para continuar.");
                setIsLoginError(true);
            }
        } else {
            setErrorMessage("Preencha as informações de login para continuar.");
            setIsLoginError(true);
        }
    }

    const [image, token] = [localStorage.getItem(window.btoa("image")), localStorage.getItem(window.btoa("token"))];

    if (image !== null && token !== null) {
        context.image = window.atob(image);
        context.token = window.atob(token);
        return (<Navigate to="/hoje"></Navigate>);
    }

    return (
        <LoginStyle.LoginDiv>
            <LoginStyle.TrackItLogoDiv>
                <LoginStyle.TrackItLogo src={logo}></LoginStyle.TrackItLogo>
            </LoginStyle.TrackItLogoDiv>
            <LoginStyle.InputsDiv>
                <LoginStyle.Input data-test="email-input" disabled={inputsAndButtonsDisabled} onChange={(input) => setEmailValue(input.target.value.replaceAll(" ", ""))} placeholder="email" type="email" value={emailValue}></LoginStyle.Input>
                <LoginStyle.Input data-test="password-input" disabled={inputsAndButtonsDisabled} onChange={(input) => setPasswordValue(input.target.value)} placeholder="senha" type="password" value={passwordValue}></LoginStyle.Input>
                <LoginStyle.LoginButton data-test="login-btn" disabled={inputsAndButtonsDisabled} onClick={logIn}>
                    {inputsAndButtonsDisabled ? <ThreeDots ariaLabel="three-dots-loading" color="#FFFFFF" height="50" radius="9" visible={true} width="50">
                    </ThreeDots> : "Entrar"}
                </LoginStyle.LoginButton>
                {isLoginError ? <LoginStyle.ErrorText>
                    {errorMessage}
                </LoginStyle.ErrorText> : null}
            </LoginStyle.InputsDiv>
            <LoginStyle.ForgottenDiv>
                <LoginStyle.ForgottenLink data-test="signup-link" to="/cadastro">
                    Não tem uma conta? Cadastre-se!
                </LoginStyle.ForgottenLink>
            </LoginStyle.ForgottenDiv>
        </LoginStyle.LoginDiv>
    )
};

export default Login;