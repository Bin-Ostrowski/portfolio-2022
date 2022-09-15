import React from 'react';


export default function Nav() {
//see mod 20.1.6 if want to make links an array and map over

    return (
      <header>
        <h1>Robin Ostrowski</h1>
        <nav>
            <ul>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
            </ul>
        </nav>
      </header>
    );
  }
