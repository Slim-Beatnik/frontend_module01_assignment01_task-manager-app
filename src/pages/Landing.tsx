import { NavLink } from 'react-router';
import MainLayout from '../layout/MainLayout';

export default function Landing() {
  return (
    <MainLayout>
      <div className="align-center container mx-auto justify-center px-4 pt-20 sm:min-w-100 md:min-w-80">
        <h1 className="text-dracula-yellow xs: sm: md: lg: mx-auto mb-6 w-80 w-full text-center text-4xl text-5xl text-6xl text-7xl font-bold">
          Welcome to the Task App
        </h1>
        <div className="mx-auto w-fit">
          <p className="text-dracula-cyan mx-3 mb-8 text-justify text-lg">
            Manage your tasks efficiently and stay organized with our intuitive
            task management application.
          </p>
        </div>
        <div className="bg-dracula-bg flex justify-center">
          <NavLink
            to="/login"
            className="bg-dracula-pink hover:text-dracula-red hover:text-shadow-dracula-fg hover:bg-dracula-purple-shift border-dracula-pink-shift w-fit rounded-xl border-2 px-6 py-3 font-semibold transition-colors duration-300 hover:text-shadow-2xs"
          >
            Get Started
          </NavLink>
        </div>
        <div className="flex h-50" />
        <div className="flex h-fit justify-center text-center text-sm">
          <p>
            <span className="text-dracula-pink">Created</span>
            <span className="text-dracula-green">&nbsp;by&nbsp;</span>
            <strong className="text-dracula-cyan">Kyle Hill</strong>.
            <br />
            <em className="text-dracula-comment">
              This project was made with <strong>yarn 4.12.0</strong> for the
              express use of the experimental{' '}
              <span className="underline">
                0 install Plug'n'Play, vite React TS, and TailwindCSS.
              </span>
              <br />
              The tailwind customized theming colors is made to emulate my
              preferred vscode theme:
            </em>
            <strong className="text-dracula-red">
              <br />
              Dracula Refined
            </strong>
            <br />
            <NavLink
              to="https://marketplace.visualstudio.com/items?itemName=mathcale.theme-dracula-refined"
              title='All instructions can be found at INSTALL, but you could just open the Extensions tab on VS Code and search for "Dracula Refined" (without quotes).'
              className="bg-dracula-selection hover:bg-dracula-comment-/[80] hover:text-dracula-purple border-dracula-bg-darker text-dracula-purple-shift py-auto mt-2 inline-block rounded-full border-2 px-2 font-semibold hover:underline"
            >
              Link
            </NavLink>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
