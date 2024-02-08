const useReducer = (state, action) => {

    switch (action.type) {
        case "ADD_USER":
            return {
                username: action.paylod.username,
                password: action.payload.password,
            }
        default: return state
    }




}