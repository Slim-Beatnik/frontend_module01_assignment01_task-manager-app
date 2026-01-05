import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router';

export default function Landing() {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      loginWithRedirect({ appState: { returnTo: '/dashboard' } });
    }
  }, [isAuthenticated, loginWithRedirect]);

  return (
    <div className="align-center container mx-auto justify-center px-4 pt-20 sm:min-w-100 md:min-w-80">
      <h1 className="text-dracula-yellow xs:w-full xs:text-4xl mb-6 w-80 text-center font-bold sm:text-5xl md:mx-auto md:text-6xl lg:text-7xl">
        Welcome to the Check-off!
      </h1>
      <div className="mx-auto w-fit">
        <p className="text-dracula-cyan mx-3 mb-8 text-justify text-lg">
          Manage your tasks efficiently and stay organized with our intuitive
          task management application.
        </p>
      </div>
      <div className="flex h-100 grow justify-center">
        <div className="border-dracula-bg-darker shadow-pulse bg-dracula-bg shadow-dracula-cyan z-2 my-auto flex w-full max-w-sm flex-col rounded-lg border-2 p-6 shadow-2xl/30 hover:[--shadow-pulse-color:var(--color-dracula-pink)]">
          <h2 className="text-dracula-pink mb-6 text-center text-2xl font-bold">
            Login to get started
          </h2>

          <button
            onClick={() => loginWithRedirect()}
            disabled={isLoading}
            className="bg-dracula-purple-shift border-dracula-comment text-dracula-bg hover:bg-dracula-purple hover:text-dracula-bg-darker mt-4 w-full rounded-lg border-2 px-4 py-2 font-semibold disabled:opacity-50"
          >
            Continue with Auth0
          </button>
        </div>
      </div>
      <div className="flex h-fit justify-center text-center text-sm">
        <p className="font-mono">
          <span className="text-dracula-pink">Created</span>
          <span className="text-dracula-green"> by </span>
          <strong className="text-dracula-cyan">Kyle Hill</strong>.
          <br />
          <em className="text-dracula-comment">
            This project was made with
            <strong>
              {' '}
              Vite, React, Typescript, TailwindCSS,
              <br />
              <span className="font-normal"> and </span>
              Yarn 4.12.0
            </strong>{' '}
            for the express use of the experimental feature
            <br />
            <span className="underline">0 install Plug'n'Play.</span>
            <br />
            The tailwind customized theming colors were extracted from my
            preferred vscode theme:
          </em>
          <br />
          <NavLink
            to="https://marketplace.visualstudio.com/items?itemName=mathcale.theme-dracula-refined"
            title='All instructions can be found at INSTALL, but you could just open the Extensions tab on VS Code and search for "Dracula Refined" (without quotes).'
            className="bg-dracula-selection hover:bg-dracula-comment-/[80] hover:text-dracula-purple border-dracula-bg-darker text-dracula-purple-shift py-auto mt-2 inline-block rounded-full border-2 px-2 font-semibold hover:underline"
          >
            <strong className="text-dracula-red">Dracula Refined</strong>
            <br />
          </NavLink>
        </p>
      </div>
    </div>
  );
}
