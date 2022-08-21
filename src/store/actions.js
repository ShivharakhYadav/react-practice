import { actionTypes } from "./actionType";

const authentication = (payload) => ({
    type: actionTypes.AUTHORIZED,
    payload: payload
})
export const actions = { authentication };