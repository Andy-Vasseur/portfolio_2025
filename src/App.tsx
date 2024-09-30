// Imports
import { Routes, Route } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';

// Components
import Message from './components/Message';
import Navigation from './components/Navigation';

function App() {

  return (
    <div className='w-screen m-w-screen max-w-screen h-screen min-h-screen max-h-screen bg-[#0C0C0C]'>
      <Message />
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

// Exports
export default App