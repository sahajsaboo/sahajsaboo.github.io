import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen items-center justify-center px-6 pb-24 pt-28 text-center"
    >
      <section className="max-w-2xl">
        <p className="mb-6 text-sm text-neutral-500">404</p>
        <h1 className="page-title text-white">Page not found</h1>
        <Link
          href="/"
          className="mt-10 inline-block text-sm text-neutral-400 underline decoration-white/25 transition-colors duration-200 hover:text-white"
        >
          Return home
        </Link>
      </section>
    </main>
  );
}
