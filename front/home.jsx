import { LinkContainer } from 'react-router-bootstrap';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import React from 'react'

export default function home() {
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
      <div id="hero">
        <h3 id="hero-text">This is my hero image.</h3>
      </div>
      <div id="lorem">
        <h3 className="lorem-title">Lorem Ipsum</h3>
        <p className="lorem-text">Lorem ipsum dolor sit amet,
         consectetur adipiscing elit. Curabitur
          euismod, sapien vitae facilisis mollis,
          turpis eros malesuada purus, sit amet pharetra erat felis ut leo.
          Aenean semper neque ac lacinia rhoncus. Aenean diam odio, interdum id
           quam at, ultrices commodo lorem.
          Vivamus finibus et neque ac feugiat. Duis scelerisque lectus id elit
          efficitur, ac tempus leo maximus.
          Donec ex justo, vestibulum id magna at, dapibus ornare quam. Integer
           ac orci non velit tempor dapibus sed in quam.
          Suspendisse commodo ante ipsum, sed porta tellus congue at. Ut justo
          dolor, lacinia at elementum nec, pharetra vestibulum est.
          Donec pharetra pretium velit, eu ullamcorper elit vulputate lacinia.
          Sed interdum sodales feugiat.
        </p>
      </div>
      <footer>
        <p>Presumably this would contain information about licenses or copyright information
        if they existed.
        </p>
      </footer>
    </div>
  );
}
