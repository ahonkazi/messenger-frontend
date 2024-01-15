"use client"
import React, { useEffect, useRef } from 'react'
import { IoMdClose } from "react-icons/io";
import { Avatar } from '../Avatar/Avatar';
import Scrollbars from 'react-custom-scrollbars-2';
export const OutgoingRemoveMessageModal = ({ deleteModalStatus, setDeleteModalStatus }) => {
    return (
        <>
            <input type="checkbox" id="deleteMessage" checked={deleteModalStatus} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-medium text-base">Who do you want to delete this message for?</h3>
                    <div className="">
                        <div className="form-control mt-2">
                            <label className="label flex justify-start gap-x-4 text-start cursor-pointer">
                                <input type="radio" checked className="radio radio-sm radio-primary" />
                                <span className="label-text ">Unsent for everyone</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label flex justify-start gap-x-4 text-start cursor-pointer">
                                <input type="radio" checked={false} className="radio radio-sm radio-primary" />
                                <span className="label-text ">Remove for you</span>
                            </label>
                        </div>
                    </div>
                    <div className="modal-action  grid grid-cols-2">
                        <label htmlFor="deleteMessage" onClick={() => setDeleteModalStatus(false)} className="btn font-medium">Close</label>
                        <label htmlFor="deleteMessage" onClick={() => setDeleteModalStatus(false)} className="btn btn-primary font-medium  ">Remove</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export const IncomingDeleteMessageModal = ({ deleteModalStatus, setDeleteModalStatus }) => {
    return (
        <div>
            <input type="checkbox" id="deleteMessage" checked={deleteModalStatus} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-medium text-lg">Remove for you?</h3>

                    <div className="modal-action  grid grid-cols-2">
                        <label htmlFor="deleteMessage" onClick={() => setDeleteModalStatus(false)} className="btn font-medium">Close</label>
                        <label htmlFor="deleteMessage" onClick={() => setDeleteModalStatus(false)} className="btn btn-primary font-medium  ">Remove</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ForwardMessageModal = ({ forwardMessageModalStatus, setForwardMessageModalStatus }) => {

    return (
        <>
            <div>
                <input type="checkbox" checked={forwardMessageModalStatus} id="deleteMessage" className="modal-toggle" />
                <div className="modal" role="dialog">

                    <div className="modal-box px-2">
                        <div className="relative text-center px-4">
                            <h3 className="font-medium text-lg ">Forward</h3>
                            <div className="absolute top-[50%] right-2 -translate-y-[50%]">
                                <button onClick={() => setForwardMessageModalStatus(false)} className='btn   btn-icon btn-circle text-lg w-8 h-8 min-h-8'>
                                    <IoMdClose />
                                </button>
                            </div>
                        </div>
                        <div className="divider"></div>

                        <Scrollbars
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                            autoHeight
                            autoHeightMin={0}
                            autoHeightMax={400}
                            thumbMinSize={30}
                            thumbSize={100}
                            universal={true}
                        >
                            <div className="modal-body px-4">
                                <div className="">
                                    <p>Recent</p>
                                    <div className="users flex gap-y-4 flex-col py-4">
                                        {
                                            [...new Array(5)].map((item, index) =>
                                                <div key={index} className="user_item flex justify-between items-center">
                                                    <div className="user__profile flex items-center gap-x-3">
                                                        <Avatar />
                                                        <p className='text-base'>Sidratul Muntaha Sneha</p>
                                                    </div>
                                                    <button className='btn min-h-0 font-medium h-8'>Send</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="divider"></div>

                                <div className="">
                                    <p>Contacts</p>
                                    <div className="users flex gap-y-4 flex-col py-4">
                                        {
                                            [...new Array(10)].map((item, index) =>
                                                <div key={index} className="user_item flex justify-between items-center">
                                                    <div className="user__profile flex items-center gap-x-3">
                                                        <Avatar />
                                                        <p className='text-base'>Sidratul Muntaha Sneha</p>
                                                    </div>
                                                    <button className='btn min-h-0 font-medium h-8'>Send</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </Scrollbars>
                    </div>
                </div>
            </div>

        </>
    )
}