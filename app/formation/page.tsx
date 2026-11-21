import Link from "next/link";

const modules = [
  {
    title: "Module 1 : Les bases du C++",
    description: "Variables, types, conditions, boucles et fonctions, avec une première chute libre en 1D.",
    link: "/formation/module-1",
    level: "Débutant absolu",
  },
  {
    title: "Module 2 : Données, mémoire et mouvement en 2D",
    description: "Structures, tableaux, références, pointeurs et simulation numérique d’un projectile.",
    link: "/formation/module-2",
    level: "Après les bases",
  },
  {
    title: "Module 3 : Classes, STL et C++ moderne",
    description: "Encapsulation, objets, collections, algorithmes et gestion sûre de la mémoire.",
    link: "/formation/module-3",
    level: "Intermédiaire",
  },
  {
    title: "Module 4 : Gravitation et simulation en 3D",
    description: "Vecteurs 3D, loi de Newton, intégration numérique et vérification scientifique.",
    link: "/formation/module-4",
    level: "Avancé",
  },
];

export default function FormationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Formation C++</h1>
        <p className="mt-3 text-slate-600">
          Un parcours progressif : des premières instructions à une simulation gravitationnelle en 3D.
          Suis les modules dans l’ordre et réalise les exercices dans tes propres fichiers C++.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {modules.map((module, index) => (
          <div key={module.title} className="rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="rounded bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600">{module.level}</span>
              <span className="text-xs font-semibold tracking-wide text-slate-400">0{index + 1}</span>
            </div>
            <h2 className="mb-2 text-xl font-bold">{module.title}</h2>
            <p className="mb-4 text-sm leading-6 text-slate-600">{module.description}</p>
            <Link href={module.link} className="text-sm font-medium text-physics-primary hover:underline">
              Accéder au cours →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
