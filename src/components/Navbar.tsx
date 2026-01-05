import { useAuth0 } from '@auth0/auth0-react';
import { NavLink, useLocation } from 'react-router';
import logo from '/favicon.svg?url';

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const location = useLocation();
  const currPath = location.pathname;

  const noopOnDisable = (e: React.MouseEvent, path: string) => {
    if (currPath === path) {
      e.preventDefault();
    }
  };

  const handleLogAction = () => {
    if (isAuthenticated) {
      logout({
        logoutParams: { returnTo: window.location.origin },
      });
    } else {
      loginWithRedirect({
        appState: { returnTo: '/dashboard' },
      });
    }
  };

  return (
    <>
      {currPath !== '/callback' && (
        <nav className="bg-dracula-bg flex flex-row items-center justify-between gap-24 px-4 py-2 shadow-md">
          <div className="flex justify-start">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-20"
            />
          </div>
          <div className="flex-grow" />
          {currPath !== '/' && (
            <div className="grid grid-cols-4 gap-4 md:flex md:gap-6">
              <NavLink
                to="/dashboard"
                aria-disabled={currPath === '/dashboard'}
                className="aria-disabled:bg-dracula-comment aria-disabled:text-dracula-bg-light bg-dracula-orange text-dracula-bg hover:bg-dracula-orange-shift hover:text-dracula-bg-darker inline-block rounded-2xl px-4 py-2 font-bold aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed"
                onClick={() => noopOnDisable(e, '/dashboard')}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/profile"
                aria-disabled={currPath === '/profile'}
                className="aria-disabled:bg-dracula-comment aria-disabled:text-dracula-bg-light bg-dracula-orange text-dracula-bg hover:bg-dracula-orange-shift hover:text-dracula-bg-darker inline-block rounded-2xl px-4 py-2 font-bold aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed"
                onClick={() => noopOnDisable(e, '/profile')}
              >
                Profile
              </NavLink>
              <NavLink
                to="/tasks"
                aria-disabled={currPath === '/tasks'}
                className="aria-disabled:bg-dracula-comment aria-disabled:text-dracula-bg-light bg-dracula-orange text-dracula-bg hover:bg-dracula-orange-shift hover:text-dracula-bg-darker inline-block rounded-2xl px-4 py-2 font-bold aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed"
                onClick={() => noopOnDisable(e, '/tasks')}
              >
                Tasks
              </NavLink>
            </div>
          )}
          <div className="flex justify-end">
            <button
              className="bg-dracula-purple-shift border-dracula-comment text-dracula-bg hover:bg-dracula-purple hover:text-dracula-bg-darker w-full rounded-lg border-2 px-4 py-2 font-semibold"
              onClick={() => handleLogAction()}
            >
              {isAuthenticated ? 'Logout' : 'Login'}
            </button>
          </div>
        </nav>
      )}
    </>
  );
}
