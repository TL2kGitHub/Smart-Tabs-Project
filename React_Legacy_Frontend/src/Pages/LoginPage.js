import React from 'react'
import { Link } from 'react-router-dom';


function LoginPage() {
  return (
        <div className="form">
            <div className="titleBox">
                <div id="titleLogin"></div>
          <div className="tittlePos" >&nbsp; Login</div>
          </div>
          <form id="Position" className="textFieldGroup">
              <input email="text" className="textField" placeholder="Enter email address" required></input>
              <input type="text" className="textField" placeholder="Enter password" required></input>
              <input type="checkbox" className="checkBox"></input>Remember password
              <button type="submit" className="submitBtn">Log in</button>
              <button className="createBtn"><Link to='/Register'>Create new Account</Link></button>
          </form>
        </div>
  );
}

export default LoginPage;