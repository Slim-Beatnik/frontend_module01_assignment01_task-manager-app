import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <section className="relative min-h-screen">
      <Navbar />
      <main className="dark bg-dracula-bg min-h-[calc(100vh - 8rem)]">
        <Outlet />
      </main>
    </section>
  );
}
