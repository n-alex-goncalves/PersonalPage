import "./globals.css"; // assumes Tailwind CSS is setup in this file
import Link from "next/link";

export const metadata = {
  title: "Nuno Alexandre Goncalves",
  description: "Personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen font-sans text-neutral-200 bg-black">
        <aside className="w-40 border-r border-neutral-800 p-6 text-sm text-neutral-400 space-y-4">
          <nav className="flex flex-col gap-2">
            <Link href="/" className="hover:text-white">about</Link>
            <Link href="/career" className="hover:text-white">career</Link>
            <Link href="/resume" className="hover:text-white">resume</Link>
            <a href="https://github.com/n-alex-goncalves" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              github
            </a>
            <a href="https://www.linkedin.com/in/n-alex-goncalves/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              linkedin
            </a>
          </nav>
        </aside>
        <main className="flex-1 px-10 py-12">{children}</main>
      </body>
    </html>
  );
}