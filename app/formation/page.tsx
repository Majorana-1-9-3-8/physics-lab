import Link from "next/link";

const modules = [
  {
    title: "Module 1 : Les bases du C++",
    description: "Variables, types, conditions, boucles, fonctions.",
    link: "/formation/module-1",
    level: "Débutant absolu",
    available: true,
  },
  {
    title: "Module 2 : Structures et Mémoire",
    description: "Tableaux, pointeurs, gestion de la mémoire, classes.",
    level: "Intermédiaire",
    available: false,
  },
  {
    title: "Module 3 : C++ Moderne et STL",
    description: "Programmation orientée objet, STL, templates, C++20/23.",
    level: "Avancé",
    available: false,
  },
  {
    title: "Module 4 : Physique et Simulations",
    description: "Application aux vecteurs, mécanique, gravitation, trous noirs.",
    level: "Progression avancée",
    available: false,
  },
];

export default function FormationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Formation C++</h1>
        <p className="mt-3 text-slate-600">
          Un parcours progressif conçu pour vous rendre autonome dans la programmation scientifique.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {modules.map((module) => (
          <div key={module.title} className="rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
            <div className="mb-3 flex items-start justify-between gap-3">
              <span className="rounded bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600">{module.level}</span>
              {!module.available && (
                <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">En préparation</span>
              )}
            </div>
            <h2 className="mb-2 text-xl font-bold">{module.title}</h2>
            <p className="mb-4 text-sm text-slate-600">{module.description}</p>
            {module.available && module.link ? (
              <Link href={module.link} className="text-sm font-medium text-physics-primary hover:underline">
                Accéder au module →
              </Link>
            ) : (
              <span className="text-sm text-slate-400">Le contenu de ce module sera ajouté progressivement.</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
