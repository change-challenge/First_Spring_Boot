import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import About from './pages/About'
import Counter from './pages/Counter'
import Home from './pages/Home'
import Input from './pages/Input'
import Input2 from './pages/Input2'
import List from './pages/List'
import Num from './pages/Num'
import Axios from './pages/Axios'
import TodoList from './pages/TodoList'
import Coin from './pages/Coin'
import CoinAnswer from './pages/CoinAnswer'

export default function App() {
    return (
        <div>
            <nav>
                <Link style={{ margin: '5px' }} to="/">
                    Home
                </Link>
                <Link style={{ margin: '5px' }} to="/Coin">
                    Coin
                </Link>
                <Link style={{ margin: '5px' }} to="/CoinAnswer">
                    CoinAnswer
                </Link>
                <Link style={{ margin: '5px' }} to="/TodoList">
                    TodoList
                </Link>
                <Link style={{ margin: '5px' }} to="/about">
                    About
                </Link>
                <Link style={{ margin: '5px' }} to="/login">
                    Login
                </Link>
                <Link style={{ margin: '5px' }} to="/counter">
                    Counter
                </Link>
                <Link style={{ margin: '5px' }} to="/input">
                    Input
                </Link>
                <Link style={{ margin: '5px' }} to="/input2">
                    Input2
                </Link>
                <Link style={{ margin: '5px' }} to="/list">
                    List
                </Link>
                <Link style={{ margin: '5px' }} to="/num">
                    Num
                </Link>
                <Link style={{ margin: '5px' }} to="/axios">
                    Axios
                </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Coin" element={<Coin />} />
                <Route path="/CoinAnswer" element={<CoinAnswer />} />
                <Route path="/TodoList" element={<TodoList />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/input" element={<Input />} />
                <Route path="/input2" element={<Input2 />} />
                <Route path="/list" element={<List />} />
                <Route path="/num" element={<Num />} />
                <Route path="/axios" element={<Axios />} />
            </Routes>
        </div>
    )
}
