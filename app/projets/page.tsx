import Link from "next/link";

const projets = [
  {
    title: "Projet 1 : Chute libre (1D)",
    physique: "Calcul de la position et vitesse sous gravité.",
    cpp: "Variables, boucles, fonctions.",
    vsCode: "Créez un fichier main.cpp et compilez avec g++.",
    link: "/projets/chute-libre"
  },
  {
    title: "Projet 2 : Mouvement de projectile (2D)",
    physique: "Vecteurs, trajectoires, angles.",
    cpp: "Tableaux, structures, fonctions.",
    vsCode: "Utilisez des structures pour les vecteurs.",
    link: "/projets/projectile"
  },
  {
    title: "Projet 3 : Système Planétaire (3D)",
    physique: "Gravitation universelle, orbites.",
    cpp: "Classes, POO, STL (vector).",
    vsCode: "Créez des classes Planète et Système.",
    link: "/projets/systeme-planetaire"
  },
  {
    title: "Projet 4 : Trous Noirs et Relativité",
    physique: "Relativité générale, courbure, singularités.",
    cpp: "C++ moderne, pointeurs, multithreading.",
    vsCode: "Optimisation des calculs complexes.",
    link: "/projets/trous-noirs"
  }
];

export default function ProjetsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-900">Projets Pratiques</h1>
      <p className="text-slate-600">
        Programmez ces projets dans **Visual Studio Code**. Physics Lab sert de guide pédagogique.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projets.map((p) => (
          <div key={p.title} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <div className="space-y-2 text-sm text-slate-600 mb-4">
              <p><strong>Physique :</strong> {p.physique}</p>
              <p><strong>C++ :</strong> {p.cpp}</p>
              <p><strong>VS Code :</strong> {p.vsCode}</p>
            </div>
            <Link href={p.link} className="text-physics-primary font-medium text-sm">
              Consignes de réalisation →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
