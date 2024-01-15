import React from 'react'

export const Avatar = ({ url }) => {
    return (
        <div>
            <div style={{ backgroundImage: `url("${'data:image/jpeg;base64,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'}")` }} className="h-10 w-10 bg-center bg-cover rounded-full"></div>
        </div>
    )
}
