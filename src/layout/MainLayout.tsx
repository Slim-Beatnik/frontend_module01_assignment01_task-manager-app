export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <main className="dark bg-dracula-bg min-h-screen">{children}</main>
    </section>
  );
}
