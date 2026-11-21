import { CheckCircle, Clock, ChevronRight } from "lucide-react";

const progression = [
  {
    module: "Module 1 : Les bases du C++",
    etapes: [
      { nom: "Variables et Types", statut: "terminé" },
      { nom: "Conditions et Boucles", statut: "terminé" },
      { nom: "Fonctions", statut: "en cours" },
      { nom: "Exercices de Chute Libre", statut: "à faire" }
    ]
  },
  {
    module: "Module 2 : Structures et Mémoire",
    etapes: [
      { nom: "Tableaux", statut: "à faire" },
      { nom: "Pointeurs", statut: "à faire" },
      { nom: "Classes", statut: "à faire" }
    ]
  }
];

export default function ProgressionPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-900">Ma Progression</h1>
      <p className="text-slate-600">
        Suivez votre parcours et reprenez là où vous vous étiez arrêté.
      </p>

      {progression.map((m) => (
        <div key={m.module} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-lg">{m.module}</h3>
            <span className="text-sm text-slate-500">
              {m.etapes.filter(e => e.statut === "terminé").length} / {m.etapes.length} terminé
            </span>
          </div>
          <div className="p-6 space-y-4">
            {m.etapes.map((e, i) => (
              <div key={i} className="flex items-center gap-4">
                {e.statut === "terminé" ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : e.statut === "en cours" ? (
                  <Clock className="w-5 h-5 text-physics-primary" />
                ) : (
                  <div className="w-5 h-5 border-2 border-slate-300 rounded-full" />
                )}
                <div className="flex-1">
                  <p className={`text-sm ${e.statut === "terminé" ? "text-slate-900" : "text-slate-600"}`}>
                    {e.nom}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
