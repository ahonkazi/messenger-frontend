"use client"
import React, { useState } from 'react'
import logo from '../../../assets/site/logo-icon.png'
import image from './assets/login-image.svg'
import LeftPart from './_components/LeftPart'
import LoginForm from './_components/LoginForm'
import SignupModal from '../_Signup/SignupModal'
const LoginPage = () => {
    const [signupModalStatus, setSignupModalStatus] = useState(true)
    
    return (
        <div className='flex w-full flex-col lg:flex-row '>
            <LeftPart logo={logo.src} image={image.src} />

            <div className="right-form flex flex-col items-center justify-center lg:w-[450px]  min-h-screen shrink-0 px-4 lg:px-[50px]  py-[50px]">
                <div className="right__content  lg:hidden">
                    <img className='w-[50px]' src={logo.src} alt="" />

                </div>
                <LoginForm />
            </div>
            <SignupModal openStatus={signupModalStatus} setOpenStatus={setSignupModalStatus} />
        </div>
    )
}

export default LoginPage