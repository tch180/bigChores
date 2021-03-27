/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useContext, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChildrenContext from "../../context/children/childrenContext";
import ChoresContext from "../../context/chores/choreContext";

const ChildItem = ({ children }) => {
  const childrenContext = useContext(ChildrenContext);
  const choreContext = useContext(ChoresContext)
  const { deleteChildren, setCurrentChild,updateChildren } = childrenContext;
  const {addChores} = choreContext

  const { name, age, _id } = children;

  const [chore, setChore] = useState({
    choreName:'',
    value:'',
    completed:'',
  })
  const {choreName,value,completed}= chore;  

  const onChange = (e) =>
  setChore({ ...chore, [e.target.name]: e.target.value });

  const onSubmit =(e) =>{
    e.preventDefault();
    
    addChores(chore, _id)
    console.log(chore)
  }

  //  const link = "/kids/chores/"+ _id
  // console.log("Link Console",link)
  return (
    <div
      className="test2"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div className="card  mt-5" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            <span className="badge bg-secondary">Name: {name}</span>
          </h5>
          <h6>ID:{_id}</h6>
          <cite>Age: {age}</cite>
          <h6>Points: 500</h6>
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
                <Link to={`/kids/chores/${_id}`} className="dropdown-item">
                  {" "}
                  {/**  onClick={() => getChildAndChores(_id, console.log("the child id is ",_id))}*/}
                  <span> View Chores</span>
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
            </ul>
          </div>
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
              <h5 className="modal-title form  "  id="exampleModalLabel">
                Add Chore
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="modal-body" onSubmit={onSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Chore"
                  name='choreName'
                  value={choreName}
                  onChange={onChange}
                />
                <label htmlFor="floatingInput">Chore</label>
              </div>
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="points"
                  placeholder="points"
                  name='value'
                  value={value}
                  onChange={onChange}
                />
                <label htmlFor="points">Points</label>
              </div>
              <div className="form-check" style={{display:'table'}}>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                  Completed{" "}
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name='completed'
                  // checked={Boolean}
                  value={completed === 'true'}
                  onChange={onChange}
                  id="flexCheckDefault"
                />
                
              </div>
              <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary" onClick={()=>{console.log('id is', _id)}} >
                Save changes
              </button>
            </div>
            </form>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChildItem;
