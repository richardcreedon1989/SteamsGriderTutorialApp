import {SIGN_IN, SIGN_OUT} from "./types"
export const signIn = (userId) => { //userID coming from arg passed in to f in googleauthredux
    return{
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};