/* eslint-disable no-unused-vars */
import React, { useEffect, Fragment, useContext } from "react";
import ChoresContext from '../../context/chores/choreContext';
import ChildrenContext from "../../context/children/childrenContext";

import AuthContext from '../../context/Auth/authContext'
import ChoresItem from "./ChoresItem";

const Chores = () => {
    const choreContext = useContext(ChoresContext);
    const childContext = useContext(ChildrenContext)
    // const { } = childContext
    const {getChores, chores, getChildAndChores} = choreContext
    const authContext = useContext(AuthContext);

    useEffect(()=> {
        authContext.loadUser();
        getChildAndChores();
        //getChores();
        console.log("get chores")
            //eslint-disable-next-line
    },[])
    
    return (
        <div>
            <h1>Chores</h1>
            <div>
                {chores.map((chore, index)=>(
                <div key={index}>
                    <ChoresItem chore={chore} /> 
                </div>           
                ))}
            </div>




        </div>









    )










}
export default Chores