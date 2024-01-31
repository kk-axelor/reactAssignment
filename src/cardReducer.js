const cardReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART":

            console.log("add cart method call")
            const { id, price } = action.paylod;
            state.total = state.total + price;
            const isExist = state.itemlist.find(item => item.id === id)

            if (isExist) {

                const updatedList = state.itemlist
                    .map(item => (item.id === id ?
                        { ...item, quantity: item.quantity + 1 } :
                        item))
                return { total: state.total, itemlist: updatedList }
            }
            else {
                return { total: state.total, itemlist: [...state.itemlist, action.paylod] }
            }

        default: return state;
    }
}

export default cardReducer