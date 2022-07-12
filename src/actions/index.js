import * as api from "../api";
import * as types from "../constants/ActionTypes";

export const getBankData = () => dispatch => {
  return api.getBankData().then(response =>
    dispatch({
      type: types.RECEIVE_BANKDATA,
      bankdata: response.data
    })
  );
};