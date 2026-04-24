import { useState } from 'react';
import './index.css';

const personalProjects = [
  {
    key: 'unioncard',
    url: 'https://unioncard.ch',
    gradient: 'from-blue-600 to-indigo-800',
    icon: '🎓',
  },
  {
    key: 'dentalvet',
    url: 'https://dentalvet.lu',
    gradient: 'from-teal-500 to-emerald-800',
    icon: '🦷',
  },
];

const schoolProjects = [
  { key: 'minishell', url: null,                                            tags: ['C', 'Unix', 'Processes'] },
  { key: 'cub3d',     url: null,                                            tags: ['C', 'Graphics', 'Raycasting'] },
  { key: 'webserv',   url: null,                                            tags: ['C++', 'HTTP', 'Networking'] },
  { key: 'cpp',       url: 'https://github.com/GauthierRohr/CPP',           tags: ['C++', 'OOP'] },
  { key: 'pushswap',  url: 'https://github.com/GauthierRohr/push_swap',     tags: ['C', 'Algorithms'] },
  { key: 'minitalk',  url: 'https://github.com/GauthierRohr/minitalk_bonus', tags: ['C', 'Unix', 'Signals'] },
];

const translations = {
  fr: {
    nav: ['Accueil', 'Projets', 'École', 'Contact'],
    navIds: ['home', 'projects', 'school', 'contact'],
    hero: {
      subtitle: 'Étudiant Développeur · 42 Lausanne',
      description:
        'Ancien externe en médecine reconverti dans la tech. Je construis des applications web modernes avec une approche humaine et centrée utilisateur.',
      cta1: 'Voir mes projets',
      cta2: 'Me contacter',
    },
    personal: {
      title: 'Projets Personnels',
      visitBtn: 'Visiter le site →',
      unioncard: {
        name: 'UnionCard.ch',
        description:
          "Carte de réduction étudiante pour activités et loisirs en Suisse, en cours de création. Connecte les étudiants aux commerces locaux via des offres exclusives.",
        status: 'En développement',
      },
      dentalvet: {
        name: 'DentalVet.lu',
        description:
          "Site web pour un cabinet de dentisterie vétérinaire au Luxembourg. Développé en cycles courts avec retours clients : messagerie intégrée, interface multilingue et tableau de bord admin.",
        status: 'En ligne',
      },
    },
    school: {
      title: 'Projets 42 Lausanne',
      subtitle: 'Réalisés en peer-to-peer, en autonomie complète',
      githubBtn: 'Voir sur GitHub',
      soonLabel: 'Lien bientôt disponible',
      minishell: {
        name: 'Minishell',
        description:
          "Reproduction d'un shell Unix en C — gestion des pipes, redirections, variables d'environnement et commandes built-in.",
      },
      cub3d: {
        name: 'Cub3D',
        description:
          'Moteur de rendu 3D par raycasting en C, inspiré de Wolfenstein 3D, utilisant la bibliothèque graphique MLX42.',
      },
      webserv: {
        name: 'Webserv',
        description:
          'Serveur HTTP/1.1 complet en C++ supportant GET/POST/DELETE, CGI, virtual hosts et fichiers de configuration.',
      },
      cpp: {
        name: 'CPP Modules',
        description:
          'Série de modules couvrant les concepts fondamentaux de C++ : héritage, polymorphisme, templates et STL.',
      },
      pushswap: {
        name: 'Push Swap',
        description:
          'Algorithme de tri de pile en C avec opérations limitées sur deux stacks, optimisé pour minimiser le nombre de mouvements.',
      },
      minitalk: {
        name: 'Minitalk',
        description:
          'Programme de communication inter-processus en C utilisant uniquement les signaux UNIX SIGUSR1 et SIGUSR2.',
      },
    },
    contact: {
      title: 'Contact',
      description:
        'Je recherche un stage de 6 mois à partir de juillet 2026.',
      github: 'GitHub',
    },
  },
  en: {
    nav: ['Home', 'Projects', 'School', 'Contact'],
    navIds: ['home', 'projects', 'school', 'contact'],
    hero: {
      subtitle: 'Student Developer · 42 Lausanne',
      description:
        'Former medical student turned tech. I build modern web applications with a user-centered approach to development.',
      cta1: 'View My Projects',
      cta2: 'Contact Me',
    },
    personal: {
      title: 'Personal Projects',
      visitBtn: 'Visit Website →',
      unioncard: {
        name: 'UnionCard.ch',
        description:
          'Student discount card for activities and leisure in Switzerland, currently in development. Connects students with local businesses through exclusive deals.',
        status: 'In Development',
      },
      dentalvet: {
        name: 'DentalVet.lu',
        description:
          'Website for a veterinary dental practice in Luxembourg. Built in short iterative cycles with client feedback: integrated messaging, multilingual interface, and admin dashboard.',
        status: 'Live',
      },
    },
    school: {
      title: '42 Lausanne Projects',
      subtitle: 'Peer-to-peer projects, developed with full autonomy',
      githubBtn: 'View on GitHub',
      soonLabel: 'Link coming soon',
      minishell: {
        name: 'Minishell',
        description:
          'Unix shell replica in C — pipes, redirections, environment variables, and built-in commands.',
      },
      cub3d: {
        name: 'Cub3D',
        description:
          '3D raycasting rendering engine in C inspired by Wolfenstein 3D, using the MLX42 graphics library.',
      },
      webserv: {
        name: 'Webserv',
        description:
          'Full HTTP/1.1 web server in C++ supporting GET/POST/DELETE, CGI, virtual hosts, and config files.',
      },
      cpp: {
        name: 'CPP Modules',
        description:
          'Module series covering core C++ concepts: inheritance, polymorphism, templates, and STL.',
      },
      pushswap: {
        name: 'Push Swap',
        description:
          'Stack sorting algorithm in C using limited operations on two stacks, optimized for minimum move count.',
      },
      minitalk: {
        name: 'Minitalk',
        description:
          'Inter-process communication program in C using only UNIX signals SIGUSR1 and SIGUSR2.',
      },
    },
    contact: {
      title: 'Contact',
      description:
        "I'm looking for a 6-month internship starting July 2026.",
      github: 'GitHub',
    },
  },
};

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function App() {
  const [language, setLanguage] = useState('fr');
  const t = translations[language];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-gray-900 text-white">
      {/* Language selector */}
      <div className="fixed top-4 right-4 flex space-x-2 z-20">
        <button onClick={() => setLanguage('fr')} className="lang-btn">
          <img src="https://flagcdn.com/w80/fr.png" alt="Français" className="w-8 h-5 object-cover rounded-sm" />
        </button>
        <button onClick={() => setLanguage('en')} className="lang-btn">
          <img src="https://flagcdn.com/w80/gb.png" alt="English" className="w-8 h-5 object-cover rounded-sm" />
        </button>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-10 border-b border-gray-800">
        <ul className="flex justify-center space-x-8 py-4">
          {t.nav.map((item, i) => (
            <li key={item} className="nav-item">
              <button
                onClick={() => scrollTo(t.navIds[i])}
                className="nav-link text-lg font-semibold text-gray-300"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen p-6 pt-20">
        <img
          src="pdp.PNG"
          alt="Gauthier Rohr"
          className="w-36 h-36 rounded-full mb-6 border-4 border-blue-500 object-cover shadow-xl shadow-blue-500/20"
        />
        <h1 className="text-4xl font-bold mb-2">Gauthier Rohr</h1>
        <p className="text-blue-400 text-lg font-medium mb-4">{t.hero.subtitle}</p>
        <p className="text-gray-400 max-w-lg mb-8 text-center leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollTo('projects')}
            className="custom-btn bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            {t.hero.cta1}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="custom-btn bg-transparent border-2 border-blue-500 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white"
          >
            {t.hero.cta2}
          </button>
        </div>
      </section>

      {/* ── Personal Projects ── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">{t.personal.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalProjects.map((proj) => {
              const data = t.personal[proj.key];
              const isLive = data.status === 'En ligne' || data.status === 'Live';
              return (
                <div
                  key={proj.key}
                  className={`relative rounded-2xl bg-gradient-to-br ${proj.gradient} p-8 flex flex-col justify-between shadow-xl`}
                >
                  <div>
                    <div className="text-5xl mb-5">{proj.icon}</div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-white">{data.name}</h3>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          isLive
                            ? 'bg-green-400/20 text-green-300 border border-green-400/30'
                            : 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30'
                        }`}
                      >
                        {data.status}
                      </span>
                    </div>
                    <p className="text-white/80 leading-relaxed">{data.description}</p>
                  </div>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-2.5 rounded-lg transition-all w-fit"
                  >
                    {t.personal.visitBtn}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── School Projects ── */}
      <section id="school" className="py-24 px-6 bg-gray-800/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">{t.school.title}</h2>
          <p className="text-gray-500 text-center mb-14">{t.school.subtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolProjects.map((proj) => {
              const data = t.school[proj.key];
              return (
                <div
                  key={proj.key}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{data.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{data.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {proj.url ? (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      <GitHubIcon />
                      {t.school.githubBtn}
                    </a>
                  ) : (
                    <span className="text-xs text-gray-600 italic">{t.school.soonLabel}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">{t.contact.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:rohr.gauthier@gmail.com"
              className="custom-btn bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-flex items-center gap-2 justify-center"
            >
              <MailIcon />
              rohr.gauthier@gmail.com
            </a>
            <a
              href="https://github.com/GauthierRohr"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-btn bg-gray-800 border border-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:border-blue-500 inline-flex items-center gap-2 justify-center"
            >
              <GitHubIcon />
              {t.contact.github}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 text-sm border-t border-gray-800">
        © 2026 Gauthier Rohr
      </footer>
    </div>
  );
}
