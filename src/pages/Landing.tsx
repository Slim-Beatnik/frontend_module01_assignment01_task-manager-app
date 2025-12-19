export default function Landing() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="dark bg-dracula-bg min-h-screen">
        <div className="container mx-auto px-4 py-20 sm:min-w-100 md:min-w-80">
          <h1 className="text-dracula-foreground mb-6 text-center text-4xl font-bold sm:w-80 sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to the Task App
          </h1>
          <p className="text-dracula-foreground mb-8 text-justify text-lg">
            Manage your tasks efficiently and stay organized with our intuitive
            task management application.
          </p>
          <div className="flex justify-center">
            <a
              href="/tasks"
              className="text-shadow-dracula-red bg-dracula-purple hover:text-dracula-red hover:text-shadow-dracula-foreground hover:bg-dracula-purple-shift w-fit rounded-lg px-6 py-3 font-semibold transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
