import { useContext } from "react";
import { Navigate } from "react-router-dom";

import Context from "../context/Context";

import ApplicationStyle from "../styles/ApplicationStyle";

const Application = ({ children }) => {
    const { image } = useContext(Context);

    if (image === null) return (<Navigate to="/"></Navigate>);

    return (
        <ApplicationStyle.ApplicationDiv>
            <ApplicationStyle.HeaderApplicationDiv>
                <ApplicationStyle.HeaderTrackItText>TrackIt</ApplicationStyle.HeaderTrackItText>
                <ApplicationStyle.HeaderUserImage src={image}></ApplicationStyle.HeaderUserImage>
            </ApplicationStyle.HeaderApplicationDiv>
            <ApplicationStyle.ApplicationContent>
                {children}
            </ApplicationStyle.ApplicationContent>
            <ApplicationStyle.FooterApplicationDiv>
                <ApplicationStyle.FooterLink to="/habitos">Hábitos</ApplicationStyle.FooterLink>
                <ApplicationStyle.FooterDayDiv>
                    <ApplicationStyle.FooterDayIncompleteCircle></ApplicationStyle.FooterDayIncompleteCircle>
                    <ApplicationStyle.FooterDayLink to="/hoje">Hoje</ApplicationStyle.FooterDayLink>
                </ApplicationStyle.FooterDayDiv>
                <ApplicationStyle.FooterLink to="/historico">Histórico</ApplicationStyle.FooterLink>
            </ApplicationStyle.FooterApplicationDiv>
        </ApplicationStyle.ApplicationDiv>
    );
};

export default Application;