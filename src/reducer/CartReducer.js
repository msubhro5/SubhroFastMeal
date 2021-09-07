const initialState = [];

const CartReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "AddItem":
            return [...state, actions.payload];

        case "DeleteItem":
            return state.filter((cval, i) => {
                return (i !== actions.payload)
            })

        case "DeleteAllItem":
            return state = [];
        default:
            return state;
    }
}

export default CartReducer;