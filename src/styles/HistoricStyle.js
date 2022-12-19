import Calendar from "react-calendar";
import styled from "styled-components";

const HistoricStyle = {
    HistoricDiv: styled.div`
        margin-top: 20px;
        width: 94%;
        margin-left: 3%;
        margin-right: 3%;
        padding-bottom: 16px;
    `,
    HistoricTitle: styled.p`
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    `,
    HistoricCalendar: styled(Calendar)`
        margin-top: 20px;
    `,
};

export default HistoricStyle;