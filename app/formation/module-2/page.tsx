import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, Clock3, Target } from "lucide-react";

const codeClass = "my-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 p-5 text-sm leading-6 text-slate-100";

export default function ModuleTwoPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-10 pb-12">
      <Link href="/formation" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900">
        <ArrowLeft className="h-4 w-4" /> Retour à la formation
      </Link>

      <header className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <div className="mb-5 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">MODULE 02</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">Après les bases</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Données, mémoire et mouvement en 2D</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Apprends à représenter un état physique, à stocker une trajectoire et à comprendre comment les variables vivent en mémoire.
          Tu termineras par une simulation numérique de projectile dans un plan.
        </p>
        <div className="mt-7 flex flex-wrap gap-5 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-blue-700" /> Environ 2–3 h</span>
          <span className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-blue-700" /> 5 leçons · 2 exercices</span>
        </div>
      </header>

      <section className="rounded-xl border border-blue-100 bg-blue-50/70 p-6">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900"><Target className="h-5 w-5 text-blue-700" /> Avant de commencer</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Prérequis : savoir lire un programme avec variables, fonctions, conditions et boucles (Module 1). Les exemples supposent
          une compilation en C++17. Un vecteur 2D ici est simplement une paire de nombres (x, y), pas encore un objet graphique.
        </p>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
          <li>• Regrouper des valeurs dans une structure.</li>
          <li>• Passer des données aux fonctions sans copies inutiles.</li>
          <li>• Comprendre tableaux, vecteurs dynamiques et adresses.</li>
          <li>• Simuler une trajectoire 2D par petits pas de temps.</li>
        </ul>
      </section>

      <nav aria-label="Leçons du module" className="rounded-xl border border-slate-200 bg-white p-5">
        <p className="mb-3 text-sm font-bold text-slate-800">Dans ce module</p>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link href="#structures" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">1. Structures</Link>
          <Link href="#references" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">2. Références</Link>
          <Link href="#tableaux" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">3. Tableaux et vecteurs</Link>
          <Link href="#pointeurs" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">4. Pointeurs</Link>
          <Link href="#projectile-2d" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">5. Projectile 2D</Link>
        </div>
      </nav>

      <section className="space-y-5" id="structures">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 1</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Regrouper l’état avec <code>struct</code></h2>
        </div>
        <p className="leading-7 text-slate-700">
          Un objet physique possède souvent plusieurs grandeurs liées : une position a une coordonnée x et une coordonnée y.
          Une structure <code>struct</code> crée un nouveau type qui les garde ensemble. Les noms avec unités évitent de confondre
          mètres, secondes et mètres par seconde.
        </p>
        <pre className={codeClass}><code>{`#include <iostream>

struct Vec2 {
    double x_m;
    double y_m;
};

int main() {
    const Vec2 position_initiale{0.0, 1.5};
    std::cout << position_initiale.x_m << " m, "
              << position_initiale.y_m << " m" << std::endl;
    return 0;
}`}</code></pre>
        <p className="text-sm leading-6 text-slate-600">
          Les deux champs sont déclarés séparément. <code>Vec2</code> est le type ; <code>position_initiale</code> est une variable de ce type.
          Les accolades donnent les valeurs dans l’ordre x puis y. <code>#include &lt;iostream&gt;</code> rend disponible <code>std::cout</code>.
        </p>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900">Exercice · Position et vitesse</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Définis <code>Vec2</code>, puis crée <code>position_m</code> égal à (3, 4) m et <code>vitesse_m_s</code> égale à (0, 2) m/s. Pourquoi est-il utile que les unités figurent dans les noms ?</p>
          <details className="mt-4 rounded-lg bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-blue-800">Afficher une correction expliquée</summary>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs leading-5 text-slate-100"><code>{`const Vec2 position_m{3.0, 4.0};
