"use client"
import React from 'react'
import { RiChatNewFill } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { setNewChatSidebarStatus } from '@/redux/features/theme/ThemeSlice';
import Link from 'next/link';
const ChatListHeader = () => {
    const dispatch = useDispatch()
    return (
        <div className="chatlist-header shrink-0">
            <div className="user__info h-[60px] container__area bg-base-100 justify-between flex items-center">
                <div className="profile-avatar  flex items-center justify-center">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-x-1 ">
                    <div className="">
                        <button onClick={() => dispatch(setNewChatSidebarStatus(true))} className="btn  btn-icon btn-circle"><RiChatNewFill /></button>
                    </div>
                    <div className="">
                        <button className="btn  btn-icon btn-circle"><HiOutlineDotsVertical /></button>
                    </div>
                    <div className="lg:hidden">
                        <Link href={'/login'} className="btn  btn-icon btn-circle"><AiOutlineLogin /></Link>
                    </div>
                </div>
            </div>
            <div className="search__conversation w-full bg-base-200  container__area">
                <input type="text" placeholder="Type here" className="input bg-base-100  input-sm w-full" />
            </div>
        </div>
    )
}

export default ChatListHeader