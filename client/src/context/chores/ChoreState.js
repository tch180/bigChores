import React, { useReducer} from 'react'
import axios from 'axios';
import choresReducer from './choreReducer';
import ChoresContext from './choreContext'
 
import {
GET_CHORES,
DELETE_CHORES,
UPDATE_CHORES,
ADD_CHORES,
CHORES_ERROR,
SET_CURRENT_CHORE, 
GET_CHILDREN_AND_CHORES
} from '../types'
const ChoresState =(props)=>{
    const initialState = {
        chores: [],
        error: null,
        currentChore: null, 
        childID: null, 
    };
    const [state,dispatch] = useReducer(choresReducer, initialState)

// GET CHORES 
const getChores = async (id) => {
    // console.log("get Chore ID ")
    try {
        const res = await axios.get(`/api/chore/${id}`)// the id here needs to be the child ID // HardCoded ID works fine just need to have the ID passed to the route correctly
        console.log('getting the chores. ')
        dispatch({type: GET_CHORES, payload: res.data})
        console.log("chore state data", res.data )
    } catch (err) {
        dispatch({ type: CHORES_ERROR,  payload: err.response.msg })
    }
}
  // Get CHILDREN & CHORES, 
  const getChildAndChores = async (id) => {
    try {
      
      const res = await axios.get(`/api/chore/${id}`)
      dispatch({type: GET_CHILDREN_AND_CHORES, payload: res.data })
      console.log(res, " res")
    } catch (err) {
      dispatch({ type:  CHORES_ERROR, payload: err.response.msg });
    }
  }
//ADD CHORES
const addChores = async(chores,id)=>{
    const config ={
        headers: {
            'content-type': 'application/json'
        },
    }
    try {
        const res = await axios.post(`/api/chore/${id}`,chores,config)
        dispatch({type:ADD_CHORES, payload: res.data })
    } catch (error) {
        dispatch({type: CHORES_ERROR, payload: error.response.msg})
    }
}
// UPDATE CHORES
const updateChores = async(chores) => {
    const config = {
        headers: {
            'content-type': 'application/json'
        },
    };
    try {
       const res = await axios.put(`/api/chore/${chores._id}`,chores,config)
       dispatch({type: UPDATE_CHORES, payload: res.data}) 
    } catch (error) {
        dispatch({type: CHORES_ERROR, payload: error.response.msg})
    }
}

//DELETE CHORES

const deleteChores = async(id) => {
    try {
        dispatch({type: DELETE_CHORES, payload:id})
    } catch (error) {
        dispatch({type: CHORES_ERROR, payload: error.response.msg})
    }
    getChores();
}
// setCurrentChore
const setCurrentChore =(chores) => {
    dispatch({type: SET_CURRENT_CHORE, payload: chores})
}
return (
    <ChoresContext.Provider
    value={{
        chores: state.chores,
        error: state.error,
        getChores,
        updateChores,
        deleteChores,
        addChores,
        setCurrentChore,
        getChildAndChores

    }}>
        {props.children}
    </ChoresContext.Provider>



)}
export default ChoresState




