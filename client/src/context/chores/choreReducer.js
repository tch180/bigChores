/* eslint-disable import/no-anonymous-default-export */
import {
  GET_CHORES,
  ADD_CHORES,
  DELETE_CHORES,
  UPDATE_CHORES,
  CHORES_ERROR,
  GET_CHILDREN_AND_CHORES,

} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CHORES:
      return {
        ...state,
        chores: action.payload, 
      };
      case GET_CHILDREN_AND_CHORES:
                return {
                    ...state,
                    chores: action.payload,
                }
    case ADD_CHORES:
      return {
        ...state,
        chores: [action.payload, ...state.chores],
      };
    case DELETE_CHORES:
      return {
        ...state,
      };
    case UPDATE_CHORES:
      return {
        ...state,
        chores: state.chores.map((chore) =>
          chore._id === action.payload.id ? action.payload : chore
        ),
      };
    case CHORES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
