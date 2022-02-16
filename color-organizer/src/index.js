import React from 'react';
import App from './components/App';
import './index.css';
import {render} from "react-dom"
import ColorProvider from './components/Color-Hooks';


render(
  <ColorProvider>
      <App />
  </ColorProvider>,
  document.getElementById("root")
);


