import styled from "styled-components";
import {NavLink, Route, Switch, useRouteMatch} from "react-router-dom";
import React from "react";
import {Recipes} from "../blog categories/Recipes";
import {Dogs} from "../blog categories/Dogs";
import {Cars} from "../blog categories/Cars";

export const Blog = () => {
    const {path, url} = useRouteMatch()

    console.log('useRouteMatch - ', 'Path:', path + `,`, 'Url:', url)

    return (
        <>
            <BlogNavContainer>
                <StyledUl>
                    {/*Difference in Link and NavLink is that NavLink generate and active class by default*/}
                    <StyledLi><StyledNavLink to={`${url}/cars`}>Cars</StyledNavLink></StyledLi>
                    <StyledLi><StyledNavLink to={`${url}/dogs`}>Dogs</StyledNavLink></StyledLi>
                    <StyledLi><StyledNavLink to={`${url}/recipes`}>Recipes</StyledNavLink></StyledLi>
                </StyledUl>
            </BlogNavContainer>
            <div>
                <Switch>
                    <Route path={`${path}/cars`}>
                        <Cars/>
                    </Route>
                    <Route path={`${path}/dogs`}>
                        <Dogs/>
                    </Route>
                    <Route path={`${path}/recipes`}>
                        <Recipes/>
                    </Route>
                </Switch>
            </div>
        </>
    )
}

const BlogNavContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;

  width: 35%;
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