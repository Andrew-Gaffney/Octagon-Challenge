import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import React, { Component } from 'react';
import axios from 'axios';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailChanged: false,
      firstName: '',
      firstNameChanged: false,
      lastName: '',
      lastNameChanged: false,
      zipCode: '',
      zipCodeChanged: false,
      message: '',
      messageChanged: false,
      state: '',
      validEmail: '',
      validFirstName: '',
      validLastName: '',
      validZip: '',
      validMessage: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
      validEmail: (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(event.target.value),
      emailChanged: true,
    });
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value,
      validFirstName: (/^[A-Za-z]+$/).test(event.target.value),
      firstNameChanged: true,
    });
  }

  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value,
      validLastName: (/[A-Z][A-Za-z' -]+/).test(event.target.value),
      lastNameChanged: true,
    });
  }

  handleZipChange(event) {
    this.setState({
      zipCode: event.target.value,
      validZip: (/^\d{5}(?:[-\s]\d{4})?$/).test(event.target.value),
      zipCodeChanged: true,
    });
  }

  handleMessageChange(event) {
    this.setState({
      message: event.target.value,
      validMessage: event.target.value.length > 0,
      messageChanged: true,
    });
  }

  handleStateChange(event) {
    this.setState({ state: event.target.value });
  }

  handleSubmit(event) {
    axios.post('/api/contact', {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      message: this.state.message,
      zipCode: this.state.zipCode,
      state: this.state.state,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
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
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailAddress">Email<br />
                <input
                  onChange={this.handleEmailChange}
                  id="email"
                  className="form-control"
                  type="email"
                  name="emailAddress"
                  value={this.state.email}
                />
              </label><br />
              {this.state.emailChanged && !this.state.validEmail ?
                <small className="errorMessage">Required field, valid email address.</small> : null}
            </div>
            <div className="form-group">
              <label htmlFor="firstname">First Name<br />
                <input
                  onChange={this.handleFirstNameChange}
                  value={this.state.firstName}
                  id="fname"
                  type="text"
                  className="form-control"
                  name="firstname"
                />
              </label><br />
              {this.state.firstNameChanged && !this.state.validFirstName ?
                <small className="errorMessage">Required field, alphabet characters only.</small>
                : null
              }
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name<br />
                <input
                  onChange={this.handleLastNameChange}
                  value={this.state.lastName}
                  id="lname"
                  className="form-control"
                  type="text"
                  name="lastname"
                />
              </label><br />
              {this.state.lastNameChanged && !this.state.validLastName ?
                <small className="errorMessage">Required field, alphabet,
                 dashes and apostophes only.
                </small> : null
              }
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code<br />
                <input
                  onChange={this.handleZipChange}
                  value={this.state.zipCode}
                  id="zipCode"
                  className="form-control"
                  type="text"
                  name="zipCode"
                />
              </label><br />
              {this.state.zipCodeChanged && !this.state.validZip ?
                <small className="errorMessage">Required field,
                valid US zip code.
                </small> : null
              }
            </div>
            <div className="form-group">
              <label htmlFor="state">State<br />
                <select
                  value={this.state.value}
                  onChange={this.handleStateChange}
                >
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
                <textarea
                  onChange={this.handleMessageChange}
                  value={this.state.message}
                  id="message"
                  name="contactmessage"
                  rows="10"
                  cols="70"
                />
              </label><br />
              {this.state.messageChanged && !this.state.validMessage ?
                <small className="errorMessage">Required field,
                cannot be blank.
                </small> : null
              }
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
}
