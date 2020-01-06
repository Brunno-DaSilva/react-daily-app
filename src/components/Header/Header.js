import React from 'react';
import './header.css';

function Header() {

    return (
        <div className="navbar">
            <div className="navbar-items">
                <div> <img src="https://res.cloudinary.com/duprwuo4j/image/upload/c_scale,w_155/v1574831158/imgs_starwars/imgs/BLOGO_k36v5y.png"
                    alt="logo" />
                </div>
                <div><a href="#">Home</a></div>
                <div><a href="#"> About</a></div>
                <div><a href="#">Contact</a></div>
            </div>
        </div>
    )
}

export default Header