import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Context from "../context/Context";

import HistoricStyle from "../styles/HistoricStyle";

import "../styles/Calendar.css";

const Historic = () => {
    const [historicHabits, setHistoricHabits] = useState([]);

    const { token } = useContext(Context);

    const navigate = useNavigate();

    async function getHistoricHabits() {
        try {
            let request = await axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });
            setHistoricHabits(request.data);
        } catch (_) {
            if (token !== null) {
                localStorage.removeItem(window.btoa("image"));
                localStorage.removeItem(window.btoa("token"));
            }
            navigate("/");
        }
    }

    function formatDay(day) {
        let hasDay = false;
        let isComplete = false;
        historicHabits.forEach(hH => {
            if (hH.day === day.date.toLocaleString().slice(0, 10)) hasDay = true;
            if (hasDay) if (hH.habits.filter(habit => habit.done).length === hH.habits.length) isComplete = true;
        });
        return hasDay ? isComplete ? "complete" : "incomplete" : "normal";
    }

    function canViewDayHabits(value) {
        let dayHabit = {};
        historicHabits.forEach(hH => {
            if (hH.day === value.toLocaleString().slice(0, 10)) dayHabit = hH;
        });
        if (JSON.stringify(dayHabit) !== JSON.stringify({})) navigate("/habitos-dia", {
            state: dayHabit
        });
    }

    useEffect(() => {
        getHistoricHabits();
    }, []);

    if (token === null) return (<Navigate to="/"></Navigate>);

    return (
        <HistoricStyle.HistoricDiv>
            <HistoricStyle.HistoricTitle>Histórico</HistoricStyle.HistoricTitle>
            <HistoricStyle.HistoricCalendar data-test="calendar" tileClassName={formatDay} onClickDay={canViewDayHabits}></HistoricStyle.HistoricCalendar>
        </HistoricStyle.HistoricDiv>
    );
};

export default Historic;