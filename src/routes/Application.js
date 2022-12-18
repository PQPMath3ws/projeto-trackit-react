import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Context from "../context/Context";

import ApplicationStyle from "../styles/ApplicationStyle";

const Application = ({ children }) => {
    const [todayHabits, setTodayHabits] = useState([]);

    const { image, token } = useContext(Context);

    const navigate = useNavigate();

    async function getTodayHabits() {
        try {
            let request = await axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });
            setTodayHabits(request.data);
        } catch (_) {
            localStorage.removeItem(window.btoa("id"));
            localStorage.removeItem(window.btoa("image"));
            localStorage.removeItem(window.btoa("name"));
            localStorage.removeItem(window.btoa("token"));
            navigate("/");
        }
    }

    useEffect(() => {
        getTodayHabits();
    }, []);

    if (image === null || token === null) return (<Navigate to="/"></Navigate>);

    return (
        <ApplicationStyle.ApplicationDiv>
            <ApplicationStyle.HeaderApplicationDiv>
                <ApplicationStyle.HeaderTrackItText>TrackIt</ApplicationStyle.HeaderTrackItText>
                <ApplicationStyle.HeaderUserImage src={image}></ApplicationStyle.HeaderUserImage>
            </ApplicationStyle.HeaderApplicationDiv>
            <ApplicationStyle.ApplicationContent>
                {React.cloneElement(children, {
                    todayHabits: todayHabits,
                    getTodayHabits: getTodayHabits
                })}
            </ApplicationStyle.ApplicationContent>
            <ApplicationStyle.FooterApplicationDiv>
                <ApplicationStyle.FooterLink to="/habitos">Hábitos</ApplicationStyle.FooterLink>
                <ApplicationStyle.FooterDayDiv>
                    {todayHabits.length > 0 ? <ApplicationStyle.FooterProgressCircle strokeWidth={5} styles={ApplicationStyle.FooterProgressCircleStyle} value={parseInt((todayHabits.filter(todayHabit => todayHabit.done).length / todayHabits.length) * 100)}>
                    </ApplicationStyle.FooterProgressCircle> : null}
                    <ApplicationStyle.FooterDayLink to="/hoje">Hoje</ApplicationStyle.FooterDayLink>
                </ApplicationStyle.FooterDayDiv>
                <ApplicationStyle.FooterLink to="/historico">Histórico</ApplicationStyle.FooterLink>
            </ApplicationStyle.FooterApplicationDiv>
        </ApplicationStyle.ApplicationDiv>
    );
};

export default Application;