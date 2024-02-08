import { createContext, useReducer } from "react";


const INITIAL_STATE = {
    user: "jukfj"
}
export const userContext = createContext(INITIAL_STATE)


export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(useReducer, INITIAL_STATE);

    return <userContext.Provider value={{
        user: state.INITIAL_STATE,
        dispatch
    }}>
        {children}
    </userContext.Provider>
}
