import {combineReducers} from "redux";
import {cakeReducer} from "./reducer/cakeReducer";
import {iceCreamReducer} from "./reducer/iceCreamReducer";
import {userReducer} from "./async/userReducer";

const rootReducer = combineReducers({
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        users: userReducer
    }
)

export default rootReducer