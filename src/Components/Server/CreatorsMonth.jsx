import Image from 'next/image'
import React from 'react'
import Creator from './Creator'

const CreatorsMonth = () => {
    return (
        <div className="container creatorsMonth-container">
            <div className='text-center'>
                <h2><Image src="/Images/logo.png" width={50} height={50} alt='logo' /> Creators For <span>You</span></h2>
            </div>
            <div className="creators">
                <Creator />
                <Creator />
                <Creator />
                <Creator />
                <Creator />
            </div>
        </div>
    )
}

export default CreatorsMonth