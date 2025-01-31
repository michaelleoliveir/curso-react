import { createContext, useReducer } from "react";

export const TitleContext = createContext();

export const titleReducer = (state, action) => {
    switch(action.type) {
        case "RED":
            return {... state, color: "red"};
        case "BLUE":
            return {... state, color: "blue"};
        default:
            return state
    }
}

export const TitleContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleReducer, { color: "#646cff" });

    return (
        <TitleContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TitleContext.Provider>
    )
}