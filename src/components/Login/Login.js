import React, { useState } from 'react';
import { useAppContext } from '../Context/AppContext';
import style from "./login.module.css"

const Login = () => {
  const { handleLogin } = useAppContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authenticateUser = () => {

    const hardcodedName = "test@123";
    const hardcodedPass = "pass@123";
    var letters = /^[A-Za-z]+$/g;

    // Creating Validation for hardcoded value Length must between 6 to 15 and only albhabets not allowed as username.
    // If validation successfully done last else if will execute a function for navigate toward portfolio and chage the state of loggedin as true.
    
    if((username.length < 6) || (username.length >15)){
      alert("must between 6 to 15 character length")
    }else if(username.match(letters)){
      alert("only Alphanumeric")
    }
    else if (username === hardcodedName && password === hardcodedPass) {
      handleLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.login}>
        <h1>Login Form</h1>
        <div className={style.field}>
          <div>
            <label htmlFor='Username'> Username</label>
            <input type='text' placeholder='Username' name='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor='Password'>Password</label>
            <input type='password' placeholder='Password' name='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
        </div>
        <button className={style.btn} onClick={authenticateUser}> Log In</button>
        <p>Don't have account ? <a className={style.anchor} href='#'>Register Here</a></p>
      </div>
    </div>
  );
};

export default Login;
