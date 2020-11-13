import React from 'react';

//Styles
import { Wrapper, Brand, Toggle } from './Navbar.styles';
//Images
import  logo  from '../../images/logo.png';
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => (
    <Wrapper>
        <Brand><img src={logo} /><h2>TRANSIA</h2></Brand>
        <Toggle><FontAwesomeIcon icon={faUserCircle} className="icon"/><FontAwesomeIcon icon={faBars} className="icon"/></Toggle>
    </Wrapper>

);

export default Navbar;