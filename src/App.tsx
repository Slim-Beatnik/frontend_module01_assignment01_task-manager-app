import { Route, Routes } from 'react-router';
import { ProtectedRoute } from './auth/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Callback from './pages/Callback';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Landing />}
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route path='/callback' element={<Callback />} />
      </Route>
    </Routes>
  );
}

export default App;
