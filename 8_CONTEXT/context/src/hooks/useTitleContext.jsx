import { useContext } from "react";

import { TitleContext } from "../context/TitleContext";

export const useTitleContext = () => {
    const context = useContext(TitleContext);

    if(!context) {
        console.log("Erro no context do Title");
    }

    return context;
}