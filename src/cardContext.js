import { createContext, useReducer } from "react"
import cardReducer from "./cardReducer"


const data = JSON.parse(localStorage.getItem("cartData"))


const INITIAL_STATE = {
    itemlist: data === null ? [] : data.itemlist,
    total: data === null ? 0 : data.total
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