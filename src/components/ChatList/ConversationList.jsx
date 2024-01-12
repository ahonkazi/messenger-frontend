"use client"
import React, { useRef } from 'react'
import ConversationItem from './ConversationItem'
import { useDispatch, useSelector } from 'react-redux'
import { toggleConversationMenu } from '@/redux/features/theme/ThemeSlice'

const ConversationList = () => {
    const wrapperRef = useRef()
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    if (typeof wrapperRef !== 'undefined') {
        wrapperRef.current?.addEventListener('scroll', (e) => {

            if (theme.conversationItem.status) {
                dispatch(toggleConversationMenu({ id: 0 }))
            }

        })
    }
    return (
        <div ref={wrapperRef} style={{ scrollbarWidth: 'thin' }} className='w-full overflow-y-auto h-full'>

            {
                [...new Array(18)].map((item, index) =>
                    <ConversationItem id={index + 1} time={'Just now'} active={true} seen={true} message='You unsent a message' name='Ahon khan' />

                )
            }
        </div>
    )
}

export default ConversationList