import React, {} from 'react'


 const ChoresItem = ({ chore }) => {
   

    const {name,value,completed,date,_id} = chore;

    // const authContext = useContext(AuthContext)




    return (
        <div>
            
            <div className="card-body">
          <h5 className="card-title">
            <span className="badge bg-secondary">Name: {name}</span>
          </h5>
          <h6>value:{value}</h6>
          <cite>completed: {completed}</cite>
          <h6>date: {date}</h6>
          <h6>ID: {_id}</h6>
        </div>
        </div>
    )
}
 export default ChoresItem