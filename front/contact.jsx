import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';

function postIt() {
  axios.post('/api/contact', {
    email:document.getElementById('email').value,
    firstName: document.getElementById('fname').value,
    lastName: document.getElementById('lname').value,
    message: document.getElementById('message').value,
    zipCode: document.getElementById('zipCode').value,
    state: document.getElementById('state').value,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

function checkEmail() {
  if (document.getElementById('email').validity.valid) {
    document.querySelector('.errorMessage').innerHTML = '';
  }
}

export default function contact() {
  return (
    <div>
      <Navbar id="navbar" fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <h3>Navigation Bar!</h3>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullLeft>
          <LinkContainer to="/">
            <NavItem>Home</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullLeft>
          <LinkContainer to="/contact">
            <NavItem>Contact us!</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
      <div id="contact-page">
        <h3>Please leave us your information and a message and we will get back
        to you as soon as we can!
        </h3>
        <form onSubmit={postIt}>
          <div className="form-group">
            <label htmlFor="emailAddress">Email<br />
              <input onChange={checkEmail} id="email" className="form-control" type="email" name="emailAddress" required />
            </label><br />
            <small className="errorMessage">Required valid email address.</small>
          </div>
          <div className="form-group">
            <label htmlFor="firstname">First Name<br />
              <input
                id="fname"
                type="text"
                className="form-control"
                name="firstname"
                required
                pattern="[a-zA-Z]+"
              />
            </label><br />
            <small className="errorMessage">Required, alphabet characters only.</small>
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name<br />
              <input
                id="lname"
                className="form-control"
                type="text"
                name="lastname"
                required
                pattern="[A-Z][A-Za-z' -]+"
              />
            </label><br />
            <small className="errorMessage">Required, alphabet, dashes and apostophes only.</small>
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Zip Code<br />
              <input
                id="zipCode"
                className="form-control"
                type="text"
                name="zipCode"
                required
                pattern="^\d{5}(?:[-\s]\d{4})?$"
              />
            </label><br />
            <small className="errorMessage">Required, valid US zip code.</small>
          </div>
          <div className="form-group">
            <label htmlFor="state">State<br />
              <select>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="contactmessage">Message<br />
              <textarea id="message" name="contactmessage" rows="10" cols="70" required />
            </label><br />
            <small className="errorMessage">Required, cannot be blank.</small>
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <footer id="contact-footer">
        <p>Presumably this would contain information about licenses or copyright information
        if they existed.
        </p>
      </footer>
    </div>
  );
}
