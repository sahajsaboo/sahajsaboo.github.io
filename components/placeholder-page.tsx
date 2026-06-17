type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <main
      id="main-content"
      className="flex h-[calc(100svh-5rem)] items-center px-6 py-16"
    >
      <section className="mx-auto w-full max-w-4xl text-left">
        <h1 className="page-title text-white">{title}</h1>
        <p className="body-copy mt-7 max-w-xl">
          {description}
        </p>
      </section>
    </main>
  );
}
