import React, { useState } from 'react'

const Input = () => {
    const [txtValue, setTextValue] = useState('')
    const [edit, setEdit] = useState(false)

    let content = (
        <div>
            {txtValue}
            <button
                onClick={() => {
                    setEdit(true)
                }}
            >
                수정
            </button>
        </div>
    )

    if (edit) {
        content = (
            <div>
                <input
                    type="text"
                    value={txtValue}
                    onChange={e => {
                        setTextValue(e.target.value)
                    }}
                ></input>
                <button
                    onClick={e => {
                        setEdit(false)
                    }}
                >
                    확인
                </button>
            </div>
        )
    }

    return <div>{content}</div>
}

export default Input
