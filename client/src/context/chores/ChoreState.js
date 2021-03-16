import axios from 'axios'; 
import {
GET_CHORES,
DELETE_CHORES,
UPDATE_CHORES,
ADD_CHORES,
CHORES_ERROR,
SET_CURRENT_CHORE, 
GET_CHILDREN_AND_CHORES
} from '../types'

   export const initialState = {
        chores: [],
        error: null,
        currentChore: null, 
        childID: null, 
    };

// GET CHORES 
export const getChores = async (id,dispatch) => {
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
  export const getChildAndChores = async (id,dispatch) => {
    try {
      
      const res = await axios.get(`/api/chore/${id}`)
      dispatch({type: GET_CHILDREN_AND_CHORES, payload: res.data })
      console.log(res, "res")
    } catch (err) {
      dispatch({ type:  CHORES_ERROR, payload: err.response.msg });
    }
  }
//ADD CHORES
export const addChores = async(chores,dispatch)=>{
    const config ={
        headers: {
            'content-type': 'application/json'
        },
    }
    try {
        const res = await axios.post('/api/chore',chores,config)
        dispatch({type:ADD_CHORES, payload: res.data })
    } catch (error) {
        dispatch({type: CHORES_ERROR, payload: error.response.msg})
    }
}
// UPDATE CHORES
export const updateChores = async(chores,dispatch) => {
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

export const deleteChores = async(id,dispatch) => {
    try {
        dispatch({type: DELETE_CHORES, payload:id})
    } catch (error) {
        dispatch({type: CHORES_ERROR, payload: error.response.msg})
    }
    getChores();
}
// setCurrentChore
export const setCurrentChore =(chores,dispatch) => {
    dispatch({type: SET_CURRENT_CHORE, payload: chores})
}







