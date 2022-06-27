import React from 'react';

import Contract from './components/contract/contract';
import Contracts from './components/contracts';
import Header from './components/header';
import { useStore } from './store';

function App() {
  const { notifications, removeNotification } = useStore();

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

      <div className="fixed left-4 bottom-4">
        {notifications.map(notification => (
          <div
            className="px-4 py-2 mt-2 text-white bg-gray-800 rounded opacity-80"
            onClick={() => removeNotification(notification)}
          >
            {notification}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
