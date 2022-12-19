import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Context from "../context/Context";

import HabitsStyle from "../styles/HabitsStyle";

const Habits = ({ getTodayHabits }) => {
    const [inputsAndButtonsDisabled, setInputsAndButtonsDisabled] = useState(false);
    const [habits, setHabits] = useState([]);
    const [canShowAddHabits, setCanShowAddHabits] = useState(false);
    const [habitName, setHabitName] = useState("");
    const [buttonsSelectedStates, setButtonsSelectedStates] = useState(new Array(7).fill(false));

    const { token } = useContext(Context);

    const navigate = useNavigate();

    const buttonsDays = [
        {day: "D", index: 0},
        {day: "S", index: 1},
        {day: "T", index: 2},
        {day: "Q", index: 3},
        {day: "Q", index: 4},
        {day: "S", index: 5},
        {day: "S", index: 6},
    ];

    async function getHabits() {
        try {
            let request = await axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });
            setHabits(request.data);
            await getTodayHabits();
        } catch (_) {
            if (token !== null) {
                localStorage.removeItem(window.btoa("image"));
                localStorage.removeItem(window.btoa("token"));
            }
            navigate("/");
        }
    }

    async function sendHabit() {
        setInputsAndButtonsDisabled(true);
        try {
            let days = [...buttonsSelectedStates].map((day, index) => ({day: index, state: day})).filter(day => day.state).map(day => day.day);
            let result = await axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
                name: habitName,
                days,
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            let json = JSON.parse(result.request.response);
            let newHabits = [...habits];
            newHabits.push(json);
            setHabits(newHabits);
            cancelHabitsClick();
            setHabitName("");
            setButtonsSelectedStates(new Array(7).fill(false));
            await getTodayHabits();

        } catch (error) {
            alert(error.response.data.message);
        }
        setInputsAndButtonsDisabled(false);
    }

    function addHabitsClick() {
        setCanShowAddHabits(false);
        setCanShowAddHabits(true);
    }

    function changeButtonIndexValue(index) {
        let states = [...buttonsSelectedStates];
        states[index] = !states[index];
        setButtonsSelectedStates(states);
    }

    function cancelHabitsClick() {
        setCanShowAddHabits(false);
    }

    async function removeHabit(id) {
        if (window.confirm("Deseja realmente remover esse hábito?")) {
            try {
                await axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                await getHabits();
                await getTodayHabits();
            } catch (error) {
                alert(error.response.data.message);
            }
        }
    }

    useEffect(() => {
        getHabits();
    }, []);

    if (token === null) return (<Navigate to="/"></Navigate>);

    return (
        <HabitsStyle.HabitsDiv>
            <HabitsStyle.AddHabitsDiv>
                <HabitsStyle.MyHabitsText>Meus hábitos</HabitsStyle.MyHabitsText>
                <HabitsStyle.AddHabitsButton data-test="habit-create-btn" onClick={addHabitsClick}>+</HabitsStyle.AddHabitsButton>
            </HabitsStyle.AddHabitsDiv>
            {canShowAddHabits ? <HabitsStyle.AddHabitDiv data-test="habit-create-container">
                <HabitsStyle.HabitNameInputDiv>
                    <HabitsStyle.HabitNameInput data-test="habit-name-input" disabled={inputsAndButtonsDisabled} onChange={(input) => setHabitName(input.target.value)} placeholder="Nome do hábito" value={habitName}></HabitsStyle.HabitNameInput>
                </HabitsStyle.HabitNameInputDiv>
                <HabitsStyle.DaysButtonDiv>
                    {buttonsDays.map(day => <HabitsStyle.DayButton data-test="habit-day" disabled={inputsAndButtonsDisabled} key={"buttons_id_" + day.index} selected={buttonsSelectedStates[day.index]} onClick={() => changeButtonIndexValue(day.index)}>
                        {day.day}
                    </HabitsStyle.DayButton>)}
                </HabitsStyle.DaysButtonDiv>
                <HabitsStyle.AddHabitsActionsDiv>
                    <HabitsStyle.CancelAddHabitButton data-test="habit-create-cancel-btn" disabled={inputsAndButtonsDisabled} onClick={cancelHabitsClick}>Cancelar</HabitsStyle.CancelAddHabitButton>
                    <HabitsStyle.SaveAddHabitButton data-test="habit-create-save-btn" disabled={inputsAndButtonsDisabled} onClick={sendHabit}>Salvar</HabitsStyle.SaveAddHabitButton>
                </HabitsStyle.AddHabitsActionsDiv>
            </HabitsStyle.AddHabitDiv> : null}
            <HabitsStyle.ListHabitsDiv>
                {habits.length === 0 ? <HabitsStyle.NoHabitsFoundText>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </HabitsStyle.NoHabitsFoundText> : habits.map((habit, index) => <HabitsStyle.HabitDiv data-test="habit-container" key={"habits_id_" + index}>
                    <HabitsStyle.HabitNameText data-test="habit-name">{habit.name}</HabitsStyle.HabitNameText>
                    <HabitsStyle.DaysHabitsDiv>
                        {buttonsDays.map((day, index) => <HabitsStyle.DayHabitDiv data-test="habit-day" selected={habit.days.includes(index)} key={"days_key_" + day.index}>
                            <HabitsStyle.DayHabitText selected={habit.days.includes(index)}>{day.day}</HabitsStyle.DayHabitText>
                        </HabitsStyle.DayHabitDiv>)}
                    </HabitsStyle.DaysHabitsDiv>
                    <HabitsStyle.DayHabitRemoveButton data-test="habit-delete-btn" onClick={() => removeHabit(habit.id)}>
                        <HabitsStyle.TrashIcon></HabitsStyle.TrashIcon>
                    </HabitsStyle.DayHabitRemoveButton>
                </HabitsStyle.HabitDiv>)}
            </HabitsStyle.ListHabitsDiv>
        </HabitsStyle.HabitsDiv>
    )
};

export default Habits;