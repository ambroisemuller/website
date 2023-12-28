import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background: #eee;
    height: 64px;
    display: flex;
    justify-content: space-between;
`;
 
export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        background-color: #b4b2d7;
        color: #fff;
    }
`;
 
export const Bars = styled(FaBars)`
    display: none;
`;
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;