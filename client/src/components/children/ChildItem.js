/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useContext, Fragment, useEffect } from "react";
import {Link} from "react-router-dom"
import ChildrenContext from "../../context/children/childrenContext";
 import ChoresContext from '../../context/chores/choreContext';


const ChildItem = ({ children }) => {
  const childrenContext = useContext(ChildrenContext);
  const { deleteChildren, setCurrentChild } = childrenContext;
  const choreContext = useContext(ChoresContext)
  const {getChildAndChores} = choreContext
  const { name, age, _id } = children;
  

   const link = "/kids/chores/"+ _id
  console.log("Link Console",link)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div className="card bg-dark mt-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            <span className="badge bg-secondary">Name: {name}</span>
          </h5>
          <h6>ID:{_id}</h6>
          <cite>Age: {age}</cite>
          <h6>Points: 500</h6>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Chores{" "}
          </button>
          <button
            type="button"
            className="btn btn-warning dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li> 
              <Link to={link} className="dropdown-item"   onClick={() => getChildAndChores(_id, console.log("the child id is ",_id))} >
              <span > View Chores</span>  
              </Link>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                See Completed Chores 
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title bg-dark" id="exampleModalLabel">
                Add Chore
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body bg-dark">
              Hello

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChildItem;
