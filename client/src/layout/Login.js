import React, { useState, useContext, useEffect, Fragment } from 'react';
import AuthContext from '../context/Auth/authContext'

function Login(props) {

const authContext = useContext(AuthContext)

const {login, error, clearErrors, isAuthenticated} = authContext;

useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/kids');
    }
    if (error === 'Invalid Creds') {
      //setAlert(error, 'danger');
      clearErrors();
    }
  }, [error, isAuthenticated, props.history,clearErrors]);

const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('please enter email and password');
      //setAlert('Please fill in all fields', 'danger');
    } else {
      login({ email, password });
      // console.log('user logged in');
    }
  };
  return (
    <Fragment>
      <div className="card bg-dark" style={{ margin: "auto" }} onSubmit={onSubmit} >
        <form style={{ width: "22rem", margin: "auto" }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
            className='form-control'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              className='form-control'
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              required
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default Login;
