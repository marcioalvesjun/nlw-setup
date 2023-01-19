import { useState } from 'react'
import { Habits } from './components/Habits'
import './styles/global.css'

function App() {
  return (
    <>
      <Habits completed={10} />
      <Habits completed={20} />
      <Habits completed={30} />
    </>
  )
}

export default App
