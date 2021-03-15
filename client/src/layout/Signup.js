import React, { useState, useContext, useEffect, Fragment } from 'react';
import AuthContext from '../context/Auth/authContext'



function Signup(props) {
    const authContext = useContext(AuthContext);
    const { register,error, clearErrors,isAuthenticated} = authContext

    useEffect(()=>{
        if(isAuthenticated) {
            props.history.push('/')
        } 
        if (error === 'User already exists') {

            clearErrors()
        }
    }, [error, isAuthenticated, props.history, clearErrors])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
      });
      const { name, email, password, password2 } = user;

      const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      //   setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      //   setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password,
      });
      console.log('register submit');
      props.history.push('/');
    }
  };

  return (
    <Fragment>
      <form style={{width: '22rem', margin:'auto'}} onSubmit={onSubmit}>
      <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
          className='form-control'
          type='text'
          name='name'
          value={name}
          onChange={onChange}
          required
          id="name"
          aria-describedby="emailHelp"
          />
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
          minLength='8'
          id="exampleInputPassword1"
          />
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password Confirm 
          </label>
          <input
          className='form-control'
          type='password'
          name='password2'
          value={password2}
          onChange={onChange}
          required
          minLength='8'
          />
        </div>
        <button type="submit" value='Register'  className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
}

export default Signup;
