import Link from 'next/link'
import React from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { MdArrowBack } from 'react-icons/md'

const ChatHeader = () => {
    return (
        <div className="chat-header container__area border-b border-base-100 h-[60px]  shrink-0 bg-base-100 flex items-center justify-between w-full">
            <div className="flex items-center gap-x-4">
                <Link href={'/'} className='lg:hidden text-gray-50 text-xl'>
                    <MdArrowBack />
                </Link>
                <div className="user__info gap-x-4 flex items-center">
                    <div className="profile-avatar  flex items-center justify-center">
                        <div className="avatar online before:!w-[20%] before:!h-[20%]">
                            <div className="w-10 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-info">
                        <p className='text-base'>Sidratul muntaha</p>
                        <p className='text-xs'>Active now</p>
                    </div>

                </div>
            </div>
            <div className="">
                <button className="btn btn-sm text-xl btn-icon btn-circle"><HiOutlineDotsVertical /></button>
            </div>
        </div>)
}

export default ChatHeader