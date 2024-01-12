import ChatList from '@/components/ChatList/ChatList'
import React from 'react'

const ChatWrapper = ({ children }) => {
    return (
        <>
            <div className='flex flex-row'>
                <ChatList />
                <div className="w-full bg-slate-200 h-screen">
                    {children}
                </div>
            </div>
        </>
    )
}

export default ChatWrapper