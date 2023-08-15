import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Импорт react-router
import { SectionSideBar } from './components/SectionSideBar';
import { Footer } from './components/Footer';
import SectionLists from './components/SectionLists';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="app-container">
        <SectionSideBar />
        <div className="content">
          <Routes>
            <Route path="/:sectionId" element={<SectionLists />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;