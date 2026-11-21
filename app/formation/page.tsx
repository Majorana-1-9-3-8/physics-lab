import Link from "next/link";

const modules = [
  {
    title: "Module 1 : Les bases du C++",
    description: "Variables, types, conditions, boucles, fonctions.",
    link: "/formation/module-1",
    level: "Débutant absolu"
  },
  {
    title: "Module 2 : Structures et Mémoire",
    description: "Tableaux, pointeurs, gestion de la mémoire, classes.",
    link: "/formation/module-2",
    level: "Intermédiaire"
  },
  {
    title: "Module 3 : C++ Moderne et STL",
    description: "Programmation orientée objet, STL, templates, C++20/23.",
    link: "/formation/module-3",
    level: "Avancé"
  },
  {
    title: "Module 4 : Physique et Simulations",
    description: "Application aux vecteurs, mécanique, gravitation, trous noirs.",
    link: "/formation/module-4",
    level: "Expert"
  }
];

export default function FormationPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-900">Formation C++</h1>
      <p className="text-slate-600">
        Un parcours progressif conçu pour vous rendre autonome dans la programmation scientifique.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((m) => (
          <div key={m.title} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold px-2 py-1 bg-slate-100 rounded text-slate-600">{m.level}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{m.title}</h3>
            <p className="text-slate-600 text-sm mb-4">{m.description}</p>
            <Link href={m.link} className="text-physics-primary font-medium text-sm">
              Accéder au module →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
