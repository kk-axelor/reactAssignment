import { json } from "react-router-dom";

export const order = (order) => {

    if (order) {
        return < i class="ri-arrow-up-line" ></i >
    }
    else {
        return <i class="ri-arrow-down-line"></i>
    }

}


export const saveCartToLocalStorage = (state) => {
    localStorage.setItem("cartData", JSON.stringify(state));
    return state;
}