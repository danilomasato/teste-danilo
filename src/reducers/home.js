import {
  RECEIVE_BANKDATA,
} from "../constants/ActionTypes";

const home = (state = {
    bankdata: [],
    }, action) => {

    switch (action.type) {
        case RECEIVE_BANKDATA:
            return {...state, bankdata: action.bankdata};         
    default:
        return state;
  }
}

export default home;