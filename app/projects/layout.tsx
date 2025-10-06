export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}
