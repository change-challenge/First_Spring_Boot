import React, { useState } from 'react'
import './App.css'

function App() {
    const [num, setNum] = useState(0)
    const [numList, setNumList] = useState([])

    const numRecord = () => {
        setNumList([...numList, num])
        setNum(0)
    }

    const numDelete = () => {
        setNumList(numList => numList.slice(0, numList.length - 1))
        //setNum(0)
    }

    return (
        <div className="App">
            <div>현재 숫자 : {num}</div>
            <button
                onClick={() => {
                    setNum(num + 1)
                }}
            >
                숫자 증가
            </button>
            <button
                onClick={() => {
                    setNum(num - 1)
                }}
            >
                숫자 감소
            </button>
            <button onClick={numRecord}>숫자 저장</button>
            <button onClick={numDelete}>숫자 삭제</button>
            <h1>저장된 숫자</h1>
            <ul>
                {numList.map(num => (
                    <li>{num}</li>
                ))}
            </ul>
        </div>
    )
}

export default App
