import React from 'react'

const LeftPart = ({ logo, image }) => {
    return (
        <div className="left-area hidden lg:block bg-base-200 w-full min-h-screen px-[50px]  py-[20px]">
            <div className="left__header">
                <img className='w-[50px]' src={logo} alt="" />

            </div>
            <div className="left__image flex-col items-center py-[50px] flex justify-center">
                <img className='w-[40%]' src={image} alt="" />

                <div className="left__content  mt-4 text-center prose flex flex-col justify-center items-center ">
                    <h1 className='lead  mb-0 emoji'>Premium chat feelings.</h1>
                    <blockquote className=' mt-2'>Only communication can build relationships between people.Login and start chatting with your partner.
                        --Ahon khan
                    </blockquote>
                </div>
            </div>

        </div>)
}

export default LeftPart