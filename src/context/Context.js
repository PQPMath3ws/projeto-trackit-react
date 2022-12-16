import { createContext } from "react";

const Context = createContext({
    id: null,
    image: null,
    name: null,
    token: null,
});

export default Context;