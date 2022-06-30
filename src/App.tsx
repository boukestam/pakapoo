import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Generate } from './pages/generate';
import { Number } from './pages/number';

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen text-white bg-slate-900">
      <img src="/pakapoo.png" alt="Pakapoo" className="max-w-full mt-4 mb-20 sm:mb-40" />

      <Router>
        <Routes>
          <Route path="/generate" element={<Generate />} />
          <Route path="/lottery/:lotteryIndex" element={<Number />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
