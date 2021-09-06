import {FaTimes, FaHamburger} from 'react-icons/fa'
import React, {useEffect, useState} from 'react'
import '../../../styles/navbar.scss'
import { NavMenu } from './navbar-elements'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { Link } from 'gatsby'


const Navbar = () => {

    //Use state to keep track of hamburger menu state
    const [isOpen, setIsOpen] = useState(false);
    //use state to keep track of scroll position
    const [scroll, setScroll] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const closeMobileMenu = () => setIsOpen(false);
    
    const changeNav = () => setScroll(window.scrollY >=80 ? true : false);
    

    //add a listener to the scroll event to track screen position
    useEffect(() => {
        changeNav();
        window.addEventListener("scroll", changeNav)
    }, [])

    //Generates the page header and aav bar
    return (
        <>
            <nav className={`nav background-dark ${scroll ? "opacity-90" : "opacity-100"}`}  active={scroll.toString()}>
                <div className="nav-container">
                    <Link className="nav-logo color-light" to="/" onClick={closeMobileMenu} >
                        <HiOutlineDesktopComputer className='nav-icon ' /> Thomas Oliver
                    </Link>
                    <div className="mobile-icon" onClick={toggle} >
                        {isOpen ? <FaTimes className=' color-primary'/> : <FaHamburger className='color-primary'/>}
                    </div>
                    <NavMenu className="background-dark" onClick={toggle} isOpen={isOpen}>
                        <li className="nav-item" >
                            <Link className="nav-link  color-light" to="/projects" >Projects</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link  color-light" to="/experience" >Experience</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link  color-light" to="/about" >About</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link  color-light" to="/blog" >Blog</Link>
                        </li>
                    </NavMenu>
                </div>
            </nav>
       </>
    )
}

export default Navbar



