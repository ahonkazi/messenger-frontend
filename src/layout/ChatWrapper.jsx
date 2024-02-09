import ChatList from '@/components/ChatList/ChatList'
import { NewChatSidebar } from '@/components/Sidebar/NewChat/NewChatSidebar'
import React from 'react'

const ChatWrapper = ({ children }) => {
    return (
        <>
            <div className='flex flex-row'>
                <ChatList />
                <div className="w-full hidden lg:block h-screen">
                    {children}
                </div>
            </div>

            <NewChatSidebar />
        </>
    )
}

export default ChatWrapper

export const ChatWrapperMessages = ({ children }) => {
    return (
        <>
            <div className='hidden lg:block'>
                <div className='flex flex-row'>
                    <ChatList />
                    <div className="w-full  h-screen">
                        {children}
                    </div>
                </div>

                <NewChatSidebar />
            </div>
            <div className='lg:hidden'>
                <div className='flex flex-row'>
                    <div className="w-full  h-screen">
                        {children}
                    </div>
                </div>
            </div>


        </>
    )
}