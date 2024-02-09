import Link from 'next/link'
import React from 'react'

const StartChat = () => {
    return (
        <div className='w-full bg-base-300 h-full flex items-center justify-center'>
            <div className="text-center flex justify-center items-center  flex-col gap-y-4">
                <h2 className='text-gray-200 text-3xl'>Please explore login and signup pages</h2>
                <Link href={'/login'} className='bg-primary py-2 w-[200px] text-neutral'>Login</Link>
            </div>
        </div>
    )
}

export default StartChat