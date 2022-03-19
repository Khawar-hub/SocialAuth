import { GOOGLE,FACEBOOK,EMAIL } from '../Types';
export const google = payload => {
    return {
        type: GOOGLE,
        payload: payload
    }
};
export const facebook =payload => {
    return {
        type: FACEBOOK,
        payload: payload
    }
};
export const email = payload => {
    return {
        type: EMAIL,
        payload: payload
    }
};