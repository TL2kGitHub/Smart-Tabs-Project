import React from 'react'

function RegPage() {
    return (
        <div className="form">
            <div className="titleBox">
                <div id="titleReg"></div>
          <div className="tittlePos" >Register</div>
          </div>
          <form id="Position" className="textFieldGroup">
              <input email="text" className="textField" placeholder="Enter email address" required></input>
              <input type="text" className="textField" placeholder="Enter password" required></input>
              <input type="text" className="textField" placeholder="Confirm password" required></input>
              <input type="checkbox" className="checkBox" required></input>I am not a robot
              <button type="submit" className="submitBtn">Register</button>
          </form>
        </div>
    );
  }
  
  export default RegPage;