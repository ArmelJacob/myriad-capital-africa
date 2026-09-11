/* ════════════════════════════════════════════════════════════════
   CONTENU DU SITE — FR / EN
   Pour modifier un texte du site, c'est ici (puis commit GitHub →
   redéploiement Vercel automatique).
   ⚠ Les valeurs marquées "À VALIDER" sont à confirmer avant mise en ligne.
   ════════════════════════════════════════════════════════════════ */

export const CONTENT = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Nos Métiers",
      partners: "Partenaires",
      team: "Équipe",
      contact: "Contact",
    },
    home: {
      heroKicker: "Corporate Finance & Advisory — Afrique",
      heroTitle: ["Structurer le capital qui ", "transforme", " l'Afrique."],
      heroLead:
        "Myriad Capital Africa est une boutique panafricaine indépendante de conseil financier. Nous concevons, structurons et exécutons des solutions de financement au service des entreprises, des États et des projets qui façonnent le continent.",
      heroCta1: "Découvrir nos métiers",
      heroCta2: "Nous contacter",
      scroll: "Défiler",
      // ⚠ À VALIDER — chiffres clés affichés en bandeau
      kpis: [
        { value: "3", sup: "", label: "Pôles d'expertise" },
        { value: "60", sup: "+", label: "Partenaires institutionnels" },
        { value: "100", sup: "%", label: "Dédiés aux marchés africains" },
      ],
      pillarsKicker: "Nos métiers",
      pillarsTitle: ["Trois pôles, ", "une", " exigence."],
      pillarsCta: "En savoir plus",
      missionKicker: "Notre conviction",
      missionQuote:
        "Le capital bien structuré est le levier le plus puissant de la transformation économique africaine.",
      approachKicker: "Notre approche",
      approachTitle: ["Indépendance, rigueur, ", "impact", "."],
      partnersKicker: "Notre écosystème",
      partnersTitle: ["Un réseau panafricain et ", "international", "."],
      partnersLead:
        "Banques multilatérales de développement, DFI, agences de crédit export, banques commerciales et fonds d'investissement : nous mobilisons un écosystème de plus de soixante institutions partenaires au service de chaque mandat.",
      partnersCta: "Découvrir nos partenaires",
      ctaTitle: ["Un projet à structurer, un financement à ", "lever", " ?"],
      ctaLead: "Parlons-en. Nos associés vous répondent directement.",
      ctaBtn: "Prendre contact",
    },
    pillars: [
      {
        roman: "I",
        title: "Conseil Stratégique",
        teaser:
          "Éclairer les décisions qui engagent : positionnement, croissance, faisabilité et trajectoires de développement sur les marchés africains.",
      },
      {
        roman: "II",
        title: "Corporate Finance",
        teaser:
          "Structurer et lever le capital : dette, fonds propres, financements structurés et opérations de haut de bilan, de l'origination au closing.",
      },
      {
        roman: "III",
        title: "Conseil Opérationnel",
        teaser:
          "Transformer la stratégie en résultats : pilotage de l'exécution, performance opérationnelle et accompagnement des équipes dirigeantes.",
      },
    ],
    about: {
      heroKicker: "À propos",
      heroTitle: ["Une boutique indépendante, ", "ancrée", " en Afrique."],
      heroLead:
        "Basée à Abidjan et active sur l'ensemble du continent, Myriad Capital Africa accompagne entreprises, institutions et porteurs de projets dans leurs opérations financières les plus structurantes.",
      whoKicker: "Qui sommes-nous",
      whoTitle: ["Structure, Finance & ", "Impact", "."],
      whoBody1:
        "Myriad Capital Africa est née d'une conviction : les projets africains méritent une ingénierie financière du meilleur standard international, portée par des équipes qui connaissent intimement les réalités du continent.",
      whoBody2:
        "Cabinet de conseil indépendant en corporate finance et advisory, nous intervenons sur trois métiers complémentaires — le conseil stratégique, le corporate finance et le conseil opérationnel — pour offrir à nos clients un accompagnement de bout en bout, de la conception d'un projet à son financement et à son exécution.",
      valuesKicker: "Nos engagements",
      valuesTitle: ["Ce qui guide chacun de nos ", "mandats", "."],
      values: [
        {
          title: "Indépendance",
          body: "Nous ne servons qu'un seul intérêt : celui de nos clients. Notre indépendance garantit des conseils objectifs, libres de tout conflit d'intérêts.",
        },
        {
          title: "Excellence d'exécution",
          body: "Chaque livrable répond aux standards des grandes places financières internationales — avec la précision et la réactivité d'une boutique.",
        },
        {
          title: "Impact durable",
          body: "Nous privilégions les projets qui créent de la valeur économique et sociale de long terme pour les territoires et les communautés.",
        },
        {
          title: "Ancrage africain",
          body: "Notre connaissance des marchés, des régulateurs et des écosystèmes financiers africains — notamment la zone UEMOA — est au cœur de notre valeur ajoutée.",
        },
        {
          title: "Partenariat",
          body: "Nous travaillons aux côtés de nos clients dans la durée, comme un prolongement de leurs équipes, jusqu'à la concrétisation de leurs objectifs.",
        },
        {
          title: "Confidentialité",
          body: "La discrétion et la protection des intérêts de nos clients sont des conditions non négociables de notre pratique.",
        },
      ],
      quote:
        "Allier les standards de la finance internationale à une connaissance intime des marchés africains.",
      sectorsKicker: "Secteurs d'intervention",
      sectorsTitle: ["Là où se joue la ", "transformation", "."],
      sectors: [
        "Infrastructures & Transport",
        "Énergie",
        "Immobilier & Hôtellerie",
        "Industrie & Agro-industrie",
        "Banques & Institutions financières",
        "Santé",
        "Secteur public & Parapublic",
        "Services & Distribution",
      ],
    },
    services: {
      heroKicker: "Nos métiers",
      heroTitle: ["Trois expertises, un continuum de ", "valeur", "."],
      heroLead:
        "De la réflexion stratégique au financement, puis à l'exécution : nos trois pôles couvrent l'ensemble du cycle de vie des projets et des entreprises.",
      blocks: [
        {
          num: "I",
          title: "Conseil Stratégique",
          lead:
            "Éclairer les décisions structurantes des dirigeants, des actionnaires et des institutions.",
          activities: [
            {
              title: "Stratégie de croissance & positionnement",
              desc: "Définition des trajectoires de développement, diversification et expansion régionale.",
            },
            {
              title: "Études de faisabilité & business plans",
              desc: "Modélisation économique et financière de projets, analyses de marché et de rentabilité.",
            },
            {
              title: "Conseil aux États & institutions publiques",
              desc: "Structuration de projets publics, partenariats public-privé et mobilisation de ressources.",
            },
            {
              title: "Due diligence stratégique",
              desc: "Évaluation indépendante d'opportunités d'investissement et de partenariats.",
            },
          ],
        },
        {
          num: "II",
          title: "Corporate Finance",
          lead:
            "Structurer, négocier et exécuter les opérations de financement et de haut de bilan.",
          activities: [
            {
              title: "Levée de fonds — dette & fonds propres",
              desc: "Origination et placement auprès de DFI, banques, fonds et investisseurs institutionnels.",
            },
            {
              title: "Financements structurés",
              desc: "Financement de projets, financements adossés à des revenus, titrisation et solutions de garantie.",
            },
            {
              title: "Marchés de capitaux",
              desc: "Émissions obligataires et opérations sur les marchés régionaux, notamment la BRVM et la zone UEMOA.",
            },
            {
              title: "Fusions-acquisitions",
              desc: "Conseil à l'achat et à la vente, valorisation, négociation et exécution des transactions.",
            },
          ],
        },
        {
          num: "III",
          title: "Conseil Opérationnel",
          lead:
            "Transformer les plans en résultats mesurables, aux côtés des équipes dirigeantes.",
          activities: [
            {
              title: "Pilotage de programmes & PMO",
              desc: "Structuration de la gouvernance projet, suivi des jalons et coordination des parties prenantes.",
            },
            {
              title: "Amélioration de la performance",
              desc: "Optimisation des organisations, des processus et de la performance financière.",
            },
            {
              title: "Accompagnement à l'exécution",
              desc: "Appui opérationnel aux directions générales et financières dans la mise en œuvre des projets.",
            },
            {
              title: "Renforcement de capacités",
              desc: "Transfert de compétences et structuration des fonctions finance et stratégie.",
            },
          ],
        },
      ],
      ctaTitle: ["Discutons de votre ", "projet", "."],
      ctaBtn: "Contacter nos équipes",
    },
    partners: {
      heroKicker: "Partenaires",
      heroTitle: ["Un écosystème financier ", "panafricain", "."],
      heroLead:
        "La force de Myriad Capital Africa réside dans la profondeur de son réseau : plus de soixante institutions financières partenaires, mobilisées en fonction des besoins de chaque mandat.",
      cats: [
        {
          title: "Banques multilatérales & DFI",
          desc: "Institutions de financement du développement, partenaires naturels des projets structurants du continent.",
          items: ["BAD", "BOAD", "IFC", "Proparco", "AFD", "BEI", "AFREXIMBANK", "BIDC", "TDB", "BII", "Invest International", "BERD", "DBSA"],
        },
        {
          title: "Agences de crédit export (ECA)",
          desc: "Couverture et financement des importations d'équipements et des contrats internationaux.",
          items: ["ECA européennes", "ECA asiatiques", "ECA nord-américaines"],
        },
        {
          title: "Banques commerciales",
          desc: "Banques panafricaines et internationales, pour les financements bancaires classiques et syndiqués.",
          items: ["Groupes bancaires panafricains", "Banques internationales", "Banques régionales UEMOA"],
        },
        {
          title: "Fonds d'investissement",
          desc: "Capital-investissement, infrastructure et dette privée, en fonds propres comme en quasi-fonds propres.",
          items: ["Fonds d'infrastructure", "Fonds de private equity", "Fonds de dette privée"],
        },
        {
          title: "Family offices & investisseurs privés",
          desc: "Capitaux privés à la recherche d'opportunités africaines de qualité institutionnelle.",
          items: ["Family offices", "Investisseurs privés qualifiés"],
        },
        {
          title: "Cabinets juridiques & experts",
          desc: "Conseils juridiques, fiscaux et techniques de premier plan, associés à chaque transaction.",
          items: ["Cabinets d'avocats d'affaires", "Conseils fiscaux", "Experts techniques sectoriels"],
        },
      ],
      note:
        "Liste de catégories indicative. Les partenaires sont mobilisés au cas par cas, selon la nature et la géographie de chaque mandat.",
    },
    team: {
      heroKicker: "Équipe",
      heroTitle: ["Des associés ", "engagés", " à vos côtés."],
      heroLead:
        "Une équipe resserrée de professionnels de la finance, directement impliqués sur chaque mandat, du premier échange au closing.",
      members: [
        {
          initials: "AA",
          name: "Armel Jacob Assanvoh",
          role: "Managing Director — Co-fondateur",
          bio: "Co-fondateur de Myriad Capital Africa, Armel pilote l'origination et la structuration des mandats du cabinet. Il a accompagné des opérations de financement et de conseil dans les infrastructures, l'immobilier, l'hôtellerie et le secteur public à travers l'Afrique de l'Ouest.",
        },
        {
          initials: "PK",
          name: "Philippe N'Guessan Koffi",
          role: "Director — Structured Finance & Capital Solutions",
          bio: "Philippe dirige le pôle financements structurés et solutions de capital. Il dispose d'une expérience étendue des financements bancaires, des financements structurés multi-pays et des opérations de marché en zone UEMOA.",
        },
      ],
    },
    contact: {
      heroKicker: "Contact",
      heroTitle: ["Parlons de votre ", "projet", "."],
      heroLead:
        "Nous répondons rapidement et en toute confidentialité. Premier échange sans engagement.",
      infoTitle: "Coordonnées",
      lines: [
        // ⚠ À VALIDER — remplacer par les coordonnées officielles
        { label: "Email", value: "contact@myriadcapitalafrica.com", href: "mailto:contact@myriadcapitalafrica.com" },
        { label: "Localisation", value: "Abidjan, Côte d'Ivoire", href: null },
        { label: "Zone d'intervention", value: "Afrique — hub UEMOA", href: null },
      ],
      formTitle: "Écrivez-nous",
      formLead:
        "Décrivez votre projet en quelques lignes : secteur, géographie, besoin de financement ou de conseil. Un associé vous recontacte directement.",
      formBtn: "Envoyer un email",
    },
    footer: {
      baseline: "Structure, Finance & Impact.",
      nav: "Navigation",
      contact: "Contact",
      rights: "Tous droits réservés.",
      legal: "Myriad Capital Africa — Abidjan, Côte d'Ivoire",
    },
  },

  /* ══════════════════ ENGLISH ══════════════════ */
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Expertise",
      partners: "Partners",
      team: "Team",
      contact: "Contact",
    },
    home: {
      heroKicker: "Corporate Finance & Advisory — Africa",
      heroTitle: ["Structuring the capital that ", "transforms", " Africa."],
      heroLead:
        "Myriad Capital Africa is an independent pan-African financial advisory boutique. We design, structure and execute financing solutions for the companies, governments and projects shaping the continent.",
      heroCta1: "Explore our expertise",
      heroCta2: "Get in touch",
      scroll: "Scroll",
      kpis: [
        { value: "3", sup: "", label: "Practice areas" },
        { value: "60", sup: "+", label: "Institutional partners" },
        { value: "100", sup: "%", label: "Dedicated to African markets" },
      ],
      pillarsKicker: "Our expertise",
      pillarsTitle: ["Three practices, ", "one", " standard."],
      pillarsCta: "Learn more",
      missionKicker: "Our conviction",
      missionQuote:
        "Well-structured capital is the most powerful lever of Africa's economic transformation.",
      approachKicker: "Our approach",
      approachTitle: ["Independence, rigour, ", "impact", "."],
      partnersKicker: "Our ecosystem",
      partnersTitle: ["A pan-African and ", "international", " network."],
      partnersLead:
        "Multilateral development banks, DFIs, export credit agencies, commercial banks and investment funds: we mobilise an ecosystem of more than sixty partner institutions for every mandate.",
      partnersCta: "Discover our partners",
      ctaTitle: ["A project to structure, capital to ", "raise", "?"],
      ctaLead: "Let's talk. Our partners answer you directly.",
      ctaBtn: "Contact us",
    },
    pillars: [
      {
        roman: "I",
        title: "Strategic Advisory",
        teaser:
          "Informing decisions that matter: positioning, growth, feasibility and development trajectories across African markets.",
      },
      {
        roman: "II",
        title: "Corporate Finance",
        teaser:
          "Structuring and raising capital: debt, equity, structured finance and capital transactions, from origination to closing.",
      },
      {
        roman: "III",
        title: "Operational Advisory",
        teaser:
          "Turning strategy into results: execution management, operational performance and support to leadership teams.",
      },
    ],
    about: {
      heroKicker: "About us",
      heroTitle: ["An independent boutique, ", "rooted", " in Africa."],
      heroLead:
        "Based in Abidjan and active across the continent, Myriad Capital Africa advises companies, institutions and project sponsors on their most structuring financial operations.",
      whoKicker: "Who we are",
      whoTitle: ["Structure, Finance & ", "Impact", "."],
      whoBody1:
        "Myriad Capital Africa was born from a conviction: African projects deserve financial engineering of the highest international standard, delivered by teams with an intimate knowledge of the continent's realities.",
      whoBody2:
        "An independent corporate finance and advisory firm, we operate across three complementary practices — strategic advisory, corporate finance and operational advisory — to support our clients end-to-end, from project design to financing and execution.",
      valuesKicker: "Our commitments",
      valuesTitle: ["What guides every ", "mandate", "."],
      values: [
        {
          title: "Independence",
          body: "We serve a single interest: our clients'. Our independence guarantees objective advice, free of conflicts of interest.",
        },
        {
          title: "Execution excellence",
          body: "Every deliverable meets the standards of leading international financial centres — with the precision and responsiveness of a boutique.",
        },
        {
          title: "Lasting impact",
          body: "We favour projects that create long-term economic and social value for territories and communities.",
        },
        {
          title: "African roots",
          body: "Our knowledge of African markets, regulators and financial ecosystems — particularly the WAEMU zone — is at the heart of our value added.",
        },
        {
          title: "Partnership",
          body: "We work alongside our clients over time, as an extension of their teams, until their objectives are achieved.",
        },
        {
          title: "Confidentiality",
          body: "Discretion and the protection of our clients' interests are non-negotiable conditions of our practice.",
        },
      ],
      quote:
        "Combining international finance standards with an intimate knowledge of African markets.",
      sectorsKicker: "Sectors",
      sectorsTitle: ["Where transformation ", "happens", "."],
      sectors: [
        "Infrastructure & Transport",
        "Energy",
        "Real Estate & Hospitality",
        "Industry & Agribusiness",
        "Banks & Financial Institutions",
        "Healthcare",
        "Public & Parapublic Sector",
        "Services & Distribution",
      ],
    },
    services: {
      heroKicker: "Our expertise",
      heroTitle: ["Three practices, one continuum of ", "value", "."],
      heroLead:
        "From strategic thinking to financing, then to execution: our three practices cover the full life cycle of projects and companies.",
      blocks: [
        {
          num: "I",
          title: "Strategic Advisory",
          lead: "Informing the structuring decisions of executives, shareholders and institutions.",
          activities: [
            {
              title: "Growth strategy & positioning",
              desc: "Defining development trajectories, diversification and regional expansion.",
            },
            {
              title: "Feasibility studies & business plans",
              desc: "Economic and financial modelling of projects, market and profitability analyses.",
            },
            {
              title: "Advisory to governments & public institutions",
              desc: "Structuring public projects, public-private partnerships and resource mobilisation.",
            },
            {
              title: "Strategic due diligence",
              desc: "Independent assessment of investment and partnership opportunities.",
            },
          ],
        },
        {
          num: "II",
          title: "Corporate Finance",
          lead: "Structuring, negotiating and executing financing and capital transactions.",
          activities: [
            {
              title: "Capital raising — debt & equity",
              desc: "Origination and placement with DFIs, banks, funds and institutional investors.",
            },
            {
              title: "Structured finance",
              desc: "Project finance, revenue-backed financing, securitisation and guarantee solutions.",
            },
            {
              title: "Capital markets",
              desc: "Bond issuances and transactions on regional markets, notably the BRVM and the WAEMU zone.",
            },
            {
              title: "Mergers & acquisitions",
              desc: "Buy-side and sell-side advisory, valuation, negotiation and transaction execution.",
            },
          ],
        },
        {
          num: "III",
          title: "Operational Advisory",
          lead: "Turning plans into measurable results, alongside leadership teams.",
          activities: [
            {
              title: "Programme management & PMO",
              desc: "Project governance, milestone tracking and stakeholder coordination.",
            },
            {
              title: "Performance improvement",
              desc: "Optimising organisations, processes and financial performance.",
            },
            {
              title: "Execution support",
              desc: "Operational support to executive and finance teams in project implementation.",
            },
            {
              title: "Capacity building",
              desc: "Skills transfer and structuring of finance and strategy functions.",
            },
          ],
        },
      ],
      ctaTitle: ["Let's discuss your ", "project", "."],
      ctaBtn: "Contact our team",
    },
    partners: {
      heroKicker: "Partners",
      heroTitle: ["A pan-African financial ", "ecosystem", "."],
      heroLead:
        "Myriad Capital Africa's strength lies in the depth of its network: more than sixty partner financial institutions, mobilised according to the needs of each mandate.",
      cats: [
        {
          title: "Multilateral banks & DFIs",
          desc: "Development finance institutions, natural partners of the continent's structuring projects.",
          items: ["AfDB", "BOAD", "IFC", "Proparco", "AFD", "EIB", "AFREXIMBANK", "EBID", "TDB", "BII", "Invest International", "EBRD", "DBSA"],
        },
        {
          title: "Export credit agencies (ECAs)",
          desc: "Cover and financing for equipment imports and international contracts.",
          items: ["European ECAs", "Asian ECAs", "North American ECAs"],
        },
        {
          title: "Commercial banks",
          desc: "Pan-African and international banks, for conventional and syndicated bank financing.",
          items: ["Pan-African banking groups", "International banks", "WAEMU regional banks"],
        },
        {
          title: "Investment funds",
          desc: "Private equity, infrastructure and private debt, in equity and quasi-equity.",
          items: ["Infrastructure funds", "Private equity funds", "Private debt funds"],
        },
        {
          title: "Family offices & private investors",
          desc: "Private capital seeking institutional-quality African opportunities.",
          items: ["Family offices", "Qualified private investors"],
        },
        {
          title: "Law firms & experts",
          desc: "Leading legal, tax and technical advisers, associated with every transaction.",
          items: ["Business law firms", "Tax advisers", "Sector technical experts"],
        },
      ],
      note:
        "Indicative list of categories. Partners are mobilised on a case-by-case basis, depending on the nature and geography of each mandate.",
    },
    team: {
      heroKicker: "Team",
      heroTitle: ["Partners ", "committed", " to your side."],
      heroLead:
        "A tight-knit team of finance professionals, directly involved in every mandate, from first conversation to closing.",
      members: [
        {
          initials: "AA",
          name: "Armel Jacob Assanvoh",
          role: "Managing Director — Co-founder",
          bio: "Co-founder of Myriad Capital Africa, Armel leads the firm's origination and structuring activity. He has advised on financing and advisory transactions across infrastructure, real estate, hospitality and the public sector throughout West Africa.",
        },
        {
          initials: "PK",
          name: "Philippe N'Guessan Koffi",
          role: "Director — Structured Finance & Capital Solutions",
          bio: "Philippe heads the structured finance and capital solutions practice. He brings extensive experience in bank financing, multi-country structured finance and capital markets transactions in the WAEMU zone.",
        },
      ],
    },
    contact: {
      heroKicker: "Contact",
      heroTitle: ["Let's talk about your ", "project", "."],
      heroLead: "We respond quickly and in full confidence. First conversation without commitment.",
      infoTitle: "Details",
      lines: [
        { label: "Email", value: "contact@myriadcapitalafrica.com", href: "mailto:contact@myriadcapitalafrica.com" },
        { label: "Location", value: "Abidjan, Côte d'Ivoire", href: null },
        { label: "Coverage", value: "Africa — WAEMU hub", href: null },
      ],
      formTitle: "Write to us",
      formLead:
        "Describe your project in a few lines: sector, geography, financing or advisory need. A partner will get back to you directly.",
      formBtn: "Send an email",
    },
    footer: {
      baseline: "Structure, Finance & Impact.",
      nav: "Navigation",
      contact: "Contact",
      rights: "All rights reserved.",
      legal: "Myriad Capital Africa — Abidjan, Côte d'Ivoire",
    },
  },
};

