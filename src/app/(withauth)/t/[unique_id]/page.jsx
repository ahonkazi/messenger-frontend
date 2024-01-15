import React from 'react'
import ChatHeader from './_components/ChatHeader'
import ChatFooter from './_components/ChatFooter'
import { DisplayMessage } from './_components/DisplayMessages/DisplayMessage'

const MessagePage = () => {
    return (
        <section  className='h-screen border-l  flex flex-col border-base-200 bg-base-300 '>
            <ChatHeader />
            <DisplayMessage />
            <ChatFooter />
        </section>
    )
}

export default MessagePage