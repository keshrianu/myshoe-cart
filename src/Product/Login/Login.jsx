import React from 'react'
import style from "./login.module.css"
import loginimage1 from "../../Product/Image/loginimage1.jpg"
const Login = () => {

  return (
    <>
        <div className={style.row}>
      <img src={loginimage1} alt="img" className={style.backgroundimage} />
      <div className={style.container}>
        <div className={style.login}>
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
