"use client"
import { ForwardMessageModal, IncomingDeleteMessageModal } from '@/components/Modals/Modals';
import { setShow, toggleMessageMenu } from '@/redux/features/theme/ThemeSlice';
import React, { useState } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

export const Incoming = ({ id, notEnd = false, hasImage = false, message = '', url = "data:image/jpeg;base64,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" }) => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const handleMouseLeave = () => {
        if (!theme.messageMenu.status) {

            dispatch(setShow({ status: false, id: 0 }))
        }
    }
    const handleMouseEnter = () => {
        if (!theme.messageMenu.status) {
            dispatch(setShow({ status: true, id: id }))

        }

    }
    let content = null;
    if (hasImage === false && message !== '') {
        content = <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`chat-bubble group relative !min-h-3 !py-1 ${notEnd && ('not-end')}`}>
            <MessageOptions id={id} />
            {message}
        </div>;
    } else if (hasImage === true && message === '') {
        content = <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`chat-bubble group relative !min-h-3 !px-1 !py-1 ${notEnd && ('not-end')}`}>
            <MessageOptions id={id} />

            <div className="single-photo w-full">
                <img className='w-full h-auto object-cover rounded-2xl' src={url} alt="" />
            </div>
        </div>
    }
    else if (hasImage === true && message !== '') {
        content = <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`chat-bubble group !min-h-3 !px-1 !py-1 ${notEnd && ('not-end')}`}>

            <MessageOptions id={id} />

            <div className="single-photo w-full">
                <img className='w-full h-auto object-cover rounded-2xl' src={url} alt="" />
            </div>
            <p className='px-1 py-1' dangerouslySetInnerHTML={{ __html: message }}></p>
        </div >
    }

    return (
        <div className="flex w-full justify-start">
            <div className="chat w-[50%] shrink-0 chat-start">
                {content}

            </div>
        </div>
    )
}

const MessageOptions = ({ open, setOpen, id }) => {
    const [deleteModalStatus, setDeleteModalStatus] = useState(false)
    const [forwardMessageModalStatus, setForwardMessageModalStatus] = useState(false)

    const dispatch = useDispatch()
    const [position, setPosition] = useState('bottom')
    const theme = useSelector(state => state.theme)
    const handleClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const offsetTopFromViewport = rect.top + window.pageYOffset;
        console.log(offsetTopFromViewport);
        if (offsetTopFromViewport > 250) {
            setPosition('top')
        } else {
            setPosition('bottom')
        }
        if (theme.messageMenu.status && theme.messageMenu.id === id) {
            dispatch(toggleMessageMenu({ id: 0 }))
            dispatch(setShow({ status: false, id: 0 }))
        }
        if (theme.messageMenu.status == false) {
            dispatch(toggleMessageMenu({ id: id }))

        }
    }

    const handleClickOption = () => {
        dispatch(setShow({ status: false, id: 0 }));
        dispatch(toggleMessageMenu({ id: 0 }))

    }
    return (
        <>
            <div className={`absolute  ${theme.messageMenu.showButton.status && theme.messageMenu.showButton.id === id ? 'opacity-100 ' : 'opacity-0'} z-[10] left-full top-[50%] -translate-y-[50%] pl-4`}>
                <div className="relative">
                    <button onClick={(e) => handleClick(e)} className={`btn -z-[10] ${(theme.messageMenu.status === true && theme.messageMenu.id !== id) && 'pointer-events-none'} bg-transparent border-transparent hover:border-base-200 hover:bg-base-200 btn-sm text-xl btn-icon btn-circle`}><HiOutlineDotsVertical /></button>

                    {
                        (theme.messageMenu.status && theme.messageMenu.id === id) && (
                            <div className={`absolute z-[100] ${position === 'top' ? 'bottom-full -translate-y-4' : 'top-full translate-y-4'}  left-[50%] -translate-x-[50%]`}>
                                <div className="relative">
                                    <ul className="menu bg-base-200 w-44 rounded-box">
                                        <li><button onClick={() => { handleClickOption() }}>Message info</button></li>
                                        <li><button onClick={() => { setDeleteModalStatus(true); handleClickOption() }}>Remove</button></li>
                                        <li><button onClick={() => { setForwardMessageModalStatus(true); handleClickOption() }}>Forward</button></li>
                                        <li><button onClick={() => { handleClickOption() }}>Reply</button></li>
                                    </ul>
                                    <div className={`absolute  ${position === 'top' ? 'bottom-0 translate-y-2' : 'top-0 -translate-y-2'}  -z-10 rotate-45 left-[50%] -translate-x-[50%] w-7 h-7 bg-base-200`}></div>
                                </div>
                            </div>
                        )


                    }</div>
            </div>

            <IncomingDeleteMessageModal setDeleteModalStatus={setDeleteModalStatus} deleteModalStatus={deleteModalStatus} />
            <ForwardMessageModal forwardMessageModalStatus={forwardMessageModalStatus} setForwardMessageModalStatus={setForwardMessageModalStatus} />
        </>
    )
}