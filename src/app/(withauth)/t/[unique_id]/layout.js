import { ChatWrapperMessages } from '@/layout/ChatWrapper'
import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <ChatWrapperMessages>
            {children}
        </ChatWrapperMessages>
    )


}

export default AuthLayout