//First file to execute when "npm start"

import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; //Import the react file

const root = ReactDOM.createRoot(document.getElementById('root')); //Tells react where this user interface should be placed
root.render(<App />); //JSX is <App />
