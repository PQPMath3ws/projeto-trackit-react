import { useContext } from "react";

import Context from "./Context";

const Provider = ({ children }) => {
    const context = useContext(Context);

    return (
        <Context.Provider value={{
            image: context.image,
            token: context.token,
        }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;