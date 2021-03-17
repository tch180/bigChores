import React, { useEffect } from 'react';
import { useAlertDispatch, useAlertState } from '../context/alert/alertContext';
import { setAlert } from '../context/alert/AlertState';

 const Alerts = () => {
  const alerts = useAlertState()
  const dispatch = useAlertDispatch()

  useEffect(() => {
    setAlert(dispatch)
    //console.log(setAlert())
    
   //eslint-disable-next-line
  }, [])

  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' />
        {alert.msg}
      </div>
    ))
  );
};
export default Alerts;
