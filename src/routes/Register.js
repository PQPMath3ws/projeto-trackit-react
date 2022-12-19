import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import logo from "../images/logo.png";

import RegisterStyle from "../styles/RegisterStyle";

const Register = () => {
    const [inputsAndButtonsDisabled, setInputsAndButtonsDisabled] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [photoValue, setPhotoValue] = useState("");
    const [messageStatus, setMessageStatus] = useState("");
    const [messageMessage, setMessageMessage] = useState("");

    const validateEmail = () => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailValue);

    const validateImage = () => {
        try {
            if (photoValue.match(/\.(jpeg|jpg|png)$/) !== null) return true;
            return false;
        } catch (_) {
            return false;
        }
    }

    const navigate = useNavigate();

    async function register() {
        setMessageStatus("");
        if (emailValue && passwordValue && nameValue && photoValue) {
            if (validateEmail()) {
                if (validateImage()) {
                    setInputsAndButtonsDisabled(true);
                    try {
                        await axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
                            email: emailValue,
                            password: passwordValue,
                            name: nameValue,
                            image: photoValue,
                        }, {
                            "Content-Type": "application/json",
                        });
                        setMessageStatus("success");
                        setMessageMessage("Usuário criado com sucesso. - Faça o login para entrar.");
                        setTimeout(() => {
                            navigate("/");
                        }, 3000);
                    } catch (error) {
                        if (error.response.status === 422) {
                            setMessageMessage("Insira um email válido para entrar.");
                        } else {
                            setMessageMessage(error.response.data.message);
                        }
                        setMessageStatus("error");
                        setInputsAndButtonsDisabled(false);
                    }
                } else {
                    setMessageMessage("Insira uma imagem válida para continuar.");
                    setMessageStatus("error");
                }
            } else {
                setMessageMessage("Insira um email válido para continuar.");
                setMessageStatus("error");
            }
        } else {
            setMessageMessage("Preencha as informações registro para continuar.");
            setMessageStatus("error");
        }
    }

    return (
        <RegisterStyle.RegisterDiv status={messageStatus}>
            <RegisterStyle.TrackItLogoDiv>
                <RegisterStyle.TrackItLogo src={logo}></RegisterStyle.TrackItLogo>
            </RegisterStyle.TrackItLogoDiv>
            <RegisterStyle.InputsDiv>
                <RegisterStyle.Input data-test="email-input" disabled={inputsAndButtonsDisabled} onChange={(input) => setEmailValue(input.target.value.replaceAll(" ", ""))} placeholder="email" type="email" value={emailValue}></RegisterStyle.Input>
                <RegisterStyle.Input data-test="password-input" disabled={inputsAndButtonsDisabled} onChange={(input) => setPasswordValue(input.target.value)} placeholder="senha" type="password" value={passwordValue}></RegisterStyle.Input>
                <RegisterStyle.Input data-test="user-name-input" disabled={inputsAndButtonsDisabled} onChange={(input) => setNameValue(input.target.value)} placeholder="nome" type="text" value={nameValue}></RegisterStyle.Input>
                <RegisterStyle.Input data-test="user-image-input" disabled={inputsAndButtonsDisabled} onChange={(input) => setPhotoValue(input.target.value.replaceAll(" ", ""))} placeholder="foto" type="text" value={photoValue}></RegisterStyle.Input>
                <RegisterStyle.RegisterButton data-test="signup-btn" onClick={register}>
                    {inputsAndButtonsDisabled ? <ThreeDots ariaLabel="three-dots-loading" color="#FFFFFF" height="50" radius="9" visible={true} width="50">
                    </ThreeDots> : "Registrar"}
                </RegisterStyle.RegisterButton>
                {messageStatus !== "" ? <RegisterStyle.StatusMessage status={messageStatus}>
                    {messageMessage}
                </RegisterStyle.StatusMessage> : null}
            </RegisterStyle.InputsDiv>
            <RegisterStyle.HaveAccountDiv>
                <RegisterStyle.HaveAccountLink data-test="login-link" to="/">
                    Já tem uma conta? Faça login!
                </RegisterStyle.HaveAccountLink>
            </RegisterStyle.HaveAccountDiv>
        </RegisterStyle.RegisterDiv>
    );
};

export default Register;