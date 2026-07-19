import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ProgressProvider } from './contexts/ProgressContext';
import './styles/variables.css';
import './styles/index.css';

function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ProgressProvider>
  );
}

export default App;
