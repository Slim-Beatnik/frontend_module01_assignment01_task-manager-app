import { useAuth0 } from '@auth0/auth0-react';
import { NavLink, useLocation } from 'react-router';
import logo from '/checkOff.svg?url';

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { pathname: currPath } = useLocation();

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

  const navTitlesPaths: { [key: string]: string } = {
    Dashboard: '/dashboard',
    Profile: '/profile',
    Tasks: '/tasks',
  };

  return (
    <>
      {currPath !== '/callback' && (
        <nav className="bg-dracula-bg flex flex-row items-center justify-between gap-2 px-4 py-2 shadow-md md:gap-24">
          <div className="flex justify-start">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-38"
            />
          </div>
          <div className="grow" />

          {currPath !== '/' && (
            // Only render nav links on pages other than home
            <div className="grid grow grid-cols-4 gap-4 md:flex md:gap-6">
              {/* Render nav links dynamically -- to add page make entry in navTitlesPaths */}

              {Object.entries(navTitlesPaths).map(([title, path]) => (
                <NavLink
                  key={title}
                  to={path}
                  aria-disabled={currPath === path}
                  className="aria-disabled:bg-dracula-comment none aria-disabled:text-dracula-bg-light bg-dracula-orange text-dracula-bg hover:bg-dracula-orange-shift hover:text-dracula-bg-darker inline-block min-w-fit rounded-2xl px-4 py-2 text-sm font-bold aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed md:text-lg"
                  onClick={(e) => noopOnDisable(e, path)}
                >
                  {title}
                </NavLink>
              ))}
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
