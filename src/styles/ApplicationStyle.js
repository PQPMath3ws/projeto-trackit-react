import { Link } from "react-router-dom";
import styled from "styled-components";

const ApplicationStyle = {
    ApplicationDiv: styled.div`
        width: 100%;
        height: 100%;
    `,
    HeaderApplicationDiv: styled.div`
        width: 100%;
        height: 70px;
        background-color: #126BA5;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    HeaderTrackItText: styled.p`
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 39px;
        color: #FFFFFF;
        margin-left: 18px;
    `,
    HeaderUserImage: styled.img`
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        object-fit: cover;
        margin-right: 18px;
    `,
    ApplicationContent: styled.div`
        position: absolute;
        top: 70px;
        width: 100%;
        height: calc(100% - 140px);
        overflow-y: scroll;
        background-color: #E5E5E5;
    `,
    FooterApplicationDiv: styled.div`
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #FFFFFF;
    `,
    FooterLink: styled(Link)`
        text-decoration-line: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #52B6FF;
        ${props => props.to === "/habitos" ? "margin-left: 36px;" : "margin-right: 36px;"}
    `,
    FooterDayDiv: styled.div`
        position: relative;
        width: 91px;
        height: 91px;
        background-color: #52B6FF;
        border-radius: 50%;
        margin-bottom: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    FooterDayIncompleteCircle: styled.div`
        width: 76px;
        height: 76px;
        border: 2px solid #FFFFFF;
        border-radius: 50%;
    `,
    FooterDayText: styled.p`
        position: absolute;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
    `,
};

export default ApplicationStyle;