import './App.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Layout } from './components/Layout'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Post/>} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<div>Register</div>} />
      </Route>
    </Routes>
  )
}

export default App
