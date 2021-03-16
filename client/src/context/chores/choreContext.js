import { createContext, useContext } from 'react';
import {useChoreReducer} from './choreReducer'
import {initialState} from "./ChoreState"

const ChoreStateContext = createContext();
const ChoreDispatchContext = createContext();

const ChoreProvider = (props) =>{

    const [state,dispatch] = useChoreReducer(initialState);
    return (
        <ChoreStateContext.Provider value={state}>
            <ChoreDispatchContext.Provider value={dispatch}>
                {props.children}
            </ChoreDispatchContext.Provider>
        </ChoreStateContext.Provider>
    )
};


export default ChoreProvider;
export const useChoreState = ()=> useContext(ChoreStateContext)
export const useChoreDispatch = ()=> useContext(ChoreDispatchContext);