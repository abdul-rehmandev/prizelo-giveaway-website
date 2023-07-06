import Image from 'next/image';
import React from 'react'

const Footer = () => {

    let currYear = new Date;
    currYear = currYear.getFullYear();

    return (
        <div className="container footerContainer">
            <h2>Prizelo - Win with trust.</h2>
            <p>Participating is easy! Simply register on our website and become a member of our vibrant community. Once you've signed up, you'll gain access to a multitude of giveaways that you can enter. We collaborate with renowned brands and influencers to bring you exclusive opportunities to win big.Get ready to embark on an exciting journey filled with opportunities to win fantastic prizes. Join <b>Prizelo</b> today and let the thrill of giveaways and the allure of prizes sweep you away!</p>
            <div className="social">
                <a href="/"><Image width="40" height="40" className='socialIcon' src="https://img.icons8.com/ios/40/facebook-new.png" alt="facebook-new" /></a>
                <a href="mailto:abdulrehmandev001@gmail.com"><Image width="40" height="40" className='socialIcon' src="https://img.icons8.com/ios/40/new-post--v1.png" alt="new-post--v1" /></a>
            </div>
            <div className='bottom'>
                <span>All rights reserved by prizelo || {currYear} </span>
            </div>
        </div>
    )
}

export default Footer