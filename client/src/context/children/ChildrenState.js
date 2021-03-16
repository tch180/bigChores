import axios from "axios";

import {
  GET_CHILDREN,
  ADD_CHILDREN,
  DELETE_CHILDREN,
  UPDATE_CHILDREN,
  SET_CURRENT_CHILD,
  CLEAR_CURRENT_CHILDREN,
  FILTER_CHILDREN,
  CLEAR_CHILDREN_FILTER,
  CHILDREN_ERROR,
} from "../types.js";
import { useChildrenReducer } from "./childrenReducer.js";


  export const initialState = {
    kids: [],
    currentChild: null,
    error: null,
    childrenFiltered: null,
    chores: [],
  };

  
  // ADD CHILDREN
  export const addChild = async (children, dispatch) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    try {
      const res = await axios.get("/api/child", children, config);
      dispatch({ type: ADD_CHILDREN, payload: res.data });
    } catch (err) {
      dispatch({ type: CHILDREN_ERROR, payload: err.response.msg });
    }
  };
  // GET CHILDREN
  export const getChild = async (dispatch) => {
    try {
      const res = await axios.get("/api/child");
      dispatch({ type: GET_CHILDREN, payload: res.data });
    
    } catch (err) {
      dispatch({ type: CHILDREN_ERROR, payload: err.response.msg });
    }
  };

  // UPDATE CHILDREN
  export const updateChildren = async (children,dispatch) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    try {
      const res = await axios.put(
        `/api/child/${children._id}`,
        children,
        config
      );
      dispatch({ type: UPDATE_CHILDREN, payload: res.data });
    } catch (err) {
      dispatch({ type: CHILDREN_ERROR, payload: err.response.msg });
    }
  };
  // SET CURRENT CHILD
  export const setCurrentChild = (kids,dispatch) => {
    dispatch({ type: SET_CURRENT_CHILD, payload: kids._id });
  };
  //CLEAR CURRENT CHILD
  export const clearCurrentChild = (kids,dispatch) => {
    dispatch({ type: CLEAR_CURRENT_CHILDREN });
  };
  // FILTER CHILDREN
  export const filterChildern = (text,dispatch) => {
    dispatch({ type: FILTER_CHILDREN, payload: text });
  };
  //CLEAR FILTER CHILDREN
  export const clearTheChildrenFilter = (dispatch) => {
    dispatch({ type: CLEAR_CHILDREN_FILTER });
  };
  // DELETE CHILD
  export const deleteChildren = async (id,dispatch) => {
    try {
      await axios.delete(`/api/child/${id}`);
      dispatch({ type: DELETE_CHILDREN, payload: id });
    } catch (err) {
      dispatch({ type: CHILDREN_ERROR, payload: err.response.msg });
    }
  };
 