const Vec2 vitesse_m_s{0.0, 2.0};`}</code></pre>
            <p className="mt-3 text-sm leading-6 text-slate-600">Les valeurs sont regroupées par grandeur et leurs noms rappellent les unités : additionner une position en mètres à une vitesse en mètres par seconde serait une erreur de dimension.</p>
          </details>
        </div>
      </section>

      <section className="space-y-5" id="references">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 2</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Fonctions, copies et références</h2>
        </div>
        <p className="leading-7 text-slate-700">
          Passer une petite valeur à une fonction « par valeur » crée une copie indépendante. Pour une structure plus grande,
          une fonction peut recevoir une référence constante : <code>const Vec2&amp;</code>. Elle lit l’objet d’origine sans le copier
          et s’interdit de le modifier. Le <code>&amp;</code> après le type signifie ici « référence ».
        </p>
        <pre className={codeClass}><code>{`double norme(const Vec2& v) {
    return std::sqrt(v.x_m * v.x_m + v.y_m * v.y_m);
}`}</code></pre>
        <p className="text-sm leading-6 text-slate-600">
          Pour utiliser cet extrait, ajoute <code>#include &lt;cmath&gt;</code>. La fonction applique le théorème de Pythagore :
          la norme d’un vecteur (x, y) vaut √(x² + y²). Pour un vecteur position, elle donne une distance en mètres ; pour une vitesse, une vitesse en m/s.
        </p>
        <div className="rounded-lg border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-slate-700">
          <strong>Trois écritures à ne pas confondre :</strong>
          <ul className="mt-2 space-y-1">
            <li><code>Vec2 v</code> : un objet (ou une copie lorsqu’il est passé à une fonction par valeur).</li>
            <li><code>Vec2&amp; v</code> : une référence modifiable vers un objet déjà existant.</li>
            <li><code>const Vec2&amp; v</code> : une référence en lecture seule, souvent idéale pour les entrées d’une fonction.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-5" id="tableaux">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 3</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Stocker plusieurs mesures</h2>
        </div>
        <p className="leading-7 text-slate-700">
          Un tableau de taille fixe contient un nombre défini d’éléments. En C++ moderne, <code>std::array</code> rend cette taille explicite.
          Pour un nombre d’échantillons qui change pendant le calcul, <code>std::vector</code> est plus adapté : il grandit quand on ajoute des valeurs.
        </p>
        <pre className={codeClass}><code>{`#include <array>
#include <iostream>
#include <vector>

int main() {
    std::array<double, 3> temps_tests{0.0, 0.5, 1.0};
    std::vector<double> temps_simulation;
    temps_simulation.push_back(0.0);
    temps_simulation.push_back(0.01);

    std::cout << temps_tests[0] << std::endl; // Le premier indice est 0
    std::cout << temps_simulation.size() << std::endl;
    return 0;
}`}</code></pre>
        <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-slate-600">
          <li>Inclure <code>&lt;array&gt;</code> et <code>&lt;vector&gt;</code> avant d’utiliser ces types.</li>
          <li><code>push_back</code> ajoute une valeur à la fin ; <code>size()</code> donne le nombre d’éléments.</li>
          <li>Les indices commencent à zéro. Lire <code>temps_tests[3]</code> serait hors limites : les indices valides sont 0, 1 et 2.</li>
          <li>Pour vérifier une borne pendant l’apprentissage, <code>temps_tests.at(i)</code> détecte un indice invalide en levant une erreur.</li>
        </ul>
      </section>

      <section className="space-y-5" id="pointeurs">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 4</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Pointeurs et mémoire, sans danger inutile</h2>
        </div>
        <p className="leading-7 text-slate-700">
          Une variable occupe une zone mémoire et possède une adresse. Un pointeur peut stocker cette adresse. L’opérateur <code>&amp;</code>
          placé devant une variable demande son adresse ; l’opérateur <code>*</code> appliqué à un pointeur accède à la valeur située à cette adresse.
        </p>
        <pre className={codeClass}><code>{`#include <iostream>

int main() {
    double temperature_C = 12.0;
    double* pointeur = &temperature_C; // pointeur contient l'adresse

    if (pointeur != nullptr) {         // verifier qu'il pointe vers une variable
        *pointeur = 15.0;              // modifier la valeur pointee
    }

    std::cout << temperature_C << std::endl; // affiche 15
    return 0;
}`}</code></pre>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-slate-700">
          <p className="font-bold">Règles de sécurité</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Initialise un pointeur à une adresse valide ou à <code>nullptr</code>.</li>
            <li>Ne déréférence jamais un pointeur nul ou une adresse dont tu ne connais pas la durée de vie.</li>
            <li>Ne commence pas par <code>new</code> et <code>delete</code> : un oubli peut créer une fuite mémoire ou un accès invalide.</li>
          </ul>
        </div>
        <p className="text-sm leading-6 text-slate-600">
          Une variable locale existe pendant l’exécution de son bloc. Une référence ou un pointeur vers cette variable ne doit pas être
          conservé après sa destruction. Pour les collections, préfère <code>std::vector</code> : il gère son stockage automatiquement.
          Le Module 3 présentera les pointeurs intelligents et la gestion moderne de la durée de vie.
        </p>
      </section>

      <section className="space-y-5" id="projectile-2d">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 5 · Application physique</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Projectile en 2D : avancer par petits pas</h2>
        </div>
        <p className="leading-7 text-slate-700">
          On représente l’état du projectile par sa position <code>p</code> et sa vitesse <code>v</code>. Sans frottement,
          l’accélération est constante : <code>a = (0, −g)</code>. À chaque pas de durée <code>dt</code>, on met d’abord la vitesse à jour,
          puis la position. Cette méthode simple est l’Euler semi-implicite (ou Euler-Cromer).
        </p>
        <div className="rounded-lg border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-slate-700">
          <p className="font-semibold">Modèle et unités</p>
          <p className="mt-1 font-mono">v(t + dt) = v(t) + a × dt</p>
          <p className="font-mono">p(t + dt) = p(t) + v(t + dt) × dt</p>
          <p className="mt-2">Le code choisit <code>dt = 0,01 s</code>, une vitesse initiale (12, 18) m/s, et <code>g = 9,81 m/s²</code>. La résistance de l’air est ignorée.</p>
        </div>
        <pre className={codeClass}><code>{`#include <cstddef>
