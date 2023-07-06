import Image from 'next/image'
import React from 'react'
import Giveaway from './Giveaway'
import Link from 'next/link'

const ActiveGiveaways = () => {
    return (
        <div className="container activeGiveaways-container">
            <div className='text-center'>
                <h2><Image src="/Images/logo.png" width={50} height={50} alt='logo' /> Active <span>Giveaways</span></h2>
            </div>
            <div className="allActive-giveaways">
                <Giveaway />
                <Giveaway />
                <Giveaway />
                <Giveaway />
                <Giveaway />
                <Giveaway />
                <Giveaway />
                <Giveaway />
                <Giveaway />
            </div>
            <div className='viewAll-giveaways text-center'>
                <Link href="/" className='link'>Explore All And Participate</Link>
            </div>
        </div>
    )
}

export default ActiveGiveaways