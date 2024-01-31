import { createContext, useReducer } from "react"
import cardReducer from "./cardReducer"

const INITIAL_STATE = {
    itemlist: [],
    total: 0
}

export const CardContext = createContext(INITIAL_STATE)

export const CardContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cardReducer, INITIAL_STATE);

    return (
        <CardContext.Provider value={{
            itemlist: state.itemlist,
            total: state.total,
            dispatch
        }}>
            {children}
        </CardContext.Provider>
    )
}