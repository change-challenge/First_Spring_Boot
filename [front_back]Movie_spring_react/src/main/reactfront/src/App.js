import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Detail from './routes/Detail'
import Header from './containers/Header'

const App = () => {
    return (
        <Suspense fallback={<div>loading APP</div>}>
            <Router>
                <Header />
                <Routes>
                    <Route
                        path={process.env.PUBLIC_URL + '/'}
                        element={<Home />}
                    />
                    <Route
                        path={process.env.PUBLIC_URL + '/movie/:id'}
                        element={<Detail />}
                    />
                </Routes>
            </Router>
        </Suspense>
    )
}
export default App
