import './App.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'

function App() {
  return (
    <Routes>
        <Route index element={
          <main>
            <Header/>
            <Post/>
          </main>
        } />
        {/* <Route path='login' element={<Login />} /> */}
        {/* <Route path='register' element={<div>Register</div>} /> */}
    </Routes>
  )
}

export default App
