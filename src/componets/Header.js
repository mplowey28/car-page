import React from 'react'
import Burger from './Burger'
import Nav from './Nav'

const Header = () => {
    return (
       <header>
           <Nav />
           <Burger />
           <div className="content">
            <div className="container">
                <h1>Come take a ride</h1>
                <p>Experience true engineering perfection</p>
                <a className="highlight" href="#">Book Appointment</a>
            </div>
           </div>
       </header>
    )
}

export default Header
