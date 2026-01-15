export default function TaskDisplay() {
  return (
    <div className="bg-dracula-comment h-[calc(100vh-6rem)] min-w-screen p-12">
      <div className="grid min-h-full min-w-full grid-cols-2 gap-6">
        <section className="h-full grid-rows-1">
          <h2 className="bg-dracula-cyan-shift/50 text-dracula-bg-darker text-center">
            Tasks On Today
          </h2>
          <div className="bg-dracula-cyan-shift grid h-full w-full"></div>
        </section>
        <div className="bg-dracula-purple-shift grid min-h-full min-w-full grid-rows-1"></div>
      </div>
    </div>
  );
}
