import React from "react";

const ChoresItem = ({ chore }) => {
  const { name, value, completed, date, _id } = chore;

  // const authContext = useContext(AuthContext)

  return (
    <div>
      <div className="card-body shadow-lg mt-4"  style={{ width: "18rem" }}>
        <h5 className="card-title">
          <span className="badge bg-secondary">Name: {name}</span>
        </h5>
        <span className="badge bg-primary card-text ">value: {value}</span>
        <div className="form-check" style={{backgroundColor:"brown"}}>
        <label className="form-check-label" htmlFor="flexCheckDefault">
            Completed
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value={completed}
            id="flexCheckDefault"
          />
          
        </div>
        <h6>date: {date}</h6>
        <h6>ID: {_id}</h6>
      </div>
    </div>
  );
};
export default ChoresItem;
