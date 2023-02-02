import React from 'react';
import ReactDOM from 'react-dom/client';
import Apps from './wave';
import App from './text';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div>
      <Apps />
      <App />
    </div>
  </>
);