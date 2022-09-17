import React from 'react';


export default function Nav() {
//see mod 20.1.6 if want to make links an array and map over

    return (
      <header className="flex-row">
        <h1>
            <a className="href-links" href='/'>Robin Ostrowski</a>
        </h1>
        <nav>
            <ul className="flex-row">
            
                <li className="flex-row">
                    <a className="href-links" href="#about">About Me</a>
                </li>
                <li>
                    <a className="href-links" href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a className="href-links" href="#resume">Resume</a>
                </li>
                <li>
                    <span className="href-links">Contact</span>
                </li>
            </ul>
        </nav>
      </header>
    );
  }
