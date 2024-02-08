import { createContext, useReducer } from "react";
import userReducer from "../reducer/userReducer";


const INITIAL_STATE = {
    user: null
}
export const userContext = createContext(INITIAL_STATE)


export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    return <userContext.Provider value={{
        user: state.user,
        dispatch
    }}>
        {children}
    </userContext.Provider>
}
