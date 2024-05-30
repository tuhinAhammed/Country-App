import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import style from "./CountryApp.module.css"
import Search from './Search';


const handleKeydown = (e) => {
  console.log(e.key);
}
const Header = ({ onCountryLength , onSearch}) => {
  return (
    <Navbar  expand="lg" className={`py-4 justify-content-between ${style.navbar}`}>
      <Container>
        <Navbar.Brand href="#">
          <a className={`${style.logo}`} href="#">Country App</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <h6 className='text-white flex justify-center mt-3 '>Total Countrys : {onCountryLength}</h6>
            </Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Search onSearch={onSearch} onKeydown={handleKeydown}/>
            <Button type="submit" className={style.searchBtn} >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
