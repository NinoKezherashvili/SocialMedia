
import { Routes, Route } from 'react-router'
import { Navbar } from './components/NavBar'
import { Home } from './pages/Home'

import CreatePostPage from './pages/CreatePostPage'
import { PostPage } from './pages/PostPage'
import CreateCommunityPage from './pages/CreateCommunityPage'

function App() {

  return (
    <div className="min-h-screen bg-black text-gray-100 transition-opacity duration-700 pt-20">
      <div className="container mx-auto px-4 py-6">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreatePostPage />} />
          <Route path='/community/create' element={<CreateCommunityPage />} />
          <Route path='/post/:id' element={<PostPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
