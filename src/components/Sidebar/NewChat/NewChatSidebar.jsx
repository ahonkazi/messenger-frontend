import React from 'react'
import { NewChatSidebarHeader } from './NewChatSidebarHeader'

export const NewChatSidebar = () => {
    return (
        <aside className='fixed top-0 left-0 z-[200] h-screen w-[420px] bg-base-100 border-r border-base-200'>
            <NewChatSidebarHeader />
        </aside>
    )
}
