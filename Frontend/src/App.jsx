import './App.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login/Login'
import { Layout } from './components/Layout'
import { Register } from './components/Register/Register'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Post/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Route>
    </Routes>
  )
}

export default App
