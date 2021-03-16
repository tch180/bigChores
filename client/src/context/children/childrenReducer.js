import { useReducer } from 'react';
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
    // GET_CHILDREN_AND_CHORES
} from '../types.js';

const childrenReducer = (state,action) => {
    switch (action.type){
        case GET_CHILDREN:
            return {
                ...state, 
                kids: action.payload,
                
            };
        // case GET_CHILDREN_AND_CHORES:
        //         return {
        //             ...state,
        //             chores: action.payload,
        //         }
        case ADD_CHILDREN:
                return {
                    ...state,
                    kids: [action.payload, ...state.kids],
                };
        case UPDATE_CHILDREN: 
                return {
                    ...state, 
                    kids: state.kids.map((kid)=>
                    kid._id === action.payload._id ? action.payload : kid
                    ),
                };
        case SET_CURRENT_CHILD: 
                return {
                    ...state,
                    currentChild: action.payload,
                    };
        case CLEAR_CURRENT_CHILDREN:
            return {
                ...state,
                currentChild: null,
            }
        case FILTER_CHILDREN:
            return {
                ...state, 
                childrenFiltered: state.childrens.filter((children)=>{
                    const regex = new RegExp(`S{action.payload}`, 'gi');
                    return (
                         children.name.match(regex)
                    );
                })
            };
        case CLEAR_CHILDREN_FILTER: 
        return { 
            ...state, 
            childrenFiltered: null
        };
        case DELETE_CHILDREN: 
        return {
            ...state, 
            error: action.payload,
        };
        case CHILDREN_ERROR: 
        return {
             ...state, 
             error: action.payload,
        }
        default: 
        return state;                    

    }
}
export const useChildrenReducer = (initialState)=> useReducer(childrenReducer, initialState)