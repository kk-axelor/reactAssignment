const cardReducer = (state, action) => {
    const { id } = action.paylod;

    switch (action.type) {
        case "ADD_CART":
            {

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


            }
        case "REMOVE_CART":
            {

                console.log("remove cart call")
                const item = state.itemlist.find(item => item.id === id)
                console.log(item)
                const total = state.total - item.price * item.quantity;

                console.log(total)
                const updatedList = state.itemlist.filter(item => item.id !== id)
                console.log(updatedList)
                return { total, itemlist: updatedList }

            }

        case "INCREASE_ITEM":
            {

                const item = state.itemlist.find(item => item.id === id)
                const total = state.total + item.price
                const { price } = action.paylod

                const updatedList = state.itemlist.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
                return { total, itemlist: updatedList }

            }

        case "DECREASE_ITEM":
            {

                const item = state.itemlist.find(item => item.id === id)
                if (item.quantity < 1) {
                    return state;
                }
                const total = state.total - item.price
                const { price } = action.paylod;

                const updatedList = state.itemlist.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
                return { total, itemlist: updatedList }

            }


        default: return state;
    }
}

export default cardReducer