import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Creator = () => {
    return (
        <div className='creatorBox'>
            <div className="image-Section">
                <Image src="/Images/creator.jpg" className='creatorImage' width={100} height={100} alt='creatorImage' />
            </div>
            <div className="creatorName-Section">
                <b>Mr Jay Plays</b>
            </div>
            <span><b>15</b> Giveaway's Till Now.</span>
            <div className="creatorProfileLink-Section">
                <Link href="/creators/abdulrehman" className='link'>Visit Profile</Link>
            </div>
        </div>
    )
}

export default Creator