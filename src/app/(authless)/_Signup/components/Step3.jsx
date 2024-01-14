import { SelectDefault } from '@/components/select/SelectField'
import { range } from '@/utils/Library'
import React, { useState } from 'react'

const Step3 = ({ nextStep }) => {
    const [year, setYear] = useState(2004)
    const [month, setMonth] = useState(7)
    const [day, setDay] = useState(14)
    return (
        <div className="step-2 px-2">
            <div className="modal__header py-2">
                <p className='text-3xl'>About you!</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Gender</span>
                    </label>
                </div>
                <div className="">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Male</span>
                            <input type="radio" name="gender" className="radio radio-sm radio-primary" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label  cursor-pointer">
                            <span className="label-text">Female</span>
                            <input type="radio" name="gender" className="radio radio-sm radio-primary" />
                        </label>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date of birth</span>
                    </label>
                </div>
                <div className="grid grid-cols-3 gap-x-4">
                    <SelectDefault data={range(1980, 2023)} label={'Year'} fieldName='year' selectedData={year} setSeletedData={setYear} />
                    <SelectDefault data={range(1, 12)} label={'Month'} fieldName='Month' selectedData={month} setSeletedData={setMonth} />
                    <SelectDefault data={range(1, 231)} label={'Day'} fieldName='Day' selectedData={day} setSeletedData={setDay} />
                </div>
                <div className="form-control mt-4">
                    <button onClick={() => nextStep()} className="btn btn-primary">Next</button>
                </div>

            </form>
        </div>

    )
}

export default Step3