"use client"
import React from 'react'
import { NewChatSidebarHeader } from './NewChatSidebarHeader'
import NewChatSidebarSearchList from './NewChatSidebarSearchList'
import { useSelector } from 'react-redux'

export const NewChatSidebar = () => {
    const theme = useSelector(state => state.theme)

    return (
        <aside className={`fixed top-0 ${theme.newChatSidebar.status ? 'translate-x-0' : '-translate-x-full'} duration-300 flex-col flex left-0 z-[200] h-screen w-full md:w-[420px] bg-base-200`}>
            <NewChatSidebarHeader />
            <NewChatSidebarSearchList />
        </aside>
    )
}
