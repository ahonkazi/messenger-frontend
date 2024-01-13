"use client"
import React, { useEffect, useRef, useState } from 'react'
import { IoAdd } from "react-icons/io5";
import { LuSendHorizonal } from 'react-icons/lu';

const ChatFooter = () => {
    const messageFieldRef = useRef();
    const [placeHolderStatus, setPlaceholderStatus] = useState(true);
    const handleSubmit = () => {
        event.preventDefault();
        console.log(formatEmoji(messageFieldRef.current.innerHTML))
    }
    const handleKeyUp = (event) => {
        if (event.shiftKey && event.key === "Enter") {
            handleSubmit(); // Prevent default line break behavior

        }
    }
    const handleInput = (e) => {
        if (e.target.innerText == "\n") {
            setPlaceholderStatus(true)
        } else {
            setPlaceholderStatus(false)
        }
    }
    const handleFocus = () => {
        console.log('focused');

    }
    const formatEmoji = (text) => {
        const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
        const wrappedText = text.replace(emojiRegex, '<span class="emoji">$1</span>')
        return wrappedText;
    }
    return (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} className='shrink-0 h-auto  bg-base-200 container__area flex items-center gap-x-4'>
            <div className="left__controll">
                <button className='shrink-0'>
                    <label className="btn min-h-0 btn-icon shrink-0 !p-0 text-2xl bg-base-100 shadow-lg  btn-circle swap swap-rotate">
                        <input type="checkbox" hidden />
                        <p className='swap-off rounded-full'><IoAdd /></p>
                        <p className='swap-on rounded-full rotate-45'><IoAdd /></p>

                    </label>
                </button>
            </div>
            <div className="input-field rounded-md w-full max-h-[80px] overflow-y-auto">
                <div onFocus={(e) => handleFocus(e)} role='textbox' className={`input ${placeHolderStatus && ('placeholder')} rounded-md w-full h-auto py-3 border flex items-center bg-base-100 border-base-300`}>
                    <div
                        ref={messageFieldRef}
                        contentEditable
                        onInput={handleInput}
                        onKeyDown={handleKeyUp}
                        suppressContentEditableWarning
                        className={`w-full h-full bg-transparent border-none outline-none`}
                        role='textbox'
                    >
                    </div>

                </div>
            </div>

            <button type='submit' className='text-2xl btn hover:bg-transparent px-0 hover:border-transparent shrink-0'>
                <LuSendHorizonal />
            </button>
        </form >
    )
}

export default ChatFooter