#include <iostream>
#include <vector>

struct Vec2 {
    double x_m;
    double y_m;
};

Vec2 ajouter(const Vec2& a, const Vec2& b) {
    return {a.x_m + b.x_m, a.y_m + b.y_m};
}

Vec2 multiplier(const Vec2& v, double facteur) {
    return {v.x_m * facteur, v.y_m * facteur};
}

int main() {
    const double dt_s = 0.01;
    const Vec2 acceleration_m_s2{0.0, -9.81};
    Vec2 position_m{0.0, 0.0};
    Vec2 vitesse_m_s{12.0, 18.0};
    std::vector<Vec2> trajectoire;

    for (int pas = 0; pas < 5000; ++pas) {
        trajectoire.push_back(position_m);
        vitesse_m_s = ajouter(vitesse_m_s, multiplier(acceleration_m_s2, dt_s));
        position_m = ajouter(position_m, multiplier(vitesse_m_s, dt_s));

        if (position_m.y_m < 0.0) {
            position_m.y_m = 0.0; // Le sol est à y = 0 m
            trajectoire.push_back(position_m);
            break;
        }
    }

    std::cout << "temps_s,x_m,y_m" << std::endl;
    for (std::size_t i = 0; i < trajectoire.size(); i += 50) {
        const double temps_s = static_cast<double>(i) * dt_s;
        std::cout << temps_s << ","
                  << trajectoire[i].x_m << ","
                  << trajectoire[i].y_m << std::endl;
    }
    return 0;
}`}</code></pre>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900">Comment lire la simulation ?</h3>
          <ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-6 text-slate-600">
            <li><code>Vec2</code> regroupe les coordonnées d’une position, d’une vitesse ou d’une accélération.</li>
            <li><code>trajectoire</code> est un <code>std::vector</code> : chaque <code>push_back</code> enregistre une position calculée.</li>
            <li>La gravité change la composante verticale de la vitesse ; elle ne change pas la composante horizontale.</li>
            <li>À l’impact, la hauteur est ramenée à zéro et la boucle s’arrête.</li>
            <li>Les données sont écrites comme un CSV simple : chaque ligne contient temps, x et y. Elles peuvent ensuite être tracées dans un tableur.</li>
          </ol>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900">Exercice · Prévoir puis vérifier</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Dans ton propre fichier C++, remplace la vitesse initiale par (20, 10) m/s. Avant d’exécuter, estime le temps de vol et la portée avec les équations du mouvement sans frottement. Compare ensuite avec le CSV.</p>
          <details className="mt-4 rounded-lg bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-blue-800">Afficher la correction</summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">Comme le projectile revient à la même hauteur, <code>T ≈ 2 v₀y / g = 20 / 9,81 ≈ 2,04 s</code>. La portée idéale est <code>R ≈ v₀x T ≈ 20 × 2,04 ≈ 40,8 m</code>. Le résultat numérique est proche, mais dépend du pas <code>dt</code> et de la façon dont le code détecte l’impact. Réduis <code>dt</code> à 0,005 s et observe si le résultat se rapproche de cette estimation.</p>
          </details>
        </div>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-950"><CheckCircle2 className="h-5 w-5 text-emerald-700" /> Bilan du module</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Tu sais maintenant regrouper des données, stocker une suite d’états et représenter un mouvement plan dans un repère 2D.
          Tu as aussi découvert les adresses et les pointeurs : retiens surtout qu’un pointeur ne doit jamais être utilisé sans savoir
          vers quoi il pointe et combien de temps cette donnée reste vivante.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/formation" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Retour aux modules</Link>
          <Link href="/formation/module-3" className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">Continuer vers le Module 3</Link>
        </div>
      </section>
    </article>
  );
}

