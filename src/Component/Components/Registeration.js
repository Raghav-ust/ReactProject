import React from "react";
import { Link,Router, useHistory } from "react-router-dom";
import "./register.css";
import {
  Radio,
  TextField,
  Button
} from '@mui/material';

function Register() {
  const history = useHistory();

  const profilePage = () => {
    history.push("/profile");
    handle();
  };

  const handle = () => {
    var password = document.getElementById("password");
  var confirmPassword = document.getElementById("cpassword");
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let dob = document.getElementById("dob").value;
  let age = document.getElementById("age").value;
  let username = document.getElementById("username").value;

  if (password.value.trim() === "") {
    password.style.border = "3px solid red";
    return false;
  } else if (confirmPassword.value.trim() === "") {
    return false;
  } else if (password.value !== confirmPassword.value) {
    alert("Passwords do not match.");
    return false;
  } else {
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("dob", dob);
    localStorage.setItem("age", age);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password.value);
    return true;
  }
  };

  return (
    <>

      <form className="registeration-form">
      <h1>Register</h1>

      <TextField label="User Name" id="username" placeholder="Username" required/><br />

      <TextField label="First Name" id="fname" placeholder="First Name" required /><br />

      <TextField label="Last Name"  id="lname" placeholder="Last Name" /><br />

      <br />
      <TextField label="Age" type="number" id="age"  />

      <br />
      <TextField label="dd-mm-yyyy" type="date" name="dob" id="dob" required />

      <p>
        Gender: <br />
        <Radio type="radio" name="gender" value="Male" />Male
        <Radio type="radio" name="gender"  value="Female" />Female
      </p>

     <br />
      <TextField label="Password" type="password"  id="password" placeholder="Password" required/><br />
      
      <TextField label="Confirm Password" type="password" id="cpassword" placeholder="Confirm Password" required/>

      <p>
        <Button type="submit" onClick={profilePage}>Register</Button>
        {/* <Router><li>
                <Link to={"/Components/login.js"} className="nav-link">
                  Already have an account ?
                </Link></li>
        </Router> */}
      </p>
    </form>
    </>
    
  );
}

export default Register;
