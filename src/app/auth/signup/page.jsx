import Navbar from '@/Components/Client/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <div className="container registerContainer">
                <div className='left'>
                    <h1>Register</h1>
                    <div className="registerBox">
                        <div className='inputBox'><Image width="30" height="30" src="https://img.icons8.com/ios/30/user-male-circle--v1.png" alt="new-post--v1" /> <input type="text" placeholder='Username' /></div>
                        <div className='inputBox'><Image width="30" height="30" src="https://img.icons8.com/ios/30/new-post--v1.png" alt="new-post--v1" /> <input type="text" placeholder='Email' /></div>
                        <div className='inputBox'><Image width="30" height="30" src="https://img.icons8.com/ios/30/password--v1.png" alt="new-post--v1" /> <input type="password" placeholder='Password' /></div>
                        <button>Register</button>
                        <span className='redirectLink'>Already have an account? <Link href="/auth/login" className='link'>Login</Link></span>
                    </div>
                </div>
                <div className='right'>
                    <ul>
                        <li><b>Access to Giveaways:</b> Signing up grants users immediate access to a wide range of giveaways available on the platform. They can start participating in giveaways right away, increasing their chances of winning exciting prizes.</li>
                        <li><b>Personalized User Profile: </b> Provide users with a personalized user profile where they can showcase their interests, track their giveaway participation history, and manage their account settings. This helps users feel a sense of ownership and engagement with the platform.</li>
                        <li><b>Customer Support:</b> Offer dedicated customer support to registered users, providing timely assistance and resolving any queries or issues they may encounter. Prompt and personalized support enhances user satisfaction and trust in the platform.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default page