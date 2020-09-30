import {combineReducers} from 'redux'
import {showUsers} from './users-reducer'

const rootReducer =combineReducers({
    user:showUsers
});

export default rootReducer;