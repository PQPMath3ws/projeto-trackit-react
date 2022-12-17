import { TrashOutline } from "react-ionicons";
import styled from "styled-components";

const HabitsStyle = {
    HabitsDiv: styled.div`
        margin-top: 16px;
        width: 94%;
        margin-left: 3%;
        margin-right: 3%;
        padding-bottom: 16px;
    `,
    AddHabitsDiv: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    MyHabitsText: styled.p`
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    `,
    AddHabitsButton: styled.button`
        border: none;
        background-color: #52B6FF;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 27px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        cursor: pointer;
    `,
    ListHabitsDiv: styled.div`
        width: 100%;
        margin-top: 20px;
    `,
    AddHabitDiv: styled.div`
        border-radius: 5px;
        width: 100%;
        background-color: #FFFFFF;
        margin-top: 14px;
    `,
    HabitNameInputDiv: styled.div`
        width: 96%;
        margin-left: 2%;
        margin-right: 2%;
        padding-top: 14px;
    `,
    HabitNameInput: styled.input`
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #9A9A9A;
        padding: 6px 16px 6px 16px;

        &:focus {
            outline: none;
        }
    `,
    DaysButtonDiv: styled.div`
        width: 96%;
        margin-left: 2%;
        margin-right: 2%;
        padding-top: 14px;
        display: flex;
        gap: 2%;
    `,
    DayButton: styled.div`
        min-width: 48px;
        max-width: 48px;
        min-height: 48px;
        max-height: 48px;
        background-color: ${props => props.selected ? "#CFCFCF" : "#FFFFFF"};
        border: 1px solid ${props => props.selected ? "#CFCFCF" : "#D5D5D5"};
        border-radius: 5px;
        cursor: pointer;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: ${props => props.selected ? "#FFFFFF" : "#9A9A9A"};
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    AddHabitsActionsDiv: styled.div`
        margin-top: 20px;
        padding-bottom: 16px;
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
        gap: 3%;
    `,
    CancelAddHabitButton: styled.button`
        border: none;
        background-color: #FFFFFF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #52B6FF;
        padding: 8px 14px 8px 14px;
        cursor: pointer;
    `,
    SaveAddHabitButton: styled.button`
        border: none;
        background-color: #52B6FF;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        padding: 8px 14px 8px 14px;
        cursor: pointer;
    `,
    NoHabitsFoundText: styled.p`
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #666666;
    `,
    HabitDiv: styled.div`
        position: relative;
        border-radius: 5px;
        width: 100%;
        background-color: #FFFFFF;
        margin-top: 14px;
    `,
    HabitNameText: styled.p`
        padding-top: 16px;
        margin-left: 14px;
        margin-right: 14px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
    `,
    DaysHabitsDiv: styled.div`
        margin-left: 12px;
        margin-right: 12px;
        margin-top: 16px;
        padding-bottom: 16px;
        display: flex;
        gap: 1%;
    `,
    DayHabitDiv: styled.div`
        min-width: 48px;
        max-width: 48px;
        min-height: 48px;
        max-height: 48px;
        background-color: ${props => props.selected ? "#CFCFCF" : "#FFFFFF"};
        border: 1px solid ${props => props.selected ? "#CFCFCF" : "#D5D5D5"};
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    DayHabitText: styled.p`
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: ${props => props.selected ? "#FFFFFF" : "#9A9A9A"};
    `,
    DayHabitRemoveButton: styled.button`
        position: absolute;
        top: 10px;
        right: 10px;
        border: none;
        background-color: #FFFFFF;
        cursor: pointer;
    `,
    TrashIcon: styled(TrashOutline)`
        color: #FFFFFF;
    `,
};

export default HabitsStyle;