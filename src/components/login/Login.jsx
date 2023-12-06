import Back from "../common/back/Back";
import React, { useState } from 'react';
import "./login.css"
import Validation from "../contact/Validation";

const Login = () => {
const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));

    // If there are no errors, send data to the server
    if (Object.keys(errors).length === 0) {
      fetch('http://localhost:8000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      // window.location.reload();
    }
  }

  return (
    <>
      <Back title='Login' />
      <section className='login contacts padding'>
        <div className='container shadow flexSB login_box'>
          <div class="login_Container">

            <form id="login-form" onSubmit={handleValidation}>

              <label htmlFor="name"><strong>Name:</strong></label>
              <input type="text" placeholder="Enter Name.." name="name" onChange={handleChange}className="login_input" />
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        
              <label htmlFor="email"><strong>Email:</strong></label>
              <input type="email" placeholder="Enter Email.." name="email" onChange={handleChange}className="login_input" />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            
              
              <label htmlFor="password"><strong>Password:</strong></label>
              <input type="password" placeholder="Enter password.." name="password" onChange={handleChange}className="login_input" />
              {errors.email && <p style={{ color: "red" }}>{errors.password}</p>}

              <label htmlFor="cPassword"><strong>Confirm Password:</strong></label>
              <input type="cPassword" placeholder="Enter password.." name="cPassword" onChange={handleChange}className="login_input" />
              {errors.email && <p style={{ color: "red" }}>{errors.cPassword}</p>}

              <button type="submit" id="Submit" >Submit</button>
        
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
