import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Context from "../context/Context";

import HistoricStyle from "../styles/HistoricStyle";

const Historic = () => {
    const { token } = useContext(Context);

    const navigate = useNavigate();

    if (token === null) return (<Navigate to="/"></Navigate>);

    return (
        <HistoricStyle.HistoricDiv>
            <HistoricStyle.HistoricTitle>Histórico</HistoricStyle.HistoricTitle>
            <HistoricStyle.SoonText>Em breve você poderá ver o histórico dos seus hábitos aqui!</HistoricStyle.SoonText>
        </HistoricStyle.HistoricDiv>
    );
};

export default Historic;