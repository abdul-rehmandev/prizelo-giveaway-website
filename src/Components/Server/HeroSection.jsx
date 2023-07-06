import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Counter from '../Client/Counter'
import Creator from './Creator'

const HeroSection = () => {
    return (
        <div className="container heroSection-container">
            <h1>Unlock Your Winning Potential with <span>Prizelo</span> - We Empowers The Creators!</h1>
            <p>Welcome to <b>Prizelo</b>, the ultimate destination for exciting giveaways and incredible prizes. We bring you a platform where you can participate in various contests and sweepstakes to win amazing rewards.</p>
            <Link href="/" className='link heroSecion-loginBtn'>Login to participate</Link>
            <div className="featured">
                <h3><Image width="30" height="30" src="/Images/featuredGiveaway.gif" alt="fire-element" />Hot Giveaway<Image width="30" height="30" src="/Images/featuredGiveaway.gif" alt="fire-element" /></h3>
                <div className='content'>
                    <div>
                        Announced By : <Link href="/" className='link creatorName'>Mr Jay Plays </Link><Image width="24" height="24" src="https://img.icons8.com/fluency/24/filled-star.png" alt="filled-star" />
                        <span>4.8</span>
                    </div>
                    <div>
                        Prize : 5 Gta V Giveaways
                    </div>
                    <div>
                        Participants : 1200
                    </div>
                    <span>Open Until : <Counter /> </span>
                </div>
                <div className='text-center'>
                    <Link href="/" className='link participateLink'>Participate</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection