const forumPosts = [
  // ========== TECHNIQUE (10 posts) ==========
  {
    id: 1,
    title: "Comment installer Ubuntu sur 50 PC en masse ?",
    content: "Je dois installer Ubuntu sur 50 ordinateurs de mon lycée. Quelle est la meilleure méthode pour un déploiement automatisé ? J'ai entendu parler de Clonezilla et FOG Project.",
    author: {
      id: 103,
      username: "tech_jean",
      name: "Jean Dupuis",
      school_name: "Lycée Victor Hugo",
      avatar_color: "blue"
    },
    category: "technique",
    tags: ["linux", "installation", "debutant", "ubuntu", "clonezilla"],
    created_at: "2024-12-04T10:30:00Z",
    stats: {
      views: 234,
      replies: 12,
      upvotes: 8
    },
    solved: false
  },
  {
    id: 2,
    title: "Problème de pilotes WiFi sur Dell Latitude",
    content: "Après installation d'Ubuntu 22.04 LTS, le WiFi ne fonctionne pas sur nos Dell Latitude 5420. Quelqu'un a-t-il rencontré ce problème ?",
    author: {
      id: 108,
      username: "it_marine",
      name: "Marine Rousseau",
      school_name: "Collège Jean Moulin",
      avatar_color: "purple"
    },
    category: "technique",
    tags: ["wifi", "pilotes", "dell", "ubuntu", "materiel"],
    created_at: "2024-12-04T09:15:00Z",
    stats: {
      views: 178,
      replies: 8,
      upvotes: 5
    },
    solved: true
  },
  {
    id: 3,
    title: "Quelle distribution Linux choisir pour mon lycée ?",
    content: "Entre Ubuntu, Debian et Linux Mint, laquelle recommandez-vous pour un établissement de 800 élèves ? Nous cherchons la stabilité et la facilité de maintenance.",
    author: {
      id: 106,
      username: "admin_sophie",
      name: "Sophie Martin",
      school_name: "Lycée Descartes",
      avatar_color: "green"
    },
    category: "technique",
    tags: ["linux", "distribution", "conseil", "debian"],
    created_at: "2024-12-03T14:20:00Z",
    stats: {
      views: 189,
      replies: 18,
      upvotes: 12
    },
    solved: false
  },
  {
    id: 4,
    title: "Script de sauvegarde automatique des données élèves",
    content: "Je cherche un script pour sauvegarder automatiquement les dossiers personnels des élèves chaque nuit. Des recommandations ?",
    author: {
      id: 110,
      username: "sysadmin_alex",
      name: "Alexandre Petit",
      school_name: "Lycée Voltaire",
      avatar_color: "orange"
    },
    category: "technique",
    tags: ["sauvegarde", "script", "automatisation", "bash"],
    created_at: "2024-12-03T11:00:00Z",
    stats: {
      views: 145,
      replies: 15,
      upvotes: 10
    },
    solved: true
  },
  {
    id: 5,
    title: "Serveur d'impression avec CUPS : configuration optimale",
    content: "Nous avons 12 imprimantes réseau. Comment configurer CUPS pour une gestion centralisée efficace ?",
    author: {
      id: 112,
      username: "tech_laurent",
      name: "Laurent Mercier",
      school_name: "Collège Rabelais",
      avatar_color: "red"
    },
    category: "technique",
    tags: ["impression", "cups", "reseau", "serveur"],
    created_at: "2024-12-02T16:30:00Z",
    stats: {
      views: 98,
      replies: 6,
      upvotes: 4
    },
    solved: false
  },
  {
    id: 6,
    title: "Migration de Windows 10 vers Ubuntu : checklist",
    content: "Nous migrons 120 postes de Windows 10 vers Ubuntu. Qui peut partager sa checklist de migration pour éviter les pièges ?",
    author: {
      id: 114,
      username: "migration_julie",
      name: "Julie Bernard",
      school_name: "Lycée Montaigne",
      avatar_color: "pink"
    },
    category: "technique",
    tags: ["migration", "windows", "ubuntu", "checklist"],
    created_at: "2024-12-02T10:00:00Z",
    stats: {
      views: 267,
      replies: 22,
      upvotes: 18
    },
    solved: false
  },
  {
    id: 7,
    title: "Gestion des mises à jour avec Landscape",
    content: "Est-ce que Landscape de Canonical vaut le coup pour gérer les mises à jour de 200+ machines ?",
    author: {
      id: 116,
      username: "admin_thomas",
      name: "Thomas Leroy",
      school_name: "Lycée Diderot",
      avatar_color: "indigo"
    },
    category: "technique",
    tags: ["landscape", "mises-a-jour", "gestion", "canonical"],
    created_at: "2024-12-01T14:45:00Z",
    stats: {
      views: 156,
      replies: 11,
      upvotes: 7
    },
    solved: false
  },
  {
    id: 8,
    title: "Problème d'authentification LDAP",
    content: "Notre serveur LDAP refuse les connexions depuis la migration. Erreur 'Invalid credentials'. Help !",
    author: {
      id: 118,
      username: "ldap_pierre",
      name: "Pierre Fontaine",
      school_name: "Collège Zola",
      avatar_color: "teal"
    },
    category: "technique",
    tags: ["ldap", "authentification", "urgent", "serveur"],
    created_at: "2024-12-01T08:30:00Z",
    stats: {
      views: 89,
      replies: 5,
      upvotes: 3
    },
    solved: true
  },
  {
    id: 9,
    title: "Configuration pare-feu UFW pour établissement",
    content: "Quelles règles UFW recommandez-vous pour sécuriser un réseau scolaire de 300 postes ?",
    author: {
      id: 120,
      username: "secu_camille",
      name: "Camille Girard",
      school_name: "Lycée Balzac",
      avatar_color: "cyan"
    },
    category: "technique",
    tags: ["securite", "pare-feu", "ufw", "reseau"],
    created_at: "2024-11-30T15:20:00Z",
    stats: {
      views: 134,
      replies: 9,
      upvotes: 6
    },
    solved: false
  },
  {
    id: 10,
    title: "Dual-boot Ubuntu/Windows : bonne ou mauvaise idée ?",
    content: "On hésite entre dual-boot et 100% Linux. Vos retours d'expérience ?",
    author: {
      id: 122,
      username: "decisio_marc",
      name: "Marc Dubois",
      school_name: "Lycée Rousseau",
      avatar_color: "amber"
    },
    category: "technique",
    tags: ["dual-boot", "windows", "strategie", "conseil"],
    created_at: "2024-11-30T09:00:00Z",
    stats: {
      views: 201,
      replies: 16,
      upvotes: 11
    },
    solved: false
  },

  // ========== BUDGET (10 posts) ==========
  {
    id: 11,
    title: "Budget serré : quelles priorités pour démarrer ?",
    content: "Notre collège a un budget limité de 15K€. Par quoi commencer pour entrer dans NIRD ? Serveur ? Postes élèves ? Formation ?",
    author: {
      id: 105,
      username: "directeur_paul",
      name: "Paul Legrand",
      school_name: "Collège Pasteur",
      avatar_color: "blue"
    },
    category: "budget",
    tags: ["budget", "priorisation", "aide", "debutant"],
    created_at: "2024-12-04T08:00:00Z",
    stats: {
      views: 456,
      replies: 23,
      upvotes: 15
    },
    solved: false
  },
  {
    id: 12,
    title: "Économies réalisées après 1 an sous Linux",
    content: "Retour d'expérience : nous avons économisé 28K€ la première année en passant à Linux. Détails dans le post.",
    author: {
      id: 124,
      username: "finance_anne",
      name: "Anne Moreau",
      school_name: "Lycée Carnot",
      avatar_color: "green"
    },
    category: "budget",
    tags: ["economies", "retour-experience", "success-story"],
    created_at: "2024-12-03T16:00:00Z",
    stats: {
      views: 512,
      replies: 28,
      upvotes: 24
    },
    solved: false
  },
  {
    id: 13,
    title: "Subventions régionales pour la transition numérique",
    content: "Notre région offre des subventions jusqu'à 50K€ pour la transition vers le libre. Comment monter le dossier ?",
    author: {
      id: 126,
      username: "admin_claire",
      name: "Claire Bertrand",
      school_name: "Lycée Hugo",
      avatar_color: "purple"
    },
    category: "budget",
    tags: ["subventions", "financement", "region", "dossier"],
    created_at: "2024-12-03T10:30:00Z",
    stats: {
      views: 378,
      replies: 19,
      upvotes: 16
    },
    solved: false
  },
  {
    id: 14,
    title: "Matériel reconditionné : bons plans ?",
    content: "Où acheter des PC reconditionnés de qualité pour un bon rapport qualité/prix ? Vos fournisseurs recommandés ?",
    author: {
      id: 128,
      username: "achat_david",
      name: "David Roux",
      school_name: "Collège Verne",
      avatar_color: "orange"
    },
    category: "budget",
    tags: ["materiel", "reconditionne", "economie", "fournisseur"],
    created_at: "2024-12-02T14:15:00Z",
    stats: {
      views: 289,
      replies: 17,
      upvotes: 13
    },
    solved: true
  },
  {
    id: 15,
    title: "Comparaison coût Windows vs Linux sur 5 ans",
    content: "J'ai fait une étude comparative détaillée des coûts sur 5 ans. Les résultats sont étonnants !",
    author: {
      id: 130,
      username: "analyse_emma",
      name: "Emma Laurent",
      school_name: "Lycée Curie",
      avatar_color: "red"
    },
    category: "budget",
    tags: ["comparaison", "cout", "analyse", "windows"],
    created_at: "2024-12-02T09:00:00Z",
    stats: {
      views: 445,
      replies: 21,
      upvotes: 19
    },
    solved: false
  },
  {
    id: 16,
    title: "Budget formation : combien prévoir ?",
    content: "Quelle part du budget dédier à la formation des équipes lors de la transition ?",
    author: {
      id: 132,
      username: "rh_sophie",
      name: "Sophie Blanc",
      school_name: "Lycée Pasteur",
      avatar_color: "pink"
    },
    category: "budget",
    tags: ["formation", "budget", "ressources-humaines"],
    created_at: "2024-12-01T16:45:00Z",
    stats: {
      views: 167,
      replies: 12,
      upvotes: 8
    },
    solved: false
  },
  {
    id: 17,
    title: "Appel d'offres pour migration Linux",
    content: "Nous lançons un appel d'offres pour migrer 500 postes. Qui peut partager son cahier des charges ?",
    author: {
      id: 134,
      username: "marche_luc",
      name: "Luc Garnier",
      school_name: "Lycée Molière",
      avatar_color: "indigo"
    },
    category: "budget",
    tags: ["appel-offres", "marche-public", "cahier-charges"],
    created_at: "2024-12-01T11:30:00Z",
    stats: {
      views: 198,
      replies: 14,
      upvotes: 10
    },
    solved: false
  },
  {
    id: 18,
    title: "ROI de la migration : comment le calculer ?",
    content: "Je dois présenter le ROI au conseil d'administration. Quelle méthodologie utilisez-vous ?",
    author: {
      id: 136,
      username: "gestion_julie",
      name: "Julie Mercier",
      school_name: "Collège Sand",
      avatar_color: "teal"
    },
    category: "budget",
    tags: ["roi", "calcul", "presentation", "direction"],
    created_at: "2024-11-30T14:00:00Z",
    stats: {
      views: 223,
      replies: 15,
      upvotes: 12
    },
    solved: true
  },
  {
    id: 19,
    title: "Coût caché de Windows : licences Office",
    content: "On oublie souvent le coût d'Office 365. Avec LibreOffice, on économise 8K€/an !",
    author: {
      id: 138,
      username: "budget_thomas",
      name: "Thomas Petit",
      school_name: "Lycée Flaubert",
      avatar_color: "cyan"
    },
    category: "budget",
    tags: ["office", "libreoffice", "economie", "licence"],
    created_at: "2024-11-30T10:15:00Z",
    stats: {
      views: 312,
      replies: 18,
      upvotes: 14
    },
    solved: false
  },
  {
    id: 20,
    title: "Financement participatif pour notre projet NIRD",
    content: "On a lancé une campagne de financement participatif. Ça peut marcher pour d'autres ?",
    author: {
      id: 140,
      username: "innov_marie",
      name: "Marie Faure",
      school_name: "Collège Duras",
      avatar_color: "amber"
    },
    category: "budget",
    tags: ["financement-participatif", "crowdfunding", "innovation"],
    created_at: "2024-11-29T15:30:00Z",
    stats: {
      views: 156,
      replies: 10,
      upvotes: 7
    },
    solved: false
  },

  // ========== PÉDAGOGIE (10 posts) ==========
  {
    id: 21,
    title: "Formation des enseignants : vos meilleures astuces ?",
    content: "Comment avez-vous formé vos collègues à Linux ? Quelles sont les méthodes qui marchent vraiment pour lever les résistances au changement ?",
    author: {
      id: 107,
      username: "prof_claire",
      name: "Claire Dubois",
      school_name: "Collège Molière",
      avatar_color: "purple"
    },
    category: "pedagogie",
    tags: ["formation", "pedagogie", "changement", "enseignants"],
    created_at: "2024-12-02T16:45:00Z",
    stats: {
      views: 312,
      replies: 27,
      upvotes: 20
    },
    solved: false
  },
  {
    id: 22,
    title: "LibreOffice vs MS Office : arguments pédagogiques",
    content: "Comment convaincre les profs que LibreOffice est aussi efficace pour enseigner ? Vos arguments ?",
    author: {
      id: 142,
      username: "pedagog_pierre",
      name: "Pierre Durand",
      school_name: "Lycée Zola",
      avatar_color: "blue"
    },
    category: "pedagogie",
    tags: ["libreoffice", "office", "argumentation", "bureautique"],
    created_at: "2024-12-03T13:00:00Z",
    stats: {
      views: 245,
      replies: 16,
      upvotes: 11
    },
    solved: false
  },
  {
    id: 23,
    title: "Atelier Linux pour les élèves : retour d'expérience",
    content: "Nous avons créé un club Linux avec 25 élèves. Bilan après 6 mois : succès total ! Voici comment on a fait.",
    author: {
      id: 144,
      username: "club_laurent",
      name: "Laurent Simon",
      school_name: "Lycée Rousseau",
      avatar_color: "green"
    },
    category: "pedagogie",
    tags: ["club", "eleves", "atelier", "success-story"],
    created_at: "2024-12-03T09:30:00Z",
    stats: {
      views: 389,
      replies: 24,
      upvotes: 19
    },
    solved: false
  },
  {
    id: 24,
    title: "Ressources pédagogiques pour enseigner avec Linux",
    content: "Où trouver des ressources pour enseigner les maths, les sciences avec des logiciels libres ?",
    author: {
      id: 146,
      username: "prof_camille",
      name: "Camille Morel",
      school_name: "Collège Prévert",
      avatar_color: "orange"
    },
    category: "pedagogie",
    tags: ["ressources", "logiciels-libres", "maths", "sciences"],
    created_at: "2024-12-02T11:15:00Z",
    stats: {
      views: 278,
      replies: 19,
      upvotes: 15
    },
    solved: true
  },
  {
    id: 25,
    title: "Résistance au changement : comment la gérer ?",
    content: "Certains collègues refusent catégoriquement Linux. Comment avez-vous géré ces situations ?",
    author: {
      id: 148,
      username: "manage_anne",
      name: "Anne Lefebvre",
      school_name: "Lycée Racine",
      avatar_color: "red"
    },
    category: "pedagogie",
    tags: ["resistance", "changement", "management", "psychologie"],
    created_at: "2024-12-02T08:45:00Z",
    stats: {
      views: 423,
      replies: 31,
      upvotes: 23
    },
    solved: false
  },
  {
    id: 26,
    title: "Scratch et Python sous Linux : parfait pour l'initiation",
    content: "Nos élèves adorent coder avec Scratch et Python sous Ubuntu. Retour très positif des profs de techno.",
    author: {
      id: 150,
      username: "code_julien",
      name: "Julien Vincent",
      school_name: "Collège Curie",
      avatar_color: "pink"
    },
    category: "pedagogie",
    tags: ["scratch", "python", "programmation", "technologie"],
    created_at: "2024-12-01T15:30:00Z",
    stats: {
      views: 267,
      replies: 14,
      upvotes: 12
    },
    solved: false
  },
  {
    id: 27,
    title: "Formation continue des équipes : planning annuel",
    content: "Comment organisez-vous la formation continue sur Linux ? Besoin d'idées pour un planning annuel.",
    author: {
      id: 152,
      username: "form_sophie",
      name: "Sophie Girard",
      school_name: "Lycée Stendhal",
      avatar_color: "indigo"
    },
    category: "pedagogie",
    tags: ["formation-continue", "planning", "organisation"],
    created_at: "2024-12-01T10:00:00Z",
    stats: {
      views: 189,
      replies: 11,
      upvotes: 8
    },
    solved: false
  },
  {
    id: 28,
    title: "GIMP en cours d'arts plastiques : ça marche !",
    content: "Les profs d'arts plastiques utilisent GIMP à la place de Photoshop. Résultat : aucune différence pédagogique !",
    author: {
      id: 154,
      username: "arts_marie",
      name: "Marie Perrin",
      school_name: "Collège Matisse",
      avatar_color: "teal"
    },
    category: "pedagogie",
    tags: ["gimp", "arts", "photoshop", "creation"],
    created_at: "2024-11-30T16:20:00Z",
    stats: {
      views: 301,
      replies: 17,
      upvotes: 13
    },
    solved: false
  },
  {
    id: 29,
    title: "Documentation pour les nouveaux profs",
    content: "On a créé un wiki interne pour les nouveaux enseignants. Modèle dispo si ça vous intéresse.",
    author: {
      id: 156,
      username: "doc_lucas",
      name: "Lucas Mercier",
      school_name: "Lycée Diderot",
      avatar_color: "cyan"
    },
    category: "pedagogie",
    tags: ["documentation", "wiki", "onboarding", "guide"],
    created_at: "2024-11-30T12:00:00Z",
    stats: {
      views: 234,
      replies: 13,
      upvotes: 10
    },
    solved: true
  },
  {
    id: 30,
    title: "Élèves ambassadeurs Linux : super efficace !",
    content: "On a formé 10 élèves qui deviennent référents pour leurs camarades. Ça marche du tonnerre !",
    author: {
      id: 158,
      username: "mentor_emma",
      name: "Emma Rousseau",
      school_name: "Collège Balzac",
      avatar_color: "amber"
    },
    category: "pedagogie",
    tags: ["ambassadeurs", "eleves", "peer-learning", "tutorat"],
    created_at: "2024-11-29T14:30:00Z",
    stats: {
      views: 356,
      replies: 22,
      upvotes: 18
    },
    solved: false
  },

  // ========== AIDE (10 posts) ==========
  {
    id: 31,
    title: "Débutant total : par où commencer ?",
    content: "Je suis directeur d'un petit collège. Je ne connais rien à Linux mais je veux démarrer NIRD. Help !",
    author: {
      id: 160,
      username: "newbie_jean",
      name: "Jean Moreau",
      school_name: "Collège Lamartine",
      avatar_color: "blue"
    },
    category: "aide",
    tags: ["debutant", "aide", "guide", "premiers-pas"],
    created_at: "2024-12-04T07:00:00Z",
    stats: {
      views: 412,
      replies: 26,
      upvotes: 17
    },
    solved: false
  },
  {
    id: 32,
    title: "Erreur au démarrage : 'Grub rescue'",
    content: "Après mise à jour, tous nos PC affichent 'Grub rescue'. C'est urgent, les cours commencent dans 2h !",
    author: {
      id: 162,
      username: "urgent_paul",
      name: "Paul Blanc",
      school_name: "Lycée Camus",
      avatar_color: "red"
    },
    category: "aide",
    tags: ["grub", "urgent", "demarrage", "boot"],
    created_at: "2024-12-04T06:30:00Z",
    stats: {
      views: 156,
      replies: 9,
      upvotes: 6
    },
    solved: true
  },
  {
    id: 33,
    title: "Besoin d'un mentor pour notre projet",
    content: "Notre collège démarre la migration. Qui accepterait d'être notre mentor pendant 6 mois ?",
    author: {
      id: 164,
      username: "search_claire",
      name: "Claire Fontaine",
      school_name: "Collège Vian",
      avatar_color: "purple"
    },
    category: "aide",
    tags: ["mentor", "accompagnement", "aide", "migration"],
    created_at: "2024-12-03T15:45:00Z",
    stats: {
      views: 289,
      replies: 15,
      upvotes: 11
    },
    solved: false
  },
  {
    id: 34,
    title: "Quel PC portable acheter pour Linux ?",
    content: "On veut acheter 50 portables avec Linux pré-installé. Marques et modèles recommandés ?",
    author: {
      id: 166,
      username: "achat_thomas",
      name: "Thomas Leroy",
      school_name: "Lycée Sartre",
      avatar_color: "green"
    },
    category: "aide",
    tags: ["materiel", "portable", "achat", "conseil"],
    created_at: "2024-12-03T12:30:00Z",
    stats: {
      views: 334,
      replies: 20,
      upvotes: 14
    },
    solved: false
  },
  {
    id: 35,
    title: "Alternative à Adobe Premiere pour le montage vidéo ?",
    content: "Nos profs de cinéma utilisent Premiere. Existe-t-il une alternative libre équivalente ?",
    author: {
      id: 168,
      username: "video_julie",
      name: "Julie Bernard",
      school_name: "Lycée Truffaut",
      avatar_color: "orange"
    },
    category: "aide",
    tags: ["montage-video", "alternative", "adobe", "kdenlive"],
    created_at: "2024-12-02T17:00:00Z",
    stats: {
      views: 267,
      replies: 18,
      upvotes: 13
    },
    solved: true
  },
  {
    id: 36,
    title: "Impression en réseau qui ne fonctionne plus",
    content: "Depuis hier, aucun PC ne peut imprimer. Les imprimantes sont détectées mais ça plante à l'impression.",
    author: {
      id: 170,
      username: "print_alex",
      name: "Alexandre Petit",
      school_name: "Collège Proust",
      avatar_color: "red"
    },
    category: "aide",
    tags: ["impression", "reseau", "bug", "urgent"],
    created_at: "2024-12-02T08:15:00Z",
    stats: {
      views: 198,
      replies: 12,
      upvotes: 8
    },
    solved: true
  },
  {
    id: 37,
    title: "Visioconférence : BigBlueButton ou Jitsi ?",
    content: "On veut héberger notre propre solution de visio. Vos retours sur BBB vs Jitsi ?",
    author: {
      id: 172,
      username: "visio_camille",
      name: "Camille Girard",
      school_name: "Lycée Apollinaire",
      avatar_color: "pink"
    },
    category: "aide",
    tags: ["visio", "bigbluebutton", "jitsi", "auto-hebergement"],
    created_at: "2024-12-01T14:45:00Z",
    stats: {
      views: 312,
      replies: 19,
      upvotes: 15
    },
    solved: false
  },
  {
    id: 38,
    title: "Partage de fichiers entre élèves : quelle solution ?",
    content: "On cherche un Dropbox/Drive libre et auto-hébergé pour les élèves. Nextcloud ? Seafile ?",
    author: {
      id: 174,
      username: "share_david",
      name: "David Roux",
      school_name: "Collège Eluard",
      avatar_color: "indigo"
    },
    category: "aide",
    tags: ["partage-fichiers", "nextcloud", "seafile", "cloud"],
    created_at: "2024-12-01T11:00:00Z",
    stats: {
      views: 278,
      replies: 16,
      upvotes: 12
    },
    solved: true
  },
  {
    id: 39,
    title: "Filtrage internet pour protéger les élèves",
    content: "Quelle solution de filtrage web compatible Linux recommandez-vous pour un établissement scolaire ?",
    author: {
      id: 176,
      username: "secu_sophie",
      name: "Sophie Blanc",
      school_name: "Lycée Prévert",
      avatar_color: "teal"
    },
    category: "aide",
    tags: ["filtrage", "securite", "protection", "web"],
    created_at: "2024-11-30T16:30:00Z",
    stats: {
      views: 245,
      replies: 14,
      upvotes: 10
    },
    solved: false
  },
  {
    id: 40,
    title: "Récupération de données après formatage accidentel",
    content: "Un collègue a formaté un disque par erreur. Outils de récupération sous Linux qui marchent vraiment ?",
    author: {
      id: 178,
      username: "rescue_luc",
      name: "Luc Garnier",
      school_name: "Collège Rimbaud",
      avatar_color: "cyan"
    },
    category: "aide",
    tags: ["recuperation", "donnees", "formatage", "testdisk"],
    created_at: "2024-11-30T09:45:00Z",
    stats: {
      views: 167,
      replies: 11,
      upvotes: 7
    },
    solved: true
  }
];

export default forumPosts;