"use client"
import DragAndDropImage from '@/components/select/DragAndDrop';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Step4 = ({ nextStep }) => {
    const optional = `(optional)`;
    const [image, setImage] = useState(null);
    const router = useRouter()
    return (
        <div className="step-4 px-2">
            <div className="modal__header py-2">
                <p className='text-3xl'>Almost done</p>
                <p>Signup has been completed! Now you can add your profile picture but it&apos;s optional.</p>
            </div>
            <form className="">

                <div className="form-control">
                    <DragAndDropImage image={image} setImage={setImage} />
                </div>

                <div className="form-control mt-4">
                    <button onClick={() => router.replace('/t/5411411')} className="btn btn-primary">Finish</button>
                </div>

            </form>
        </div>

    )
}

export default Step4