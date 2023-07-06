import Navbar from '@/Components/Client/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <div className="container loginContainer">
                <div className='left'>
                    <h1>Login</h1>
                    <div className="loginBox">
                        <div className='inputBox'><Image width="30" height="30" src="https://img.icons8.com/ios/30/new-post--v1.png" alt="new-post--v1" /> <input type="text" placeholder='Email' /></div>
                        <div className='inputBox'><Image width="30" height="30" src="https://img.icons8.com/ios/30/password--v1.png" alt="new-post--v1" /> <input type="password" placeholder='Password' /></div>
                        <div className='forgotPass-Box'><Link href="/" className='link'>Forgot Password?</Link></div>
                        <button>Login</button>
                        <span className='redirectLink'>Don't have an account? <Link href="/auth/signup" className='link'>Register</Link></span>
                    </div>
                </div>
                <div className='right'>
                    <ul>
                        <li><b>Participate in Giveaways:</b> Logged-in users gain access to a wider range of giveaways compared to non-registered visitors. They can enter giveaways, increasing their chances of winning exciting prizes.</li>
                        <li><b>Personalized Recommendations:</b> Based on their preferences and participation history, logged-in users can receive personalized giveaway recommendations. This helps them discover relevant giveaways that align with their interests.</li>
                        <li><b>Account Dashboard:</b> Provide users with a personalized account dashboard where they can view their entered giveaways, track their progress, and manage their participation. The dashboard creates a convenient and centralized hub for their giveaway activities.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default page