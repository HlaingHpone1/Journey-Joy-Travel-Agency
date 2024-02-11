import React from 'react'

const CheckBox = ({name, text}) => {
    return (
        <div>
            <div className="list">
                <input className="mr-2" type="checkbox" name={name} id={name} />
                <label htmlFor={name}>{text}</label>
            </div>
        </div>
    )
}

export default CheckBox
