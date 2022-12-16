import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginStyle = {
    LoginDiv: styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,
    TrackItLogoDiv: styled.div`
        text-align: center;
    `,
    TrackItLogo: styled.img`
        width: 60%;
        margin-bottom: 30px;
    `,
    InputsDiv: styled.div`
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    `,
    Input: styled.input`
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 16px;
        padding-right: 16px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #9A9A9A;

        &:focus {
            outline: none;
        }
    `,
    LoginButton: styled.button`
        background: #52B6FF;
        border-radius: 5px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        color: #FFFFFF;
        cursor: pointer;
        border: none;

        &:hover {
            background: #3094DD;
        }
    `,
    ErrorText: styled.p`
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #CC2020;
        margin-top: 10px;
    `,
    ForgottenDiv: styled.div`
        margin-top: 40px;
    `,
    ForgottenLink: styled(Link)`
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        text-decoration-line: underline;
        color: #52B6FF;

        &:hover {
            text-decoration-line: none;
            color: #3094DD;
        }
    `,
};

export default LoginStyle;