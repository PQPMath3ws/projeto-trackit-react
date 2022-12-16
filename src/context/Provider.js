import { useContext } from "react";

import Context from "./Context";

const Provider = ({ children }) => {
    const context = useContext(Context);

    return (
        <Context.Provider value={{
            id: context.id,
            image: context.image,
            name: context.name,
            token: context.token,
        }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;