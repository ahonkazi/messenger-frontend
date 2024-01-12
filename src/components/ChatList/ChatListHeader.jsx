import React from 'react'
import { RiChatNewFill } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
const ChatListHeader = () => {
    return (
        <div className="chatlist-header shrink-0">
            <div className="user__info container__area bg-base-200 justify-between flex items-center">
                <div className="profile-avatar  flex items-center justify-center">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <button className="btn btn-sm text-xl btn-icon btn-circle"><RiChatNewFill /></button>
                    <button className="btn btn-sm text-xl btn-icon btn-circle"><HiOutlineDotsVertical /></button>
                </div>
            </div>
            <div className="search__conversation w-full  container__area">
                <input type="text" placeholder="Type here" className="input bg-base-200  input-sm w-full" />
            </div>
        </div>)
}

export default ChatListHeader