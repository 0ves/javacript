import { useState } from 'react'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider >
     <h1 className=' bg-black text-white w-full h-screenk'>assalmualiku</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
