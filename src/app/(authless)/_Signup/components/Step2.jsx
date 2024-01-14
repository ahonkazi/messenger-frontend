import React from 'react'

const Step2 = ({ nextStep }) => {
    return (
        <div className="step-2 px-2">
            <div className="modal__header py-2">
                <p className='text-3xl'>Varify email</p>
            </div>
            <form className="">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Security key</span>
                    </label>
                    <input type="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control mt-4">
                    <button onClick={() => nextStep()} className="btn btn-primary">Next</button>
                </div>

            </form>
        </div>

    )
}

export default Step2