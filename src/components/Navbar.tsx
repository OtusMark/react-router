import React, {useContext} from "react"
import {NavLink} from "react-router-dom"
import styled from "styled-components";
import {AuthContext} from "../Context/AuthContext";

export const Navbar = () => {
    // @ts-ignore
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

    return (
        <NavbarWrapper>
            <StyledNav>
                <StyledUl>
                    {/*Difference in Link and NavLink is that NavLink generate and active class by default*/}
                    <StyledLi><StyledNavLink exact to="/">Home</StyledNavLink></StyledLi>
                    <StyledLi><StyledNavLink to="/about">About</StyledNavLink></StyledLi>
                    <StyledLi><StyledNavLink to="/contacts">Contacts</StyledNavLink></StyledLi>
                    <StyledLi><StyledNavLink to="/blog">Blog</StyledNavLink></StyledLi>
                    <StyledLi><StyledNavLink to="/admin">Admin</StyledNavLink></StyledLi>
                </StyledUl>
            </StyledNav>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'logout' : 'login'}</button>
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  
  width: 50%;
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  
  width: 80%;
`

const StyledLi = styled.li`
  list-style: none;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  
  &:hover {
    color: blue;
  }
  
  &.active {
    color: red;
  }
`