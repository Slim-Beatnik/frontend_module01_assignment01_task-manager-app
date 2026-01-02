export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative min-h-screen">
      {/* <Navbar /> */}
      <main className="dark bg-dracula-bg min-h-[calc(100vh - 8rem)]">
        {children}
      </main>
    </section>
  );
}
