import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/theme'
import Header from './components/Header/index'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <App />
      </ThemeProvider>
    </>
  </React.StrictMode>
)
