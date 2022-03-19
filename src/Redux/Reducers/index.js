import Auth from './Auth'
import Config from './Config'
import { combineReducers } from 'redux'
import SocialAuth from './SocialAuth'
export default combineReducers({
    Auth: Auth,
    Config: Config,
    SocialAuth:SocialAuth
});
