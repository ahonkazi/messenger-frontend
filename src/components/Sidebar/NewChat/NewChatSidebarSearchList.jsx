"use client"
import { Avatar } from '@/components/Avatar/Avatar'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'

const NewChatSidebarSearchList = () => {
    return (
        <Scrollbars style={{ height: '100%' }}
            thumbMinSize={30}
            thumbSize={130}
            universal={true}

            renderThumbVertical={() =>
                <div className='bg-base-100 rounded-lg' />
            }
        >
            <div className=" flex flex-col">
                {[...new Array(20)].map((item, index) => <UserItem key={index} />)}
            </div>
        </Scrollbars>
    )
}

export default NewChatSidebarSearchList

const UserItem = () => {
    return (
        <div className="flex cursor-pointer hover:bg-base-100 duration-300 px-4 py-4 gap-x-4">
            <Avatar size={50} />
            <div className="">
                <p>Sidratul Muntaha Sneha</p>
                <p className='text-sm opacity-90'>𝖘𝖎𝖑𝖆𝖓𝖙 𝖐𝖎𝖑𝖑𝖊𝖗</p>
            </div>
        </div>
    )
}