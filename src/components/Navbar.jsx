import { useState } from "react"
import '../styles/Navbar.css'

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)

    function toggleIsOpen(){
        setIsOpen(prev => !prev)
    }

    return (
        <nav>
            <img src='/images/logo.svg' className="logo"></img>
            <img src={`/images/icon-${isOpen ? "close" : "hamburger"}.svg`} className="menu-btn" onClick={toggleIsOpen}></img>
            <div className={`nav-items ${isOpen ? "opened" : ""}`}>
                <a>About</a>
                <a>Careers</a>
                <a>Events</a>
                <a>Products</a>
                <a>Support</a>
            </div>
        </nav>
    )
}