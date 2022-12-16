import Context from "./Context";

const Provider = ({ children }) => (
    <Context.Provider>
        {children}
    </Context.Provider>
);

export default Provider;