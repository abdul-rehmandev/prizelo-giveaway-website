"use client"
import Image from 'next/image'
import React from 'react'

const Search = () => {

    return (
        <div className='searchBox'>
            <div className='inputBox'>
                <input type="text" placeholder='Search a creator' />
                <Image width="30" height="30" className='navIcon' src="https://img.icons8.com/ios/30/search--v1.png" alt="search--v1" />
            </div>
        </div>
    )
}

export default Search