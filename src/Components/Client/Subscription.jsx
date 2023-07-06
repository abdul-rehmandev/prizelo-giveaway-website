import Image from 'next/image'
import React from 'react'

const Subscription = ({ title, perks, size, zIndex, price }) => {

    const transformValue = `scale(${size})`;

    return (
        <div className='subscriptionBox' style={{ transform: transformValue, zIndex: zIndex }}>
            <div className="title">
                <h4>{title} <sup>{price}</sup></h4>
            </div>
            <hr />
            <div className="perks">
                {perks?.map((perk, index) => (
                    <span key={index}><Image width="30" height="30" src={`${perk.included ? "https://img.icons8.com/fluency/30/checked-2.png" : "https://img.icons8.com/emoji/30/cross-mark-button-emoji.png"} `} alt="checked-2" />{perk.title}</span>
                ))}
            </div>
            {title == "Free" ? "" : (
                <div className='subscriptionBtn'>
                    <button>Subscribe</button>
                </div>
            )}

        </div>
    )
}

export default Subscription