import Link from "next/link";
import { BookOpen, Telescope, Code, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Physics Lab
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Apprenez le C++ depuis le niveau débutant absolu, avec une orientation
          vers la physique, la simulation et la programmation scientifique.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/formation" className="bg-physics-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-physics-secondary transition shadow-sm">
            Commencer la formation
          </Link>
          <Link href="/projets" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition">
            Explorer les projets
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <BookOpen className="w-8 h-8 text-physics-primary mb-4" />
          <h2 className="text-xl font-bold mb-2">Formation C++</h2>
          <p className="text-slate-600 text-sm mb-4">
            De la variable au C++ moderne, avec exercices et corrections.
          </p>
          <Link href="/formation" className="text-physics-primary text-sm font-medium">
            En savoir plus →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <Telescope className="w-8 h-8 text-physics-primary mb-4" />
          <h2 className="text-xl font-bold mb-2">Orientation Scientifique</h2>
          <p className="text-slate-600 text-sm mb-4">
            Mécanique, gravitation, systèmes planétaires et trous noirs.
          </p>
          <Link href="/projets" className="text-physics-primary text-sm font-medium">
            En savoir plus →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <Code className="w-8 h-8 text-physics-primary mb-4" />
          <h2 className="text-xl font-bold mb-2">Projets Pratiques</h2>
          <p className="text-slate-600 text-sm mb-4">
            Programmez dans VS Code avec Physics Lab comme guide.
          </p>
          <Link href="/projets" className="text-physics-primary text-sm font-medium">
            Commencer →
          </Link>
        </div>
      </section>
    </div>
  );
}
