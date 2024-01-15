"use client"
import React from 'react'
import ConversationItem from './ConversationItem'
import { useDispatch, useSelector } from 'react-redux'
import { toggleConversationMenu } from '@/redux/features/theme/ThemeSlice'
import Scrollbars from 'react-custom-scrollbars-2'

const ConversationList = () => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
   
    const handleScroll = () => {
        if (theme.conversationItem.status) {
            dispatch(toggleConversationMenu({ id: 0 }))
        }
    }
    return (

        <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            style={{ height: '100%', width: '100%' }}
            thumbMinSize={30}
            thumbSize={130}
            universal={true}
            onScroll={handleScroll}
            className='bg-base-200'
        >
            <div >

                {
                    [...new Array(18)].map((item, index) =>
                        <ConversationItem id={index + 1} time={'Just now'} active={true} seen={true} message='You unsent a message' name='Ahon khan' />

                    )
                }
            </div>

        </Scrollbars>
    )
}

export default ConversationList