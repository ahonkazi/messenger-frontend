import React from 'react'

const Step1 = ({ nextStep }) => {
    return ( 
        <div className="step-1 px-2">
            <div className="modal__header py-2">
                <p className='text-3xl'>Signup now</p>
            </div>
            <form className="">
                <div className="grid grid-cols-2 gap-x-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-4">
                    <button onClick={() => nextStep()} className="btn btn-primary">Next</button>
                </div>
                <div className="divider">OR</div>
                <div className="form-control flex items-center gap-x-2 flex-row" >
                    <span className="label-text">Already have an account?</span>
                    <button className="label-text link link-hover">Login</button>

                </div>

            </form>
        </div>
        
        )
}

export default Step1