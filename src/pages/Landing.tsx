import { NavLink } from 'react-router';

export default function Landing() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="dark bg-dracula-bg min-h-screen">
        <div className="container mx-auto justify-center px-4 py-20 sm:min-w-100 md:min-w-80">
          <h1 className="text-dracula-foreground xs:w-full mx-auto mb-6 w-80 text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to the Task App
          </h1>
          <p className="text-dracula-fg mx-3 mb-8 text-justify text-lg">
            Manage your tasks efficiently and stay organized with our intuitive
            task management application.
          </p>
          <div className="flex justify-center">
            <NavLink
              to="/tasks"
              className="text-shadow-dracula-red bg-dracula-pink hover:text-dracula-red hover:text-shadow-dracula-fg hover:bg-dracula-purple-shift border-dracula-pink-shift w-fit rounded-xl border-2 px-6 py-3 font-semibold transition-colors duration-300 hover:text-shadow-2xs"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
