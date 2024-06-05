import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

function Navbar() {
    return (
        <nav className='nav'>
            <div className='logo'>
                <StaticImage src='../images/gatsby-icon.png' alt="icon" placeholder="blurred"
                    layout="fixed"
                    width={36} height={36} />
                <h1>Gatsby</h1>
            </div>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar