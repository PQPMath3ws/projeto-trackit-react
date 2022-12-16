import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RegisterStyle = {
    RegisterDiv: styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        ${!isMobile ? "padding-top: 140px;" : ""}
        ${props => !isMobile ? "padding-bottom: " + (props.status === "" ? "160px;" : "180px;") : ""}
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
    RegisterButton: styled.button`
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
    StatusMessage: styled.div`
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: ${props => props.status === "error" ? "400" : "700"};
        font-size: 18px;
        color: ${props => props.status === "error" ? "#CC2020" : "#4BB543"};
        margin-top: 10px;
        text-align: center;
    `,
    HaveAccountDiv: styled.div`
        margin-top: 40px;
    `,
    HaveAccountLink: styled(Link)`
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

export default RegisterStyle;