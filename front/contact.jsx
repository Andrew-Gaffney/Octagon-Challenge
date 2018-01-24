import React from 'react';
import axios from 'axios';

function postIt() {
  console.log('Is this getting called?????');
  axios.post('/api/contact', {
    email: document.getElementById('email').value,
    firstName: document.getElementById('fname').value,
    lastName: document.getElementById('lname').value,
    message: document.getElementById('message').value
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default function contact() {
  return (
    <div id="contact-page">
      <h2>Please leave us your information and a message and we will get back
      to you as soon as we can!
      </h2>
      <form onSubmit={postIt}>
        Email: <input id="email" type="text" name="email" /><br />
        First Name: <input id="fname" type="text" name="fname" /><br />
        Last Name: <input id="lname" type="text" name="lname" /><br />
        Message: <textarea id="message" name="message" rows="20" cols="50" /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
