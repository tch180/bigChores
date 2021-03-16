/* eslint-disable no-unused-vars */
import React, { useEffect, Fragment, useContext } from "react";
import ChildrenContext, { useChildrenDispatch, useChildrenState } from "../../context/children/childrenContext";
import ChildItem from "./ChildItem";
import AuthContext from "../../context/Auth/authContext";
import { getChild } from "../../context/children/ChildrenState";

const Children = () => {
  const {kids} = useChildrenState()
  const dispatch = useChildrenDispatch();
  
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    getChild(dispatch);
    console.log("about to display the kids ");
    //console.log(ChildItem)

    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>My Kids </h1>
      <div>
        {kids.map((kid, index) => (
          <div key={index}>
            <ChildItem kid={kid} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Children;
