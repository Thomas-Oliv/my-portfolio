import styled from 'styled-components'

//Used a styled component to handle the navbar changing from mobile hamburger to the horizontal navbar.
export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;
    @media screen and (max-width: 960px)
    {
        flex-direction: column;
        width:100%;
        height: 90vh;
        position: absolute;
        top:80px;
        top: ${({ isOpen }) => (isOpen ? "100%" : "-1000px")};
        opacity: 80%;
        transition: all 0.2s ease;
    }
    @media screen and (min-width: 960px)
    {
        padding-top: 40px;
        background-color: transparent;
    }
`;
