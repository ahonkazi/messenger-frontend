import ChatWrapper from '@/layout/ChatWrapper'
import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <ChatWrapper>
            {children}
        </ChatWrapper>
    )
}

export default AuthLayout