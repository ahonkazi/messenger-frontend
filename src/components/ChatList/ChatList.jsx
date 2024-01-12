import React from 'react'

import ChatListHeader from './ChatListHeader';
import ConversationList from './ConversationList';

const ChatList = () => {
    return (
        <aside className='flex w-[440px] shrink-0 flex-col h-screen '>
            <ChatListHeader />
            <ConversationList />
        </aside>
    )
}

export default ChatList