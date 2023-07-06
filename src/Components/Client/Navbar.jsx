import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = ({ NavLink }) => {
    return (
        <div className="container navbar-container">
            <div className='navLeft'>
                <Link href="/" className='link'>
                    <Image src="/Images/logo.png" width={50} height={50} alt='logo' />
                    <h1>Prizelo</h1>
                </Link>
            </div>
            <div className='navRight'>
                <Link href="/" className={`link ${NavLink == 1 ? "active" : ""}`}>Home</Link>
                <Link href="/creators" className={`link ${NavLink == 2 ? "active" : ""}`}>Creators</Link>
                <Link href="/giveaways" className={`link ${NavLink == 3 ? "active" : ""}`}>Giveaways</Link>
                <Link href="/" className='link'>Terms & Conditions</Link>
                <Link href="/" className='link'>Contact Us</Link>
                <Image width="30" height="30" className='navIcon' src="https://img.icons8.com/ios/30/search--v1.png" alt="search--v1" />
                <Link href="/auth/login"><Image width="30" height="30" src="https://img.icons8.com/ios/30/user-male-circle--v1.png" alt="user-male-circle--v1" /></Link>
            </div>
        </div>
    )
}

export default Navbar