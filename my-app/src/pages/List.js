import React, { useState } from 'react'

const User = ({ userData }) => {
    const { name, email } = userData

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
    )
}

const UserList = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleAddUser = () => {
        if (name !== '' && isValidEmail(email)) {
            const newUser = { name, email }
            setUsers([...users, newUser])
            setName('')
            setEmail('')
        }
    }

    const isValidEmail = email => {
        // 이메일 유효성 검사 로직을 구현하세요
        // 예: 정규식을 사용하여 이메일 형식을 확인
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    return (
        <div>
            <div>
                <label>이름</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <label>이메일</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <button onClick={handleAddUser}>확인</button>

            <table>
                <thead>
                    <tr>
                        <th style={{ width: '100px' }}>이름</th>
                        <th style={{ width: '300px' }}>이메일</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <User key={index} userData={user} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList
