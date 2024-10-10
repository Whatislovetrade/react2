import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello World'

const elem = (
  <div>
    <h2>{text}</h2>
    <input type="text" />
    <button>Click</button>
  </div>
)

// const elem = React.createElement('h2', {className: 'title'}, 'Hellow World')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);

