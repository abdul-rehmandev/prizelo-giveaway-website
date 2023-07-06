import Navbar from '@/Components/Client/Navbar'
import Creator from '@/Components/Server/Creator'
import Footer from '@/Components/Server/Footer'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar NavLink={2} />
            <div className="container creatorsPage-container">
                <h1>Empower Your <span>Giveaways</span> and Connect with Your Audience - Overcome the Challenges, Unleash the Rewards!</h1>
                <h2 className='creatorspage-subheader'>Top Verified</h2>
                <div className="topCreators">
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                </div>
                <h2 className='creatorspage-subheader'>Recommended For You</h2>
                <div className="topCreators">
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                </div>
                <h2 className='creatorspage-subheader'>Creators of All Time</h2>
                <div className="topCreators">
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                    <Creator />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default page