
import { isMobile } from "react-device-detect";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    body {
        ${!isMobile ? "padding-top: 80px;" : ""}
        ${!isMobile ? "padding-bottom: 750px;" : ""}
        width: 100%;
        height: 100%;
    }
`;

export default Global;