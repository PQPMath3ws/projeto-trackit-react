import axios from "axios";
import { useContext } from "react";
import { Checkmark } from "react-ionicons";
import { Navigate } from "react-router-dom";

import Context from "../context/Context";

import TodayStyle from "../styles/TodayStyle";

const Today = ({ todayHabits, getTodayHabits }) => {
    const { token } = useContext(Context);

    const day = new Date();

    const days = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado"
    ];

    async function changeHabitState(id, done) {
        try {
            let url = done ? `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck` : `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
            await axios.post(url, {}, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });
            await getTodayHabits();
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    if (token === null) return (<Navigate to="/"></Navigate>);

    return (
        <TodayStyle.TodayDiv>
            <TodayStyle.DayTitle data-test="today">{days[day.getDay()]}, {day.getDate()}/{day.getMonth() + 1}</TodayStyle.DayTitle>
            <TodayStyle.TotalHabitsCompleteText data-test="today-counter" value={todayHabits.length > 0 ? todayHabits.filter(todayHabit => todayHabit.done).length : 1}>
                {todayHabits.length > 0 ? todayHabits.filter(todayHabit => todayHabit.done).length > 0 ? `${parseInt((todayHabits.filter(todayHabit => todayHabit.done).length / todayHabits.length) * 100)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda" : "100% dos hábitos concluídos"}
            </TodayStyle.TotalHabitsCompleteText>
            <TodayStyle.TodayHabitsDiv>
                {todayHabits.map(todayHabit => <TodayStyle.TodayHabitDiv data-test="today-habit-container" key={"habit_id_" + todayHabit.id}>
                    <TodayStyle.HabitNameText data-test="today-habit-name">{todayHabit.name}</TodayStyle.HabitNameText>
                    <TodayStyle.HabitDescriptionText data-test="today-habit-sequence">Sequência atual: {todayHabit.currentSequence} dias</TodayStyle.HabitDescriptionText>
                    <TodayStyle.HabitDescriptionText data-test="today-habit-record">Seu recorde: {todayHabit.highestSequence} dias</TodayStyle.HabitDescriptionText>
                    <TodayStyle.HabitStatusDiv data-test="today-habit-check-btn" done={todayHabit.done} onClick={() => changeHabitState(todayHabit.id, todayHabit.done)}>
                        <Checkmark width="50px" height="50px" color="#FFFFFF"></Checkmark>
                    </TodayStyle.HabitStatusDiv>
                </TodayStyle.TodayHabitDiv>)}
            </TodayStyle.TodayHabitsDiv>
        </TodayStyle.TodayDiv>
    );
};

export default Today;