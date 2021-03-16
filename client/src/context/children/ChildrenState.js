import React, { useReducer } from "react";
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
import childrenReducer from "./childrenReducer.js";
import ChildrenContext from "./childrenContext";  // state should be pure 

const ChildrenState = (props) => {
  const initialState = {
    kids: [],
    currentChild: null,
    error: null,
    childrenFiltered: null,
    chores: [],
  };

  const [state, dispatch] = useReducer(childrenReducer, initialState);
  // ADD CHILDREN
  const addChild = async (children) => {
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
  const getChild = async () => {
    try {
      const res = await axios.get("/api/child");
      dispatch({ type: GET_CHILDREN, payload: res.data });
    
    } catch (err) {
      dispatch({ type: CHILDREN_ERROR, payload: err.response.msg });
    }
  };

  // UPDATE CHILDREN
  const updateChildren = async (children) => {
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
  const setCurrentChild = (kids) => {
    dispatch({ type: SET_CURRENT_CHILD, payload: kids._id });
  };
  //CLEAR CURRENT CHILD
  const clearCurrentChild = (kids) => {
    dispatch({ type: CLEAR_CURRENT_CHILDREN });
  };
  // FILTER CHILDREN
  const filterChildern = (text) => {
    dispatch({ type: FILTER_CHILDREN, payload: text });
  };
  //CLEAR FILTER CHILDREN
  const clearTheChildrenFilter = () => {
    dispatch({ type: CLEAR_CHILDREN_FILTER });
  };
  // DELETE CHILD
  const deleteChildren = async (id) => {
    try {
      await axios.delete(`/api/child/${id}`);
      dispatch({ type: DELETE_CHILDREN, payload: id });
    } catch (err) {
      dispatch({ type: CHILDREN_ERROR, payload: err.response.msg });
    }
  };
  return (
    <ChildrenContext.Provider
      value={{
        kids: state.kids,
        currentChild: state.currentChild,
        childrenFiltered: state.childrenFiltered,
        error: state.error,

        addChild,
        getChild,
        updateChildren,
        setCurrentChild,
        clearCurrentChild,
        filterChildern,
        clearTheChildrenFilter,
        deleteChildren,
        
      }}
    >
      {props.children}
    </ChildrenContext.Provider>
  );
};
export default ChildrenState;
