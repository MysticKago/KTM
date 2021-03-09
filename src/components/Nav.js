import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cube.svg";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setClicked] = useState(false);

    return (  
        <Navigation>
            <Container>
                <Link to="/"><img src={logo} alt=""/></Link>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <LinkWrapper>
                    <Link to="/" onClick={() => setIsOpen(false)}><MenuLink>OVERVIEW</MenuLink></Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)}><MenuLink>PROJECTS</MenuLink></Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}><MenuLink>CONTACT</MenuLink></Link>
                    </LinkWrapper>
                </Menu>
            </Container>   
        </Navigation>
    );
}

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 5rem;
    border-bottom: #CFCFCF solid 1px;
    position: fixed;
    background-color: white;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;

    @media (max-width: 768px){
        height: 4rem;
    }
`;
const Hamburger = styled.div`
    display: none;
    margin-top: -7px;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 24px;
        background-color: #6A6A6A;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px){
        display: flex;
    }
`;
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
        overflow: hidden;
        background-color: white;
        border-radius: 0rem 0rem 1rem 1rem;
        margin-top: 11px;
        box-shadow: 0px 3px 15px -8px rgba(0,0,0,0.69);
        max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
        width: 100%;
        transition: max-height 0.3s ease-in-out;
    }
`;
const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1rem 0;
    
    a {
        text-decoration: none;
        padding: 0 10px 10px 17px;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        a{
            padding: 12px;
            margin: 1px;
            border-bottom: lightgray solid 1px;
        }
    }
`;
const MenuLink = styled.a`
        text-decoration: none;
        color: #9A9A9A;
        font-size: 14px;
        font-weight: bold;
        padding: 0.49rem 1.5rem;
        transition: all 0.2s ease-in;

        &:hover {
            color: #585858;
        }
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: auto;
    padding: 2rem;

    img {
        margin-top: -17px;
        height: 1.6rem;
        cursor: pointer;
    }
`;

export default Nav;