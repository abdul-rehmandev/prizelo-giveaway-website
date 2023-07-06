import React from 'react'
import Counter from '../Client/Counter'
import Link from 'next/link'
import Image from 'next/image'

const Giveaway = () => {
    return (
        <div className='giveawayBox'>
            <div className="name">
                <h3>Account Giveaway</h3>
            </div>
            <div className="creator">
                <span>Announced By: <b>Mr Jay Plays</b></span>
            </div>
            <div className="prize">
                <span>Prize: <b>1500 /PKR</b></span>
            </div>
            <div className="prize">
                <span>Participants: <b>42</b></span>
            </div>
            <div className="counter">
                <span>Open Until : <Counter /></span>
            </div>
            <div className="rating">
                <span>Creator Rating :</span>
                <Image width="24" height="24" src="https://img.icons8.com/fluency/24/filled-star.png" alt="filled-star" />
                <span>4.8</span>
            </div>
            <div className='giveAwayActions'>
                <Link href="/creators/jayplays" className='link'>Creator Profile</Link>
                <Link href="/" className='link'>Participate</Link>
            </div>
        </div>
    )
}

export default Giveaway