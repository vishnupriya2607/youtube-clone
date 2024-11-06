import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(''); // Initialize category state

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route 
          path='/' 
          element={<Home sidebar={sidebar} category={category} setCategory={setCategory} />} 
        />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} />
      </Routes>
    </div>
  );
};

export default App;
