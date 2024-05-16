import { useState } from 'react'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider >
      <div className=' bg-black text-white h-screen flex justify-center align-middle'>
      <Login />
      <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
