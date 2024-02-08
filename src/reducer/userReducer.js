const userReducer = (state, action) => {

    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                user: {
                    username: action.paylod.username,
                    password: action.paylod.password,
                }
            }
        case "REMOVE_USER":
            return {
                ...state,
                user: null
            }


        default: return state;
    }




}
export default userReducer;