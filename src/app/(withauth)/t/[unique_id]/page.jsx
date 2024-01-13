import React from 'react'
import ChatHeader from './_components/ChatHeader'
import ChatFooter from './_components/ChatFooter'

const MessagePage = () => {
    return (
        <section className='h-screen border-l flex flex-col border-base-100 bg-base-300 '>
            <ChatHeader />
            <div className="message-container h-full"></div>
            <ChatFooter />
        </section>
    )
}

export default MessagePage