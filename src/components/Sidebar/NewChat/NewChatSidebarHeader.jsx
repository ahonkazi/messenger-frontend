"use client"
import { setNewChatSidebarStatus } from '@/redux/features/theme/ThemeSlice'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useDispatch } from 'react-redux'

export const NewChatSidebarHeader = () => {
    const dispatch = useDispatch()
    return (
        <div className='shrink-0'>
            <div className='h-[105px] container__area flex items-end bg-base-100'>
                <div className="flex py-2  items-center gap-x-4">
                    <button onClick={() => dispatch(setNewChatSidebarStatus(false))} className='btn btn-circle w-12 hover:bg-transparent border-none shadow-none outline-none bg-transparent text-2xl'>
                        <FiArrowLeft />
                    </button>
                    <p className='text-lg'>New chat</p>
                </div>
            </div>
            <div className="search__conversation w-full bg-base-200  container__area">
                <input type="text" placeholder="Search name" className="input bg-base-100  input-sm w-full" />
            </div>
        </div>
    )
}
