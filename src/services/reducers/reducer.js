import { ADD_TO_CART } from "../Constants";

const initialStates = {
    cartData: []
}
export default function cartItems(state = initialStates, action){

    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cartData: action.data
            }
            break;
        default:
            return state
    }

}
