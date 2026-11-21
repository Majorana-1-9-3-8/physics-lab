import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, Clock3, Target } from "lucide-react";

const codeClass = "my-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 p-5 text-sm leading-6 text-slate-100";

export default function ModuleOnePage() {
  return (
    <article className="mx-auto max-w-4xl space-y-10 pb-12">
      <Link href="/formation" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900">
        <ArrowLeft className="h-4 w-4" /> Retour à la formation
      </Link>

      <header className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <div className="mb-5 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">MODULE 01</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">Débutant absolu</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Les bases du C++</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Ton premier pas vers la programmation scientifique : comprendre un programme, manipuler des nombres,
          prendre des décisions et calculer la chute d’un objet.
        </p>
        <div className="mt-7 flex flex-wrap gap-5 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-blue-700" /> Environ 60–90 min</span>
          <span className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-blue-700" /> 5 leçons · 2 exercices</span>
        </div>
      </header>

      <section className="rounded-xl border border-blue-100 bg-blue-50/70 p-6">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900"><Target className="h-5 w-5 text-blue-700" /> Objectifs du module</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
          <li>• Lire et écrire un petit programme C++.</li>
          <li>• Choisir un type adapté et nommer clairement ses variables.</li>
          <li>• Utiliser une condition et une boucle.</li>
          <li>• Écrire une fonction qui calcule une grandeur physique.</li>
        </ul>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          Aucun prérequis en programmation n’est nécessaire. Pour pratiquer, crée les fichiers dans Visual Studio Code,
          puis compile-les avec un compilateur C++ installé sur ton ordinateur.
        </p>
      </section>

      <section className="space-y-5" id="premier-programme">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 1</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Ton premier programme</h2>
        </div>
        <p className="leading-7 text-slate-700">
          Un programme est une suite d’instructions que l’ordinateur exécute. En C++, le point d’entrée est la fonction
          <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-sm">main</code>.
          L’exemple affiche une ligne de texte dans la console.
        </p>
        <pre className={codeClass}><code>{`#include <iostream>

int main() {
    std::cout << "Bonjour, Physics Lab !" << '\\n';
    return 0;
}`}</code></pre>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700"><code>#include &lt;iostream&gt;</code> donne accès aux outils d’entrée/sortie, dont <code>std::cout</code>.</div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700"><code>int main()</code> est la fonction exécutée au démarrage du programme.</div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700"><code>std::cout</code> écrit du texte dans la console ; la séquence de nouvelle ligne permet de passer à la ligne suivante.</div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700"><code>return 0;</code> indique que le programme s’est terminé normalement. Les instructions se terminent généralement par <code>;</code>.</div>
        </div>
        <p className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 text-sm leading-6 text-slate-700">
          <strong>À retenir :</strong> les accolades <code>{"{ }"}</code> délimitent un bloc. Le C++ distingue les majuscules des minuscules : <code>main</code> et <code>Main</code> sont différents.
        </p>
      </section>

      <section className="space-y-5" id="variables">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 2</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Variables et types</h2>
        </div>
        <p className="leading-7 text-slate-700">
          Une variable est une valeur mémorisée sous un nom. Le type précise la nature de la valeur. En sciences, utilise
          souvent <code>double</code> pour les mesures réelles. Écris les unités dans les noms : <code>masse_kg</code>,
          <code> vitesse_m_s</code>, <code>temps_s</code>. Cela aide à repérer les erreurs d’unités.
        </p>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="grid grid-cols-[100px_1fr] border-b border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-500"><span>Type</span><span>Usage courant</span></div>
          <div className="grid grid-cols-[100px_1fr] gap-2 border-b border-slate-100 px-4 py-3 text-sm"><code>int</code><span className="text-slate-600">Entiers, par exemple un nombre de particules.</span></div>
          <div className="grid grid-cols-[100px_1fr] gap-2 border-b border-slate-100 px-4 py-3 text-sm"><code>double</code><span className="text-slate-600">Nombres réels, par exemple une distance ou une vitesse.</span></div>
          <div className="grid grid-cols-[100px_1fr] gap-2 border-b border-slate-100 px-4 py-3 text-sm"><code>bool</code><span className="text-slate-600">Vrai ou faux, par exemple « est_en_chute ».</span></div>
          <div className="grid grid-cols-[100px_1fr] gap-2 border-b border-slate-100 px-4 py-3 text-sm"><code>char</code><span className="text-slate-600">Un caractère unique.</span></div>
          <div className="grid grid-cols-[100px_1fr] gap-2 px-4 py-3 text-sm"><code>std::string</code><span className="text-slate-600">Du texte ; ajoute <code>#include &lt;string&gt;</code> pour l’utiliser.</span></div>
        </div>
        <pre className={codeClass}><code>{`#include <iostream>

int main() {
    const double masse_kg = 2.0;
    const double vitesse_m_s = 3.5;
    const double energie_j = 0.5 * masse_kg * vitesse_m_s * vitesse_m_s;

    std::cout << "Energie cinetique : " << energie_j << " J\\n";
    return 0;
}`}</code></pre>
        <p className="text-sm leading-6 text-slate-600">
          Le mot <code>const</code> signifie que la valeur ne doit pas changer après son initialisation. Ici, on applique
          <span className="mx-1 font-mono">E = ½ m v²</span> : avec une masse en kilogrammes et une vitesse en mètres par seconde,
          l’énergie est exprimée en joules.
        </p>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900">Exercice 1 · Énergie cinétique</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Une bille de 0,2 kg se déplace à 4 m/s. Déclare les deux mesures, calcule son énergie cinétique avec la formule ci-dessus, puis affiche le résultat en joules.</p>
          <details className="mt-4 rounded-lg bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-blue-800">Afficher une correction expliquée</summary>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs leading-5 text-slate-100"><code>{`#include <iostream>

int main() {
    const double masse_kg = 0.2;
    const double vitesse_m_s = 4.0;
    const double energie_j = 0.5 * masse_kg * vitesse_m_s * vitesse_m_s;
    std::cout << energie_j << " J\\n";
    return 0;
}`}</code></pre>
            <p className="mt-3 text-sm leading-6 text-slate-600">Calcul : 0,5 × 0,2 × 4² = 1,6 J. On utilise des décimales avec un point dans le code C++.</p>
          </details>
        </div>
      </section>

      <section className="space-y-5" id="conditions">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 3</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Conditions : faire un choix</h2>
        </div>
        <p className="leading-7 text-slate-700">
          Une condition <code>if</code> permet d’exécuter un bloc seulement si une expression est vraie. Le bloc <code>else</code>
          fournit une autre branche. Les comparaisons courantes sont <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>, <code>==</code> et <code>!=</code>.
        </p>
        <pre className={codeClass}><code>{`#include <iostream>

int main() {
    const double temperature_C = -4.0;

    if (temperature_C < 0.0) {
        std::cout << "La temperature est sous zero.\\n";
    } else {
        std::cout << "La temperature est au-dessus ou egale a zero.\\n";
    }
    return 0;
}`}</code></pre>
        <p className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 text-sm leading-6 text-slate-700">
          <strong>Piège classique :</strong> <code>=</code> affecte une valeur ; <code>==</code> compare deux valeurs.
          Dans un <code>if</code>, on écrit généralement une comparaison avec <code>==</code>, pas une affectation.
        </p>
      </section>

      <section className="space-y-5" id="boucles">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 4</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Boucles : répéter un calcul</h2>
        </div>
        <p className="leading-7 text-slate-700">
          Une boucle <code>for</code> répète un bloc. Elle est pratique pour calculer plusieurs instants d’une simulation.
          Dans ce modèle de chute libre, l’objet part du repos à 20 m de hauteur et la résistance de l’air est négligée.
        </p>
        <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
          <p className="font-semibold">Équation utilisée</p>
          <p className="mt-1 font-mono">y(t) = y₀ − ½ g t², avec g = 9,81 m/s²</p>
        </div>
        <pre className={codeClass}><code>{`#include <iostream>

int main() {
    const double g_m_s2 = 9.81;
    const double hauteur_initiale_m = 20.0;

    for (int i = 0; i <= 4; ++i) {
        const double temps_s = 0.5 * i;
        const double hauteur_m = hauteur_initiale_m
            - 0.5 * g_m_s2 * temps_s * temps_s;
        std::cout << temps_s << " s : " << hauteur_m << " m\\n";
    }
    return 0;
}`}</code></pre>
        <p className="text-sm leading-6 text-slate-600">
          Dans <code>for (int i = 0; i &lt;= 4; ++i)</code>, <code>i</code> commence à 0, augmente de 1 à chaque tour
          et la boucle s’arrête après 4. Le temps vaut donc 0, 0,5, 1, 1,5 puis 2 secondes.
        </p>
      </section>

      <section className="space-y-5" id="fonctions">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 5</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Fonctions : nommer un calcul</h2>
        </div>
        <p className="leading-7 text-slate-700">
          Une fonction regroupe un calcul réutilisable. Elle reçoit des paramètres et peut renvoyer un résultat avec
          <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-sm">return</code>.
          La fonction suivante calcule la hauteur prédite à un instant donné.
        </p>
        <pre className={codeClass}><code>{`#include <iostream>

double hauteur_m(double hauteur_initiale_m, double temps_s) {
    const double g_m_s2 = 9.81;
    return hauteur_initiale_m - 0.5 * g_m_s2 * temps_s * temps_s;
}

int main() {
    const double y_m = hauteur_m(20.0, 1.0);
    std::cout << y_m << " m\\n";
    return 0;
}`}</code></pre>
        <p className="text-sm leading-6 text-slate-600">
          Les noms des paramètres rappellent leurs unités. Cette équation ne doit être utilisée que jusqu’à l’impact : si elle
          renvoie une hauteur négative, le modèle mathématique a continué après que l’objet a touché le sol.
        </p>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900">Exercice 2 · Construire le tableau de chute</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Dans VS Code, écris un programme qui définit une fonction de hauteur, puis affiche la hauteur d’un objet lâché de 20 m aux temps 0, 0,5, 1, 1,5 et 2 secondes. Ajoute une condition pour ne jamais afficher une hauteur sous le sol.</p>
          <details className="mt-4 rounded-lg bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-blue-800">Afficher une solution possible</summary>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs leading-5 text-slate-100"><code>{`#include <iostream>

double hauteur_m(double h0_m, double temps_s) {
    const double g_m_s2 = 9.81;
    const double y_m = h0_m - 0.5 * g_m_s2 * temps_s * temps_s;
    if (y_m < 0.0) {
        return 0.0;
    }
    return y_m;
}

int main() {
    for (int i = 0; i <= 4; ++i) {
        const double temps_s = 0.5 * i;
        std::cout << temps_s << " s : "
                  << hauteur_m(20.0, temps_s) << " m\\n";
    }
    return 0;
}`}</code></pre>
            <p className="mt-3 text-sm leading-6 text-slate-600">La condition <code>if</code> renvoie 0 m si le calcul passe sous le sol ; sinon, la fonction renvoie la hauteur calculée. Le calcul du temps d’impact exact sera amélioré dans un projet ultérieur.</p>
          </details>
        </div>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-950"><CheckCircle2 className="h-5 w-5 text-emerald-700" /> Bilan du module</h2>
        <p className="mt-3 leading-7 text-slate-700">Tu as vu la structure d’un programme, les variables, les conditions, les boucles et les fonctions. Le plus important est de taper les exemples toi-même, de compiler souvent et de lire le premier message d’erreur calmement.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/formation" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Retour aux modules</Link>
          <Link href="/projets" className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">Voir les projets scientifiques</Link>
        </div>
      </section>
    </article>
  );
}

