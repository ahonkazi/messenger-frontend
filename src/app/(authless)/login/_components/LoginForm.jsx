"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginForm = ({ setModalStatus }) => {
    const router = useRouter()
    const processLogin = () => {
        location.replace('/')
    }
    return (
        <div className="right__form w-full shrink-0">
            <div className="shrink-0 w-full ">
                <form className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label text-end flex justify-end">
                            <a href="#" className="label-text link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-4">
                        <button onClick={processLogin} className="btn btn-primary">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <div className="form-control flex items-center gap-x-2 flex-row" >
                        <span className="label-text">Don't have an account?</span>
                        <button type='button' onClick={() => setModalStatus(true)} className="label-text link link-hover">Signup</button>

                    </div>
                </form>
            </div>
        </div>)
}

export default LoginForm