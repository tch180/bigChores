/* eslint-disable no-unused-vars */
import React, { useEffect, Fragment, useContext } from "react";
import ChildrenContext from "../../context/children/childrenContext";
import ChildItem from "./ChildItem";
import AuthContext from "../../context/Auth/authContext";

const Children = () => {
  const childrenContext = useContext(ChildrenContext);
  const { getChild, kids } = childrenContext;
  
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    getChild();
    console.log("about to display the kids ");
    //console.log(ChildItem)

    //eslint-disable-next-line
  }, []);

  return (
    <div className='childrenParent'>
      <h1>My Kids</h1>
      <div className="childrenWrapper" >
        {kids.map((children, index) => (
          <div key={index}>
            <ChildItem children={children} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Children;
