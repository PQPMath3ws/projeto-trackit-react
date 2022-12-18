import styled from "styled-components";

const TodayStyle = {
    TodayDiv: styled.div`
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
    TodayHabitsDiv: styled.div`
        width: 100%;
        margin-top: 20px;
    `,
    TodayHabitDiv: styled.div`
        position: relative;
        border-radius: 5px;
        width: 100%;
        background-color: #FFFFFF;
        margin-top: 18px;
        padding-bottom: 20px;
    `,
    HabitNameText: styled.p`
        padding-top: 16px;
        margin-left: 14px;
        margin-right: 14px;
        padding-bottom: 16px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
    `,
    HabitDescriptionText: styled.p`
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #666666;
        margin-top: 6px;
        margin-left: 14px;
        margin-right: 14px;
    `,
    HabitStatusDiv: styled.div`
        position: absolute;
        top: 13px;
        right: 13px;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        ${props => props.done ? "border: none;" : "border: 1px solid #E7E7E7;"}
        background-color: ${props => props.done ? "#8FC549" : "#EBEBEB"};
        border-radius: 5px;
        cursor: pointer;
    `,
};

export default TodayStyle;