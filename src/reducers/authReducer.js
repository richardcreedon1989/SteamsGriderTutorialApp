import {SIGN_IN, SIGN_OUT} from "../actions/types"
const INITIAL_STATE = {
    isSignedIn: null, 
    userId: null,

}

//Capitalised variable/object means its a true constant ie no changes to it

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN: //comes from action file 
            return {...state, isSignedIn: true, userId: action.payload}
        case SIGN_OUT: 
            return {...state, isSignedIn: false, userId: null}
        default:
            return state;
    }
}