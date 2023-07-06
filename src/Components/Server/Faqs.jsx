import React from 'react'

const Faqs = () => {
    return (
        <div className="container faqs-container">
            <h2>Frequently Asked Question</h2>
            <div className="faqs">
                <details>
                    <summary>How does the prizelo work?</summary>
                    <div className="faq__content">
                        <p>The giveaway website provides a platform where creators announce giveaways for users to participate in. Users can enter the giveaways, and winners are selected randomly or through specific criteria. The website facilitates the process, manages entries, and ensures fairness.</p>
                    </div>
                </details>
                <details>
                    <summary>How can I participate in a giveaway?</summary>
                    <div className="faq__content">
                        <p>To participate in a giveaway, you need to create an account on the website. Once registered, browse the available giveaways and follow the entry requirements specified by the creator. This may include actions like subscribing to a YouTube channel, sharing a post, or completing a survey. Follow the instructions, and you'll be entered into the giveaway.</p>
                    </div>
                </details>
                <details>
                    <summary>How will I know if I win a giveaway?</summary>
                    <div className="faq__content">
                        <p>If you win a giveaway, you will be notified through the contact information provided during registration. This can include email, website notifications, or other communication channels. Make sure to keep an eye on your registered account and check your email regularly to stay updated on giveaway results.</p>
                    </div>
                </details>
            </div>
        </div>
    )
}

export default Faqs