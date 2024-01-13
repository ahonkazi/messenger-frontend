"use client"
import React, { useEffect, useRef, useState } from 'react'
import { IoAdd } from "react-icons/io5";
import { LuSendHorizonal } from 'react-icons/lu';

const ChatFooter = () => {
    const [inputText, setInputText] = useState('');
    const [formatedText, setFormatedText] = useState('');
    const chatInputRef = useRef(null);
    const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && event.shiftKey) {
            event.preventDefault();
            setInputText((prevText) => prevText + "\n");
        } else if (event.key === "Enter") {
            event.preventDefault();
            setInputText((prevText) => prevText + "<br>");
        }
    };

    const handleInputChange = (event) => {
        const wrappedTextInput = event.target.textContent;
        const wrappedText = wrappedTextInput.replace(emojiRegex, '<span class="emoji">$1</span>');
        setInputText(wrappedTextInput);
        setFormatedText(wrappedText);
    };

    useEffect(() => {
        console.log(formatedText);
    }, [formatedText]);

    return (
        <div className='shrink-0 h-auto  bg-base-200 container__area flex items-center gap-x-4'>
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
                <div className="input rounded-md w-full h-auto py-3 border flex items-center bg-base-100 border-base-300">
                    <div
                        ref={chatInputRef}
                        contentEditable
                        suppressContentEditableWarning
                        className="w-full h-full bg-transparent border-none outline-none"
                        onInput={(e) => handleInputChange(e)}
                        onKeyDown={(e) => handleKeyDown(e)} // Attach to onKeyDown
                    />
                </div>
            </div>

            <button className='text-2xl btn hover:bg-transparent px-0 hover:border-transparent shrink-0'>
                <LuSendHorizonal />
            </button>
        </div >
    )
}

export default ChatFooter