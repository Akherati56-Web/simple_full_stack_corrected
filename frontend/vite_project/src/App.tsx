import './style.scss';
import DefRoutes from './routes/index';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />); 

// src/App.tsx 

import { useSelector } from 'react-redux';
import { AppState } from './reducers';

export default function App() {
  const theme = useSelector((state: AppState) => state.theme.theme);

  const appStyle = {
    background: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  return (

    <div style={appStyle}>
      <DefRoutes />
    </div>
  );
}; 
