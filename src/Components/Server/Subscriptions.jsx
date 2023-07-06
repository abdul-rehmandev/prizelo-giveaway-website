import Image from 'next/image'
import React from 'react'
import Subscription from '../Client/Subscription'

const Subscriptions = () => {

    const freeData = [
        {
            title: "Creator Portal Access",
            included: true
        },
        {
            title: "Limited Giveaways",
            included: true
        },
        {
            title: "2 Giveaways in a week",
            included: true
        },
        {
            title: "Track Record of Subscribers/Followers",
            included: true
        },
        {
            title: "Verified Badge",
            included: false
        }
    ]

    const premiumData = [
        {
            title: "Creator Portal Access",
            included: true
        },
        {
            title: "Limited Giveaways",
            included: true
        },
        {
            title: "10 Giveaways",
            included: true
        },
        {
            title: "Track Record of Subscribers/Followers",
            included: true
        },
        {
            title: "Verified Badge",
            included: true
        }
    ]

    const proData = [
        {
            title: "Creator Portal Access",
            included: true
        },
        {
            title: "Limited Giveaways",
            included: false
        },
        {
            title: "Unlimited Giveaways Access",
            included: true
        },
        {
            title: "Track Record of Subscribers/Followers",
            included: true
        },
        {
            title: "Verified Badge",
            included: true
        }
    ]

    return (
        <div className="container subscriptions-container">
            <div className='text-center'>
                <h2><Image src="/Images/logo.png" width={50} height={50} alt='logo' /> Subscription<span>Benefits </span></h2>
                <span className='text-danger'><b>*All these subscription are Only for creators*</b></span>
            </div>
            <div className="subscriptions">
                <Subscription title="Free" perks={freeData} />
                <Subscription title="Premium" perks={premiumData} size={1.1} zIndex={2} price={"$1 per month"} />
                <Subscription title="Pro" perks={proData} price={"$2 per month"} />
            </div>
        </div>
    )
}

export default Subscriptions