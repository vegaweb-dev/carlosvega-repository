import React from "react";
import Switch from 'react-switch';
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="nav">
        <div className="nav__wrapper">
          <div className="nav__logo">logo</div>
          <ul className="nav__menu">
            <li className="nav__menu--items">
              <a href="#home">Home</a>
            </li>
            <li className="nav__menu--items">
              <a href="#services">Services</a>
            </li>
            <li className="nav__menu--items">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav__menu--items">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="nav__menu--items">
              <a href="#contact">Contact</a>
            </li>
            <li className='buttons'>
						<label htmlFor='' className='switch'>
							<Switch
								height={24}
								width={48}
								onColor='#4D4D4D'
								offColor='#ccc'
                checked = {true}
							/>
						</label>
						<a href='' className='button'>
							Hire Me
						</a>
					</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
