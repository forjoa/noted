import Aside from '@/components/Aside'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/components/Home'
import Note from '@/components/Note'

function App() {
  return (
    <div className='max-h-screen flex'>
      <BrowserRouter>
        <Aside />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/:id' Component={Note} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
