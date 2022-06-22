import React from 'react';

import Contract from './components/contract/contract';
import Contracts from './components/contracts';
import Header from './components/header';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <div className="flex-initial w-64 p-4">
          <Contracts />
        </div>

        <div className="flex justify-center flex-1 p-4">
          <Contract />
        </div>
      </div>
    </div>
  );
}

export default App;
