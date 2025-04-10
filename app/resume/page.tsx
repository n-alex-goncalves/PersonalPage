export default function Resume() {
  return (
      <div className="prose dark:prose-invert">
        <h1 className="text-xl font-semibold mb-6">RESUME</h1>
        <p className="whitespace-pre-line leading-relaxed max-w-prose">
          You can view or download my resume using the link below:
        </p>
        <a
          href="/Nuno Goncalves CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          View Resume (PDF)
        </a>
      </div>
  );
}