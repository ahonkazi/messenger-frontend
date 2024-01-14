
"use client"
import React, { useState, useRef } from 'react';

function DragAndDropImage({image,setImage}) {
    const inputRef = useRef(null);

    const handleDrop = (event) => {
        event.preventDefault();
        let file = null;
        if (event.dataTransfer) {
            file = event.dataTransfer.files[0]
        } else {
            file = event.target.files[0];
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };


    return (
        <div className="flex items-center justify-center">
            <label htmlFor="profilePic">
                <div
                    className="border border-dashed border-gray-400 rounded-lg p-8 flex items-center justify-center hover:bg-base-200 cursor-pointer"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                >
                    {image && <img src={image} alt="Uploaded Image" className="w-64 h-64 rounded-lg object-cover" />}
                    {!image && <div>Drag and drop an image here, or click to select</div>}
                </div>
                <input type="file" ref={inputRef} id='profilePic' onChange={(e) => handleDrop(e)} style={{ display: 'none' }} />

            </label>

        </div>
    );
}

export default DragAndDropImage;