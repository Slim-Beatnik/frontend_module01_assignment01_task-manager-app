import { Route, Routes } from 'react-router';
import { ProtectedRoute } from './auth/ProtectedRoute';
import MainLayout from './layout/MainLayout';
import Callback from './pages/Callback';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<Landing />}
        />
        <Route
          path="/callback"
          element={<Callback />}
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
