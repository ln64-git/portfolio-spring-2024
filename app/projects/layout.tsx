export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center w-full  pt-4 pb-2 ">
      <div className="inline-block text-center justify-center w-full">
        {children}
      </div>
    </section>
  );
}
