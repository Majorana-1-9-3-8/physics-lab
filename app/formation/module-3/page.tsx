import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, Clock3, Target } from "lucide-react";

const codeClass = "my-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 p-5 text-sm leading-6 text-slate-100";

export default function ModuleThreePage() {
  return (
    <article className="mx-auto max-w-4xl space-y-10 pb-12">
      <Link href="/formation" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900">
        <ArrowLeft className="h-4 w-4" /> Retour à la formation
      </Link>

      <header className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <div className="mb-5 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">MODULE 03</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">Intermédiaire</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Classes, STL et C++ moderne</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Organise un programme qui grandit : encapsule l’état d’une particule dans une classe, manipule des collections avec la STL,
          et laisse C++ gérer la durée de vie des ressources.
        </p>
        <div className="mt-7 flex flex-wrap gap-5 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-blue-700" /> Environ 3–4 h</span>
          <span className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-blue-700" /> 5 leçons · 2 exercices</span>
        </div>
      </header>

      <section className="rounded-xl border border-blue-100 bg-blue-50/70 p-6">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900"><Target className="h-5 w-5 text-blue-700" /> Prérequis et objectifs</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">Prérequis : fonctions, structures, références, <code>std::vector</code> et la simulation 2D du Module 2. Ici, la programmation orientée objet sert à rendre le modèle plus clair — pas à ajouter des classes partout.</p>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
          <li>• Séparer interface et détails internes avec <code>class</code>.</li>
          <li>• Construire un objet dans un état valide.</li>
          <li>• Utiliser la STL pour stocker, parcourir et analyser des particules.</li>
          <li>• Comprendre RAII et préférer les pointeurs intelligents à <code>new/delete</code>.</li>
        </ul>
      </section>

      <nav aria-label="Leçons du module" className="rounded-xl border border-slate-200 bg-white p-5">
        <p className="mb-3 text-sm font-bold text-slate-800">Dans ce module</p>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link href="#classes" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">1. Classes</Link>
          <Link href="#constructeurs" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">2. Constructeurs</Link>
          <Link href="#stl" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">3. STL</Link>
          <Link href="#raii" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">4. Mémoire moderne</Link>
          <Link href="#simulation-objet" className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-blue-50">5. Simulation</Link>
        </div>
      </nav>

      <section className="space-y-5" id="classes">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 1</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">De la structure à la classe</h2>
        </div>
        <p className="leading-7 text-slate-700">
          Une <code>struct</code> regroupe des données ; une <code>class</code> peut aussi regrouper les opérations qui agissent sur ces données.
          Par défaut, les membres d’une <code>struct</code> sont publics. Ceux d’une <code>class</code> sont privés : le code extérieur doit passer
          par les fonctions publiques de l’objet. Cette séparation s’appelle l’encapsulation.
        </p>
        <pre className={codeClass}><code>{`class Compteur {
private:
    int valeur_ = 0;

public:
    void incrementer() {
        ++valeur_;
    }

    int valeur() const {
        return valeur_;
    }
};`}</code></pre>
        <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-slate-600">
          <li><code>private:</code> protège l’état ; un appelant ne peut pas faire <code>compteur.valeur_ = -100</code>.</li>
          <li><code>public:</code> expose les opérations autorisées.</li>
          <li>Le mot <code>const</code> après <code>valeur()</code> promet que cette fonction ne modifie pas l’objet.</li>
          <li>Il n’y a pas encore de constructeur explicite ; l’initialiseur <code>= 0</code> garantit malgré tout un état initial défini.</li>
        </ul>
      </section>

      <section className="space-y-5" id="constructeurs">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 2</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Constructeur, invariant et méthodes</h2>
        </div>
        <p className="leading-7 text-slate-700">
          Un constructeur est appelé lors de la création de chaque objet. Sa liste d’initialisation, après le caractère <code>:</code>, donne
          directement une valeur aux membres. Un invariant est une règle qui doit rester vraie, par exemple « la masse d’une particule est positive ».
        </p>
        <pre className={codeClass}><code>{`#include <stdexcept>

class Particle {
private:
    double masse_kg_;

public:
    explicit Particle(double masse_kg)
        : masse_kg_(masse_kg) {
        if (masse_kg_ <= 0.0) {
            throw std::invalid_argument("La masse doit etre positive");
        }
    }

    double masse_kg() const {
        return masse_kg_;
    }
};`}</code></pre>
        <p className="text-sm leading-6 text-slate-600">
          <code>explicit</code> évite une conversion implicite surprenante. <code>throw</code> signale ici une entrée impossible ; pour l’instant,
          retiens simplement qu’un objet mal construit ne doit pas être utilisé comme s’il représentait une masse physique valide.
        </p>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900">Notation importante : le suffixe _</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Dans cet exemple, <code>masse_kg_</code> est un membre privé et <code>masse_kg</code> le paramètre reçu par le constructeur. Ce suffixe est une convention de nommage, pas un caractère spécial du langage.</p>
        </div>
      </section>

      <section className="space-y-5" id="stl">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 3</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">STL : des outils pour les collections</h2>
        </div>
        <p className="leading-7 text-slate-700">
          La bibliothèque standard fournit des conteneurs et des algorithmes testés. <code>std::vector&lt;T&gt;</code> stocke une suite de valeurs de type
          <code> T</code> qui peut grandir. <code>reserve</code> réserve une capacité pour limiter les réallocations ; ce n’est pas une obligation pour
          que le code soit correct.
        </p>
        <pre className={codeClass}><code>{`#include <iostream>
#include <vector>

int main() {
    std::vector<double> temperatures_C;
    temperatures_C.reserve(1000);
    temperatures_C.push_back(12.5);
    temperatures_C.push_back(13.0);

    for (const double temperature : temperatures_C) {
        std::cout << temperature << std::endl;
    }
    return 0;
}`}</code></pre>
        <p className="text-sm leading-6 text-slate-600">
          La boucle « range-based for » lit chaque élément sans manipuler d’indice. Pour de gros objets, utilise plutôt une référence constante,
          <code> const auto&amp; objet</code>, afin d’éviter une copie. <code>auto</code> demande au compilateur de déduire le type à partir de l’expression.
        </p>
        <pre className={codeClass}><code>{`#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<double> temperatures_C{12.5, 13.0, 11.8};
    const auto plus_chaud = std::max_element(
        temperatures_C.begin(), temperatures_C.end());

    if (plus_chaud != temperatures_C.end()) {
        std::cout << "Maximum : " << *plus_chaud << std::endl;
    }
    return 0;
}`}</code></pre>
        <p className="text-sm leading-6 text-slate-600">
          <code>begin()</code> et <code>end()</code> délimitent la collection. <code>std::max_element</code> renvoie un itérateur vers la plus grande valeur,
          ou <code>end()</code> si le vecteur est vide. Le test évite de lire un résultat inexistant ; l’opérateur <code>*</code> lit la valeur désignée par l’itérateur.
        </p>
      </section>

      <section className="space-y-5" id="raii">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 4</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Durée de vie, RAII et pointeurs intelligents</h2>
        </div>
        <p className="leading-7 text-slate-700">
          RAII signifie qu’une ressource est possédée par un objet dont la durée de vie est claire. Quand l’objet propriétaire sort de portée,
          le destructeur libère sa ressource automatiquement. <code>std::vector</code> applique déjà ce principe à sa mémoire.
        </p>
        <p className="leading-7 text-slate-700">
          Si un objet doit être créé dynamiquement avec un propriétaire unique, <code>std::unique_ptr</code> exprime cette propriété. Utilise
          <code> std::make_unique</code> ; ne fais pas un <code>new</code> suivi d’un <code>delete</code> manuel.
        </p>
        <pre className={codeClass}><code>{`#include <iostream>
#include <memory>
#include <stdexcept>

class Particle {
private:
    double masse_kg_;
public:
    explicit Particle(double masse_kg) : masse_kg_(masse_kg) {
        if (masse_kg_ <= 0.0) {
            throw std::invalid_argument("La masse doit etre positive");
        }
    }
    double masse_kg() const { return masse_kg_; }
};

int main() {
    auto particule = std::make_unique<Particle>(2.0);
    std::cout << particule->masse_kg() << " kg" << std::endl;
    return 0;
}`}</code></pre>
        <p className="text-sm leading-6 text-slate-600">
          <code>auto</code> déduit ici le type <code>std::unique_ptr&lt;Particle&gt;</code>. La flèche <code>-&gt;</code> appelle une méthode sur l’objet pointé.
          Quand <code>particule</code> sort de portée, il détruit automatiquement la particule. Pour la plupart des objets simples, préfère néanmoins
          une variable locale ou un <code>std::vector</code> : un pointeur intelligent n’est pas requis partout.
        </p>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-slate-700">
          <strong>Règle moderne :</strong> commence par une valeur normale. Utilise <code>std::vector</code> pour une collection, <code>std::unique_ptr</code>
          si une propriété dynamique unique est vraiment nécessaire, et <code>std::shared_ptr</code> seulement quand plusieurs propriétaires partagés sont justifiés.
        </div>
      </section>

      <section className="space-y-5" id="simulation-objet">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Leçon 5 · Projet guidé</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Une collection de particules 2D</h2>
        </div>
        <p className="leading-7 text-slate-700">
          L’objet <code>Particle2D</code> possède une position, une vitesse et une masse. Sa méthode <code>avancer</code> met à jour l’état sous une
          accélération donnée. L’exemple crée deux particules dans un <code>std::vector</code>, applique la gravité pendant une seconde, puis affiche leurs positions.
        </p>
        <pre className={codeClass}><code>{`#include <iostream>
#include <stdexcept>
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

class Particle2D {
private:
    Vec2 position_m_;
    Vec2 vitesse_m_s_;
    double masse_kg_;

public:
    Particle2D(Vec2 position, Vec2 vitesse, double masse_kg)
        : position_m_(position), vitesse_m_s_(vitesse), masse_kg_(masse_kg) {
        if (masse_kg_ <= 0.0) {
            throw std::invalid_argument("La masse doit etre positive");
        }
    }

    void avancer(double dt_s, const Vec2& acceleration_m_s2) {
        vitesse_m_s_ = ajouter(vitesse_m_s_, multiplier(acceleration_m_s2, dt_s));
        position_m_ = ajouter(position_m_, multiplier(vitesse_m_s_, dt_s));
    }

    const Vec2& position() const { return position_m_; }
    const Vec2& vitesse() const { return vitesse_m_s_; }
    double masse_kg() const { return masse_kg_; }
};

int main() {
    const double dt_s = 0.01;
    const Vec2 gravite_m_s2{0.0, -9.81};
    std::vector<Particle2D> particules;
    particules.reserve(2);
    particules.emplace_back(Vec2{0.0, 0.0}, Vec2{12.0, 18.0}, 1.0);
    particules.emplace_back(Vec2{0.0, 5.0}, Vec2{8.0, 14.0}, 2.0);

    for (int pas = 0; pas < 100; ++pas) {
        for (Particle2D& particule : particules) {
            particule.avancer(dt_s, gravite_m_s2);
        }
    }

    for (const Particle2D& particule : particules) {
        const Vec2& p = particule.position();
        std::cout << "m=" << particule.masse_kg() << " kg, position=("
                  << p.x_m << ", " << p.y_m << ") m" << std::endl;
    }
    return 0;
}`}</code></pre>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"><code>private</code> protège l’état ; on ne peut pas modifier directement la position depuis <code>main</code>.</div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"><code>emplace_back</code> construit une particule à la fin du vecteur ; <code>reserve(2)</code> est une optimisation facultative.</div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"><code>Particle2D&amp;</code> dans la première boucle donne accès à l’objet modifiable, sans le copier.</div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"><code>const Particle2D&amp;</code> dans la seconde boucle lit chaque objet sans le modifier ni le copier.</div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900">Exercice · Ajouter l’énergie cinétique</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Ajoute à <code>Particle2D</code> une méthode constante <code>energie_cinetique_j()</code> qui renvoie ½ m (vₓ² + vᵧ²). Vérifie que le résultat est en joules.</p>
          <details className="mt-4 rounded-lg bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-blue-800">Afficher la correction</summary>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs leading-5 text-slate-100"><code>{`double energie_cinetique_j() const {
    const double v2_m2_s2 = vitesse_m_s_.x_m * vitesse_m_s_.x_m
                          + vitesse_m_s_.y_m * vitesse_m_s_.y_m;
    return 0.5 * masse_kg_ * v2_m2_s2;
}`}</code></pre>
            <p className="mt-3 text-sm leading-6 text-slate-600">Les unités sont kg × (m/s)², soit kg·m²/s² = joule. La méthode est <code>const</code> parce qu’elle mesure l’état sans le changer.</p>
          </details>
        </div>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-950"><CheckCircle2 className="h-5 w-5 text-emerald-700" /> Bilan du module</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Tu sais organiser un état dans une classe, protéger ses données, stocker plusieurs objets avec la STL et laisser les objets propriétaires
          gérer leur mémoire. Ces outils sont la base d’un simulateur maintenable, où une particule ou une planète a un état et des opérations bien définis.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/formation" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Retour aux modules</Link>
          <Link href="/formation/module-4" className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">Continuer vers le Module 4</Link>
        </div>
      </section>
    </article>
  );
}

