import Footer from '@/Components/Server/Footer'
import Navbar from '@/Components/Client/Navbar'
import ActiveGiveaways from '@/Components/Server/ActiveGiveaways'
import CreatorsMonth from '@/Components/Server/CreatorsMonth'
import Faqs from '@/Components/Server/Faqs'
import HeroSection from '@/Components/Server/HeroSection'
import Subscriptions from '@/Components/Server/Subscriptions'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar NavLink={1} />
            <HeroSection />
            <CreatorsMonth />
            <ActiveGiveaways />
            <Subscriptions />
            <Faqs />
            <Footer />
        </>
    )
}

export default page