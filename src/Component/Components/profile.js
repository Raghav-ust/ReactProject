import React from "react";
import {
  TextField
} from '@mui/material';

const profile = () => {

  document.getElementById("fname").value = localStorage.getItem("fname")
  document.getElementById("lname").value = localStorage.getItem("lname")
  document.getElementById("age").value = localStorage.getItem("age")
  document.getElementById("dob").value = localStorage.getItem("dob")

  return (
    <>
      <h1>Profile Page</h1>
      <form class="registeration-form" method="post">
      <h1>User Details:</h1>

       <br />
      <TextField label="First Name" name="fname"  id="fname" disabled />

      <br />
      <TextField label="Last Name" type="text" name="lname" id="lname" disabled />

       <br />
      <TextField label="Age" type="number" name="age" id="age" disabled />

       <br />
      <TextField label="Date of Birth" type="date" name="dob" id="dob" disabled />

    </form>
    </>
  );
};

export default profile;
