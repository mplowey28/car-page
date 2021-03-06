import React from 'react'
import car from '../assests/icons/car.png'

const Nav = () => {
    return (
        <nav className="container">
            <div className="logo">
                <img src={car} alt="car logo" /> Cars
            </div>
            <ul>
                <li><a href="#" className="selected">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Price</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#" className="highlight">Book Appointment</a></li>
            </ul>
        </nav>
    )
}

export default Nav
