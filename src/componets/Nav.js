import React from 'react'
import car from '../assests/icons/car.png'
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const Nav = ({ open }) => {
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
