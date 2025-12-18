import { Route, Routes } from 'react-router';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Landing />}
      />
      <Route
        index
        element={<Dashboard />}
      />
    </Routes>
  );
}

export default App;
