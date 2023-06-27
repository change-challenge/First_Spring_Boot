import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/theme'
import { Header, Footer } from './components/index'
import {
  Main,
  Login,
  SignUp,
  Admin,
  AdminBookList,
  AdminRentList,
  AdminUserList,
  AdminWishBookList,
} from './pages/index'

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
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/admin/*" element={<Admin />}>
              <Route index element={<AdminUserList />} />
              <Route path="userlist" element={<AdminUserList />} />
              <Route path="rentlist" element={<AdminRentList />} />
              <Route path="booklist" element={<AdminBookList />} />
              <Route path="wishbooklist" element={<AdminWishBookList />} />
            </Route>
          </Routes>

          <Footer />
        </Router>
      </ThemeProvider>
    </>
  </React.StrictMode>
)
