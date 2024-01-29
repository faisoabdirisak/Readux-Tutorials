import { BUY_ICECREAM } from "./IceCreamTypes";

const initialState = {
  numOfIceCream: 10,
};

const iceCreamReducer = (state = initialState, action) => {
    switch (action.types) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream-1
            }
        default: return state
    }
}

export default iceCreamReducer