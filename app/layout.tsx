import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import { Atom, Telescope, BookOpen, Code } from "lucide-react";

export const metadata: Metadata = {
  title: "Physics Lab — Apprendre le C++ Scientifique",
  description: "Plateforme personnelle pour apprendre le C++ depuis le début, orientée physique et simulations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <Atom className="text-physics-primary w-6 h-6" />
            <h1 className="text-xl font-bold tracking-tight">Physics Lab</h1>
          </div>
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-physics-primary transition">Formation</Link>
            <Link href="/projets" className="hover:text-physics-primary transition">Projets</Link>
            <Link href="/progression" className="hover:text-physics-primary transition">Progression</Link>
          </nav>
        </header>
        <main className="flex-1 flex-grow p-6 max-w-5xl mx-auto w-full">
          {children}
        </main>
        <footer className="bg-slate-50 border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          <p>© 2026 Physics Lab — Apprendre le C++ pour la physique</p>
        </footer>
      </body>
    </html>
  );
}
