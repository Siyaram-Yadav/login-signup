import React, { useState } from 'react';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)} > Login</button>

          <button className={!isLogin ? 'active' : ''}
          onClick={() => setIsLogin(false)} >SignUp</button>
        </div>
        {isLogin ?<>
        <div className='form'>
            <h2>Login form</h2>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <a href='#'>forgot password</a>
            <button>Login</button>
            <p>You have no any Account  <a href='#' onClick={()=>setIsLogin(false)}>SignUp Now</a> </p>
        </div>
        </>

        : <>
        <div className='form'>
        <h2>SignUp</h2>
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        <input type='password' placeholder='conform password'/>
        <button>Login</button>
            <p>You have a Account  <a href='#' onClick={()=>setIsLogin(true)}>Login Now</a> </p>
        </div>
        </>

        }
      </div>
    </div>
  );
}

export default Auth;
