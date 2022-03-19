import { GOOGLE,FACEBOOK,EMAIL } from '../Types';
const intialState = {
    user: {}
  
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case GOOGLE: {
            return {
                ...state,
                user: action.payload,
               
            }
        }
        case FACEBOOK: {
            return {
                ...state,
                user:action.payload,
               
            }
        }
        case EMAIL: {
            return {
                ...state,
                user: action.payload,
            
            }
        }
        default:
            return state

    }
}
export default reducer;