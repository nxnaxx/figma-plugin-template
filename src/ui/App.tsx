import { useState } from 'react';

import logo from './assets/logo.svg';

import './App.scss';

function App() {
  const [count, setCount] = useState<number>(5);

  const handleCreate = () => {
    if (count < 1) return;
    parent.postMessage({ pluginMessage: { type: 'createRectangles', count } }, '*');
  };

  const handleCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  return (
    <div className="container">
      <img src={logo} />
      <h2>Rectangle Creator</h2>
      <p>
        Count:
        <input
          type="number"
          name="count"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </p>
      <button className="create-btn" onClick={handleCreate}>
        Create
      </button>
      <button className="cancel-btn" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}

export default App;
