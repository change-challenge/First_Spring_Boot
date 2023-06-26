import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/theme'
import { Header, Footer } from './components/index'
import Main from './pages/Main/index'
import Login from './pages/Login/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  </React.StrictMode>
)
