import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, Clock3, Target } from "lucide-react";

const codeClass = "my-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 p-5 text-sm leading-6 text-slate-100";

export default function ModuleFourPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-10 pb-12">
      <Link href="/formation" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900">
        <ArrowLeft className="h-4 w-4" /> Retour à la formation
      </Link>

      <header className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <div className="mb-5 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">MODULE 04</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">Avancé · simulation numérique</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Gravitation et simulation en 3D</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Assemble les notions des modules précédents pour bâtir un noyau de simulation gravitationnelle : vecteurs 3D,
          loi de Newton, intégration temporelle et vérification de la qualité numérique.
        </p>
        <div className="mt-7 flex flex-wrap gap-5 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-blue-700" /> Environ 4–6 h</span>
          <span className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-blue-700" /> 5 leçons · 2 défis</span>
        </div>
      </header>

      <section className="rounded-xl border border-blue-100 bg-blue-50/70 p-6">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900"><Target className="h-5 w-5 text-blue-700" /> Prérequis et objectifs</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Prérequis : fonctions, structures, classes, références et <code>std::vector</code> (Modules 1 à 3), ainsi que les notions de force,
          accélération et unités. Le code est un modèle de gravitation newtonienne classique ; il ne simule pas la relativité générale.
        </p>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
          <li>• Construire un vecteur 3D avec unités cohérentes.</li>
          <li>• Calculer les accélérations gravitationnelles de N corps.</li>
          <li>• Intégrer le mouvement sans mélanger les étapes de calcul.</li>
          <li>• Tester l’effet du pas de temps et reconnaître les limites du modèle.</li>
        </ul>
      </section>

      <nav aria-label="Leçons du module" className="rounded-xl border border-slate-200 bg-white p-5">
        <p className="mb-3 text-sm font-bold text-slate-800">Dans ce module</p>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link href="#vecteurs-3d" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">1. Vecteurs 3D</Link>
          <Link href="#gravitation" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">2. Gravitation</Link>
          <Link href="#integration" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">3. Intégration</Link>
          <Link href="#n-corps" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">4. Code N-corps</Link>
          <Link href="#verification" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">5. Validation</Link>
          <Link href="#limites-relativite" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">Relativité : limites</Link>
        </div>
      </nav>

      <section className="space-y-5" id="vecteurs-3d">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 1</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Décrire une grandeur en 3D</h2>
        </div>
        <p className="leading-7 text-slate-700">
          En trois dimensions, une position contient trois coordonnées : x, y et z. Un vecteur peut représenter une position, une vitesse,
          une force ou une accélération ; son unité dépend de ce qu’il représente. Les opérations composante par composante gardent la même forme
          qu’en 2D.
        </p>
        <pre className={codeClass}><code>{`struct Vec3 {
    double x;
    double y;
    double z;
};

Vec3 ajouter(const Vec3& a, const Vec3& b) {
    return {a.x + b.x, a.y + b.y, a.z + b.z};
}

Vec3 soustraire(const Vec3& a, const Vec3& b) {
    return {a.x - b.x, a.y - b.y, a.z - b.z};
}

double produit_scalaire(const Vec3& a, const Vec3& b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}`}</code></pre>
        <p className="text-sm leading-6 text-slate-600">
          La longueur d’un vecteur est <code>|v| = sqrt(v · v)</code>. Le produit scalaire <code>a · b</code> multiplie les composantes correspondantes
          puis les additionne. Les fonctions reçoivent <code>const Vec3&amp;</code> pour éviter une copie et garantir qu’elles ne changent pas leurs entrées.
        </p>
      </section>

      <section className="space-y-5" id="gravitation">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 2 · Physique</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">De la force à l’accélération</h2>
        </div>
        <p className="leading-7 text-slate-700">
          La loi de la gravitation universelle donne la force exercée par le corps j sur le corps i. Notons <code>rᵢ</code> et <code>rⱼ</code> leurs
          positions, et <code>d = rⱼ − rᵢ</code> le vecteur qui pointe de i vers j.
        </p>
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-center">
          <p className="font-mono text-lg text-slate-900">Fᵢⱼ = G mᵢ mⱼ d / |d|³</p>
          <p className="mt-2 font-mono text-lg text-slate-900">aᵢⱼ = Fᵢⱼ / mᵢ = G mⱼ d / |d|³</p>
        </div>
        <p className="leading-7 text-slate-700">
          La contribution de chaque autre corps s’additionne. Le sens de <code>d</code> est important : le signe attire i vers j. En unités SI,
          <code>G = 6,67430 × 10⁻¹¹ m³ kg⁻¹ s⁻²</code>, la masse est en kg et la distance en m ; le résultat est en m/s².
        </p>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-slate-700">
          <p className="font-bold">Pourquoi un « adoucissement » numérique ?</p>
          <p className="mt-2">Le code remplace <code>|d|²</code> par <code>|d|² + ε²</code> avant le calcul. Cela évite une division par zéro si deux points coïncident.
          Ce paramètre, appelé softening, modifie légèrement la force à très courte distance : ce n’est pas un rayon réel et il ne modélise pas une collision.</p>
        </div>
      </section>

      <section className="space-y-5" id="integration">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 3 · Numérique</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Intégrer le mouvement sans mélanger les instants</h2>
        </div>
        <p className="leading-7 text-slate-700">
          L’accélération dépend des positions. À chaque pas, il faut d’abord calculer toutes les accélérations avec le même état initial,
          ensuite mettre à jour toutes les vitesses, puis toutes les positions. Si on déplace une planète au milieu du calcul des forces,
          les corps utiliseraient des instants différents et le résultat dépendrait de l’ordre de la boucle.
        </p>
        <ol className="list-inside list-decimal space-y-2 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700">
          <li>Calculer <code>aᵢ</code> pour chaque corps à partir des positions actuelles.</li>
          <li>Mettre à jour toutes les vitesses : <code>vᵢ ← vᵢ + aᵢ dt</code>.</li>
          <li>Mettre à jour toutes les positions avec les nouvelles vitesses : <code>rᵢ ← rᵢ + vᵢ dt</code>.</li>
          <li>Recommencer au pas suivant.</li>
        </ol>
        <p className="text-sm leading-6 text-slate-600">
          C’est Euler semi-implicite. Il est souvent plus adapté aux problèmes mécaniques que la version naïve qui met à jour la position avec l’ancienne vitesse,
          mais il reste une approximation. Diminuer <code>dt</code> améliore généralement la résolution, au prix de plus de calculs ; il faut vérifier la convergence.
        </p>
      </section>

      <section className="space-y-5" id="n-corps">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 4 · Code complet</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Un système Soleil–Terre en 3D</h2>
        </div>
        <p className="leading-7 text-slate-700">
          Le programme suivant suit deux corps pendant un an et écrit périodiquement la position terrestre en unités astronomiques dans un format CSV.
          La gravité est calculée par une double boucle : pour N corps, cela demande environ N² interactions par pas, ce qui convient à quelques planètes.
        </p>
        <pre className={codeClass}><code>{`#include <cmath>
#include <cstddef>
#include <iostream>
#include <string>
#include <vector>

constexpr double G = 6.67430e-11;
constexpr double AU_m = 1.495978707e11;

struct Vec3 {
    double x;
    double y;
    double z;
};

Vec3 ajouter(const Vec3& a, const Vec3& b) {
    return {a.x + b.x, a.y + b.y, a.z + b.z};
}

Vec3 soustraire(const Vec3& a, const Vec3& b) {
    return {a.x - b.x, a.y - b.y, a.z - b.z};
}

Vec3 multiplier(const Vec3& v, double k) {
    return {v.x * k, v.y * k, v.z * k};
}

double produit_scalaire(const Vec3& a, const Vec3& b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}

struct Corps {
    std::string nom;
    double masse_kg;
    Vec3 position_m;
    Vec3 vitesse_m_s;
};

std::vector<Vec3> calculer_accelerations(const std::vector<Corps>& corps) {
    const double epsilon_m = 1.0e7;
    std::vector<Vec3> acceleration(corps.size(), Vec3{0.0, 0.0, 0.0});

    for (std::size_t i = 0; i < corps.size(); ++i) {
        for (std::size_t j = 0; j < corps.size(); ++j) {
            if (i == j) {
                continue; // un corps n'exerce pas cette formule sur lui-meme
            }

            const Vec3 d = soustraire(corps[j].position_m, corps[i].position_m);
            const double r2 = produit_scalaire(d, d) + epsilon_m * epsilon_m;
            const double inverse_r3 = 1.0 / (r2 * std::sqrt(r2));
            const double facteur = G * corps[j].masse_kg * inverse_r3;
            acceleration[i] = ajouter(acceleration[i], multiplier(d, facteur));
        }
    }
    return acceleration;
}

int main() {
    const double masse_soleil_kg = 1.98847e30;
    const double masse_terre_kg = 5.9722e24;
    const double vitesse_terre_m_s = 29780.0;
    const double vitesse_soleil_m_s = -masse_terre_kg / masse_soleil_kg * vitesse_terre_m_s;

    std::vector<Corps> corps{
        {"Soleil", masse_soleil_kg, {0.0, 0.0, 0.0}, {0.0, vitesse_soleil_m_s, 0.0}},
        {"Terre", masse_terre_kg, {AU_m, 0.0, 0.0}, {0.0, vitesse_terre_m_s, 0.0}}
    };

    const double dt_s = 3600.0; // une heure
    const int nombre_de_pas = 365 * 24;
    std::cout << "jour,x_terre_AU,y_terre_AU,z_terre_AU" << std::endl;

    for (int pas = 0; pas <= nombre_de_pas; ++pas) {
        if (pas % (30 * 24) == 0 || pas == nombre_de_pas) {
            const double jour = pas * dt_s / 86400.0;
            const Vec3 p = corps[1].position_m;
            std::cout << jour << "," << p.x / AU_m << ","
                      << p.y / AU_m << "," << p.z / AU_m << std::endl;
        }
        if (pas == nombre_de_pas) {
            break;
        }

        const std::vector<Vec3> acceleration = calculer_accelerations(corps);

        // Phase 1 : mettre a jour toutes les vitesses.
        for (std::size_t i = 0; i < corps.size(); ++i) {
            corps[i].vitesse_m_s = ajouter(
                corps[i].vitesse_m_s,
                multiplier(acceleration[i], dt_s));
        }

        // Phase 2 : avancer toutes les positions avec les nouvelles vitesses.
        for (Corps& c : corps) {
            c.position_m = ajouter(c.position_m, multiplier(c.vitesse_m_s, dt_s));
        }
    }
    return 0;
}`}</code></pre>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"><code>std::vector&lt;Corps&gt;</code> possède les corps et gère son stockage ; pas de <code>new</code> ou <code>delete</code> manuel.</div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"><code>const std::vector&lt;Corps&gt;&amp;</code> lit la liste sans la copier ni la modifier.</div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"><code>std::size_t</code> est un type entier non signé adapté aux indices et aux tailles de conteneurs.</div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"><code>constexpr</code> déclare ici des constantes connues à la compilation, comme G et l’unité astronomique.</div>
        </div>
        <p className="text-sm leading-6 text-slate-600">
          La vitesse initiale du Soleil compense approximativement la quantité de mouvement de la Terre : le centre de masse du système reste presque au repos.
          L’approximation ne rend pas le modèle parfait ; elle évite simplement de fixer artificiellement le Soleil.
        </p>
      </section>

      <section className="space-y-5" id="verification">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 5 · Validation scientifique</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Ne pas croire un résultat sans le tester</h2>
        </div>
        <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-slate-700">
          <li><strong>Unités :</strong> employer partout SI (kg, m, s) ; vérifier que l’accélération calculée est en m/s².</li>
          <li><strong>Cas simple :</strong> avec un seul corps, sa force gravitationnelle totale doit être nulle.</li>
          <li><strong>Symétrie :</strong> deux corps isolés s’attirent dans des directions opposées.</li>
          <li><strong>Pas de temps :</strong> relancer avec <code>dt = 1800 s</code> puis comparer le CSV à <code>dt = 3600 s</code>.</li>
          <li><strong>Conservation :</strong> dans un système isolé, l’énergie totale devrait rester proche d’une constante ; une dérive importante révèle souvent un pas trop grand ou un bug.</li>
        </ul>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900">Défi · Ajouter une planète</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Ajoute Mars au vecteur <code>corps</code> avec sa masse, sa position approximative sur l’axe x et une vitesse initiale tangentielle sur l’axe y. Le programme doit automatiquement prendre Mars en compte : aucune nouvelle boucle spéciale n’est nécessaire.</p>
          <details className="mt-4 rounded-lg bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-blue-800">Afficher des valeurs de départ possibles</summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">Pour un premier test simplifié, prends une distance de 2,279 × 10¹¹ m, une masse de 6,417 × 10²³ kg et une vitesse tangentielle d’environ 24 100 m/s. L’orbite ne sera pas parfaitement képlérienne si les interactions avec les autres corps sont prises en compte ; c’est précisément ce que le modèle calcule.</p>
          </details>
        </div>
      </section>

      <section id="limites-relativite" className="rounded-xl border border-red-100 bg-red-50 p-6">
        <h2 className="text-xl font-bold text-slate-950">Important : gravitation newtonienne ≠ simulation de trou noir</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          Le programme ci-dessus est utile pour les orbites planétaires lentes et les champs gravitationnels faibles. Il n’inclut ni la courbure de l’espace-temps
          ni les effets relativistes. Pour un trou noir non rotatif et non chargé, le rayon de Schwarzschild vaut <code>rₛ = 2GM/c²</code>, mais connaître cette
          formule ne suffit pas à simuler une trajectoire relativiste. Il faudra étudier les géodésiques, les équations différentielles et leur intégration numérique,
          puis comparer les résultats à des cas de référence. Cette frontière entre les modèles fait partie de la rigueur scientifique.
        </p>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-950"><CheckCircle2 className="h-5 w-5 text-emerald-700" /> Bilan du parcours</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Tu as suivi une progression complète : valeurs et calculs en 1D, vecteurs et trajectoires en 2D, objets et collections, puis gravitation de plusieurs corps en 3D.
          Le code n’est qu’un modèle : précise toujours ses hypothèses, teste des cas simples et vérifie unités, pas de temps et conservation des grandeurs.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/formation" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Retour aux modules</Link>
          <Link href="/projets" className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">Explorer les projets</Link>
        </div>
      </section>
    </article>
  );
}

