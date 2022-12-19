import styled from "styled-components";

const DayHabitsStyle = {
    DayHabitDiv: styled.div`
        margin-top: 20px;
        width: 94%;
        margin-left: 3%;
        margin-right: 3%;
        padding-bottom: 16px;
    `,
    DayTitle: styled.p`
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    `,
    TotalHabitsCompleteText: styled.p`
        margin-top: 10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: ${props => props.value === 0 ? "#BABABA" : "#8FC549"};
    `,
    InDayHabitsDiv: styled.div`
        width: 100%;
        margin-top: 20px;
    `,
    InDayHabitDiv: styled.div`
        position: relative;
        border-radius: 5px;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #FFFFFF;
        margin-top: 18px;
    `,
    HabitNameText: styled.p`
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
        padding-left: 14px;
    `,
    HabitStatusDiv: styled.div`
        position: absolute;
        top: 10px;
        right: 14px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: ${props => props.done ? "#8FC549" : "#D12222"};
        border-radius: 5px;
    `,
};

export default DayHabitsStyle;