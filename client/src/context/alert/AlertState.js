import {SET_ALERT,REMOVE_ALERT} from '../types'
import {v4 as uuid} from 'uuid'


export const initialState = {
    alerts:[]
}
export const setAlert = (msg, type, timeout = 5000, dispatch) => {
    const id = uuid.v4;
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };


