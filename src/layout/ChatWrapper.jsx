import ChatList from '@/components/ChatList/ChatList'
import { NewChatSidebar } from '@/components/Sidebar/NewChat/NewChatSidebar'
import React from 'react'

const ChatWrapper = ({ children }) => {
    return (
        <>
            <div className='flex flex-row'>
                <ChatList />
                <div className="w-full h-screen">
                    {children}
                </div>
            </div>

            <NewChatSidebar />
        </>
    )
}

export default ChatWrapper