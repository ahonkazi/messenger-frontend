"use client"
import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { LuCheckCheck } from "react-icons/lu";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import ConversationItemMenu from '../cards/ConversationItemMenu';
import { useDispatch, useSelector } from 'react-redux';
import { toggleConversationMenu } from '@/redux/features/theme/ThemeSlice';
const ConversationItem = ({ id, active, unread, seen, message = '', name = 'CHATEE USER', sent, time }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme)
    const handleClick = (e) => {
        // setMenuOpen(!menuOpen);
        let bottomed = window.innerHeight - e.pageY < 300
        dispatch(toggleConversationMenu({ id: id, positionY: !bottomed ? e.pageY : window.innerHeight - e.pageY, position: bottomed ? 'top' : 'bottom' }))
    }


    return (
        <div className={`conversation-item relative group select-none  ${active && 'active'} flex justify-between flex-row  gap-x-4`}>
            <div className="avatar__wrapper shrink-0">
                <div className="profile-avatar  flex items-center justify-center">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="message__wrapper w-full relative flex items-start justify-start">
                <div className="w-full">
                    <p className={`text-base ${unread && 'font-medium'}`}>{name}</p>
                    <div className="flex items-center gap-x-2">
                        {seen && (
                            <span className="text-sm text-primary">
                                <LuCheckCheck />
                            </span>
                        )}
                        {sent && (
                            <span className="text-sm text-primary">
                                <MdOutlineCheckCircleOutline />
                            </span>
                        )}
                        <p className={`text-sm ${unread && 'font-bold'}`}>{message}</p>
                    </div>
                </div>
                <div className="shrink-0 flex  flex-col h-full justify-between items-start">

                    <span className={`text-sm font-sans ${unread && 'text-primary'}`}>{time}</span>
                    <div className='flex items-center w-full justify-end gap-x-2'>
                        {unread && (<div className="badge badge-primary badge-sm"></div>)}

                    </div>

                </div>

                <div className="absolute group-hover:opacity-100 duration-100 opacity-0 top-[50%] -translate-y-[50%] right-0">
                    <button onClick={(e) => handleClick(e)} className="btn btn-sm text-xl btn-icon btn-circle"><HiOutlineDotsVertical /></button>
                </div>
            </div>


            <ConversationItemMenu position={theme.conversationItem.position} y={theme.conversationItem.positionY} opened={theme.conversationItem.id === id && theme.conversationItem.status} />


        </div>
    )
}

export default ConversationItem