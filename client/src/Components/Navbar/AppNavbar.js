import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';

import useStyles from './styles';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // MAKE IT SO PROFILE DOESN'T SHOW UNLESS SIGNED UP

  
  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // will check whether user is logged in, if so will display logout
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    
    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    
        history.push('/auth');
    
        setUser(null);
    };

    useEffect(() => {
        
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);


  //Info for navbar below
  //dark in Navbar lets bar know that back is dark so the text will be light
  //expand creates the menu on small screens
  //classNames can be added (mb-5) <- move everything down under Navbar
  //container so navelements go in middle
  //NavbarBrand href contains url
  //NavbarToggler toggles onClick event handler
  //Collapse isOpen set to isOpen state (of isOpen), specify its part of a navbar
  //  and within it give a Nav with a "ml-auto", margin-left auto which alligns left automatically

    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Exercises</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ms-auto" navbar>
                  { user?.result ? (
                    <>
                    <NavItem>
                      <NavLink href="/profile">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/createworkout">Create Workout</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/exerciselist">Exercise List</NavLink>
                    </NavItem>
                    </>
                  ) : (
                    <NavItem>Welcome</NavItem>
                  )}
                <NavItem>
                  <NavLink href="https://github.com/44cjohnson">Github</NavLink>
                </NavItem>
                  {user?.result ? (
                    <>
                      <NavItem className={classes.userName}>{user?.result.name}</NavItem>
                      <Button component={Link} to="/" variant="contained" className={classes.logout} color="primary" onClick={logout}>Logout</Button>
                    </>
                  ) : (
                      <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                  )}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
}

export default AppNavbar;
