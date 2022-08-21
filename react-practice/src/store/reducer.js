import { actionTypes } from './actionType'
const initialStore = {
    user: ""
}

const authReducer = (state = initialStore, action) => {
    console.log("action.payload",action.payload)
    switch (action.type) {
        case actionTypes.AUTHORIZED: return {
            user: action.payload
        }
        default: return { state }
    }
}
export default authReducer;
