import Back from "../common/back/Back"
import "./contact.css"
import React, { useState } from 'react';
import Validation from "./Validation";

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
    
  
const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
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
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe title="location" src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>203 Fictional Street, Bandra East, Mumbai, Maharastra, India</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>
         
          <div class="Container">

            <form id="signup-form" onSubmit={handleValidation}>

              <label htmlFor="name"><strong>Name:</strong></label>
              <input type="text" placeholder="Enter Name.." name="name" onChange={handleChange} />
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        
              <label htmlFor="email"><strong>Email:</strong></label>
              <input type="email" placeholder="Enter Email.." name="email" onChange={handleChange} />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

              
              <label htmlFor="message"><strong>Message:</strong></label>
              <input type="text" placeholder="Enter Message.." id="message" name="message" onChange={handleChange} />

              <button type="submit">Submit</button>
        
            </form>

            </div>
            
            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
