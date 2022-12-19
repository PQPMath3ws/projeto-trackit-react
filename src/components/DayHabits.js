import { Checkmark, Close } from "react-ionicons";
import { useLocation, Navigate } from "react-router-dom";

import DayHabitsStyle from "../styles/DayHabitsStyle";

const DayHabits = () => {
    const location = useLocation();

    const { state } = location;

    if (state === null) return (<Navigate to="/"></Navigate>);

    const day = new Date(state.day.split("/").reverse().join("/"));

    const days = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado"
    ];

    return (
        <DayHabitsStyle.DayHabitDiv>
            <DayHabitsStyle.DayTitle>{days[day.getDay()]}, {day.getDate()}/{day.getMonth() + 1}</DayHabitsStyle.DayTitle>
            <DayHabitsStyle.TotalHabitsCompleteText value={state.habits.length > 0 ? state.habits.filter(todayHabit => todayHabit.done).length : 1}>
                {state.habits.length > 0 ? state.habits.filter(todayHabit => todayHabit.done).length > 0 ? `${parseInt((state.habits.filter(todayHabit => todayHabit.done).length / state.habits.length) * 100)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda" : "100% dos hábitos concluídos"}
            </DayHabitsStyle.TotalHabitsCompleteText>
            <DayHabitsStyle.InDayHabitsDiv>
                {state.habits.map(todayHabit => <DayHabitsStyle.InDayHabitDiv key={"habit_id_" + todayHabit.id}>
                    <DayHabitsStyle.HabitNameText>{todayHabit.name}</DayHabitsStyle.HabitNameText>
                    <DayHabitsStyle.HabitStatusDiv done={todayHabit.done}>
                        {todayHabit.done ? <Checkmark width="30px" height="30px" color="#FFFFFF"></Checkmark> : <Close width="30px" height="30px" color="#FFFFFF"></Close>}
                    </DayHabitsStyle.HabitStatusDiv>
                </DayHabitsStyle.InDayHabitDiv>)}
            </DayHabitsStyle.InDayHabitsDiv>
        </DayHabitsStyle.DayHabitDiv>
    );
};

export default DayHabits;