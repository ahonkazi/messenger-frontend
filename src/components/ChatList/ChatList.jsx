import React from 'react'

import ChatListHeader from './ChatListHeader';
import ConversationList from './ConversationList';

const ChatList = () => {
    return (
        <aside className='flex w-full lg:w-[420px] shrink-0 flex-col h-screen '>
            <ChatListHeader />
            <ConversationList />
        </aside>
    )
}

export default ChatList