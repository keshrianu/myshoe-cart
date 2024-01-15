import React from 'react'
import "./login.css"
import loginimage1 from "./Image/loginimage1.jpg"
const Login = () => {

  return (
    <>
        <div className="row">
      <img src={loginimage1} alt="img" className="background-image" />
      <div className="container">
        <div className="login">
          <h1>ShoeCart</h1>
          <label htmlFor="username">UserName:</label>
          <input type="text" />
          <label htmlFor="password">PassWord:</label>
          <input type="password" />
          <br />
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
    
    
      
    </>
  )
}

export default Login
