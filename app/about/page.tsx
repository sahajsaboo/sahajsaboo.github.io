import { aboutContent } from "@/lib/about-content";

export const metadata = {
  title: "About",
  description:
    "About Sahaj Saboo, an Information Technology student interested in software, networking, cybersecurity, Linux, and open-source technologies."
};

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-4xl items-center px-6 py-16"
    >
      <section aria-labelledby="about-title" className="text-left">
        <h1 id="about-title" className="page-title text-white">About</h1>

        <div className="mt-8 max-w-2xl space-y-5">
          <p className="lead-copy">
            {aboutContent.introduction}
          </p>
          <p className="body-copy">{aboutContent.biography}</p>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-500">
          {aboutContent.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
