const schools = [
  {
    id: 1,
    name: "Lycée Carnot",
    city: "Bruay-la-Buissière",
    region: "Hauts-de-France",
    country: "France",
    type: "lycee",
    students: 800,
    indicators: {
      autonomy: 95,
      sustainability: 88,
      linux_percentage: 98
    },
    stats: {
      total_computers: 150,
      linux_computers: 147,
      savings_per_year: 35000
    },
    nird_status: "expert",
    member_since: "2023-09-01"
  },
  {
    id: 2,
    name: "Lycée Astérix",
    city: "Nouakchott",
    region: "Nouakchott",
    country: "Mauritanie",
    type: "lycee",
    students: 800,
    indicators: {
      autonomy: 35,
      sustainability: 40,
      linux_percentage: 27
    },
    stats: {
      total_computers: 150,
      linux_computers: 40,
      savings_per_year: 8000
    },
    nird_status: "intermediaire",
    member_since: "2024-11-01"
  },
  {
    id: 3,
    name: "Collège Voltaire",
    city: "Lille",
    region: "Hauts-de-France",
    country: "France",
    type: "college",
    students: 400,
    indicators: {
      autonomy: 62,
      sustainability: 55,
      linux_percentage: 60
    },
    stats: {
      total_computers: 80,
      linux_computers: 48,
      savings_per_year: 12000
    },
    nird_status: "avance",
    member_since: "2024-03-15"
  },
  {
    id: 4,
    name: "École Pasteur",
    city: "Paris",
    region: "Île-de-France",
    country: "France",
    type: "primaire",
    students: 200,
    indicators: {
      autonomy: 45,
      sustainability: 60,
      linux_percentage: 50
    },
    stats: {
      total_computers: 30,
      linux_computers: 15,
      savings_per_year: 3000
    },
    nird_status: "intermediaire",
    member_since: "2024-06-01"
  },
  {
    id: 5,
    name: "Lycée Victor Hugo",
    city: "Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    country: "France",
    type: "lycee",
    students: 1200,
    indicators: {
      autonomy: 78,
      sustainability: 72,
      linux_percentage: 75
    },
    stats: {
      total_computers: 200,
      linux_computers: 150,
      savings_per_year: 28000
    },
    nird_status: "avance",
    member_since: "2023-11-20"
  },
  {
    id: 6,
    name: "Collège Jean Moulin",
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    country: "France",
    type: "college",
    students: 600,
    indicators: {
      autonomy: 85,
      sustainability: 80,
      linux_percentage: 90
    },
    stats: {
      total_computers: 120,
      linux_computers: 108,
      savings_per_year: 22000
    },
    nird_status: "expert",
    member_since: "2023-05-12"
  },
  {
    id: 7,
    name: "École Marie Curie",
    city: "Toulouse",
    region: "Occitanie",
    country: "France",
    type: "primaire",
    students: 250,
    indicators: {
      autonomy: 58,
      sustainability: 65,
      linux_percentage: 55
    },
    stats: {
      total_computers: 40,
      linux_computers: 22,
      savings_per_year: 4500
    },
    nird_status: "intermediaire",
    member_since: "2024-02-10"
  },
  {
    id: 8,
    name: "Lycée Ibn Sina",
    city: "Nouadhibou",
    region: "Dakhlet Nouadhibou",
    country: "Mauritanie",
    type: "lycee",
    students: 650,
    indicators: {
      autonomy: 42,
      sustainability: 48,
      linux_percentage: 35
    },
    stats: {
      total_computers: 100,
      linux_computers: 35,
      savings_per_year: 7000
    },
    nird_status: "intermediaire",
    member_since: "2024-09-15"
  },
  {
    id: 9,
    name: "Collège Al-Khawarizmi",
    city: "Rosso",
    region: "Trarza",
    country: "Mauritanie",
    type: "college",
    students: 450,
    indicators: {
      autonomy: 38,
      sustainability: 45,
      linux_percentage: 30
    },
    stats: {
      total_computers: 60,
      linux_computers: 18,
      savings_per_year: 4000
    },
    nird_status: "debutant",
    member_since: "2024-10-01"
  },
  {
    id: 10,
    name: "Lycée Léon Blum",
    city: "Créteil",
    region: "Île-de-France",
    country: "France",
    type: "lycee",
    students: 950,
    indicators: {
      autonomy: 70,
      sustainability: 68,
      linux_percentage: 72
    },
    stats: {
      total_computers: 180,
      linux_computers: 130,
      savings_per_year: 25000
    },
    nird_status: "avance",
    member_since: "2024-01-08"
  },
  {
    id: 11,
    name: "Collège George Sand",
    city: "Nantes",
    region: "Pays de la Loire",
    country: "France",
    type: "college",
    students: 550,
    indicators: {
      autonomy: 55,
      sustainability: 62,
      linux_percentage: 58
    },
    stats: {
      total_computers: 90,
      linux_computers: 52,
      savings_per_year: 11000
    },
    nird_status: "intermediaire",
    member_since: "2024-04-22"
  },
  {
    id: 12,
    name: "École Jules Ferry",
    city: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    country: "France",
    type: "primaire",
    students: 180,
    indicators: {
      autonomy: 50,
      sustainability: 58,
      linux_percentage: 48
    },
    stats: {
      total_computers: 25,
      linux_computers: 12,
      savings_per_year: 2500
    },
    nird_status: "intermediaire",
    member_since: "2024-07-15"
  },
  {
    id: 13,
    name: "Lycée Descartes",
    city: "Tours",
    region: "Centre-Val de Loire",
    country: "France",
    type: "lycee",
    students: 1100,
    indicators: {
      autonomy: 92,
      sustainability: 90,
      linux_percentage: 95
    },
    stats: {
      total_computers: 220,
      linux_computers: 209,
      savings_per_year: 42000
    },
    nird_status: "expert",
    member_since: "2023-03-01"
  },
  {
    id: 14,
    name: "Collège Malraux",
    city: "Strasbourg",
    region: "Grand Est",
    country: "France",
    type: "college",
    students: 480,
    indicators: {
      autonomy: 68,
      sustainability: 70,
      linux_percentage: 65
    },
    stats: {
      total_computers: 95,
      linux_computers: 62,
      savings_per_year: 13500
    },
    nird_status: "avance",
    member_since: "2023-12-10"
  },
  {
    id: 15,
    name: "École Montessori",
    city: "Nice",
    region: "Provence-Alpes-Côte d'Azur",
    country: "France",
    type: "primaire",
    students: 150,
    indicators: {
      autonomy: 72,
      sustainability: 75,
      linux_percentage: 70
    },
    stats: {
      total_computers: 20,
      linux_computers: 14,
      savings_per_year: 3200
    },
    nird_status: "avance",
    member_since: "2024-05-03"
  },
  {
    id: 16,
    name: "Lycée Avicenne",
    city: "Kaédi",
    region: "Gorgol",
    country: "Mauritanie",
    type: "lycee",
    students: 700,
    indicators: {
      autonomy: 40,
      sustainability: 42,
      linux_percentage: 32
    },
    stats: {
      total_computers: 110,
      linux_computers: 35,
      savings_per_year: 6500
    },
    nird_status: "intermediaire",
    member_since: "2024-08-20"
  },
  {
    id: 17,
    name: "Collège Rimbaud",
    city: "Rennes",
    region: "Bretagne",
    country: "France",
    type: "college",
    students: 520,
    indicators: {
      autonomy: 80,
      sustainability: 78,
      linux_percentage: 82
    },
    stats: {
      total_computers: 100,
      linux_computers: 82,
      savings_per_year: 18000
    },
    nird_status: "expert",
    member_since: "2023-08-15"
  },
  {
    id: 18,
    name: "Lycée Molière",
    city: "Rouen",
    region: "Normandie",
    country: "France",
    type: "lycee",
    students: 880,
    indicators: {
      autonomy: 65,
      sustainability: 63,
      linux_percentage: 68
    },
    stats: {
      total_computers: 170,
      linux_computers: 116,
      savings_per_year: 21000
    },
    nird_status: "avance",
    member_since: "2024-02-28"
  },
  {
    id: 19,
    name: "École Freinet",
    city: "Montpellier",
    region: "Occitanie",
    country: "France",
    type: "primaire",
    students: 220,
    indicators: {
      autonomy: 60,
      sustainability: 68,
      linux_percentage: 62
    },
    stats: {
      total_computers: 35,
      linux_computers: 22,
      savings_per_year: 4200
    },
    nird_status: "intermediaire",
    member_since: "2024-06-18"
  },
  {
    id: 20,
    name: "Collège Ibn Khaldoun",
    city: "Nouakchott",
    region: "Nouakchott",
    country: "Mauritanie",
    type: "college",
    students: 500,
    indicators: {
      autonomy: 45,
      sustainability: 50,
      linux_percentage: 40
    },
    stats: {
      total_computers: 75,
      linux_computers: 30,
      savings_per_year: 5500
    },
    nird_status: "intermediaire",
    member_since: "2024-11-10"
  },
  {
    id: 21,
    name: "Lycée Zola",
    city: "Aix-en-Provence",
    region: "Provence-Alpes-Côte d'Azur",
    country: "France",
    type: "lycee",
    students: 1050,
    indicators: {
      autonomy: 88,
      sustainability: 85,
      linux_percentage: 92
    },
    stats: {
      total_computers: 190,
      linux_computers: 175,
      savings_per_year: 38000
    },
    nird_status: "expert",
    member_since: "2023-07-01"
  },
  {
    id: 22,
    name: "Collège Prévert",
    city: "Grenoble",
    region: "Auvergne-Rhône-Alpes",
    country: "France",
    type: "college",
    students: 430,
    indicators: {
      autonomy: 58,
      sustainability: 60,
      linux_percentage: 55
    },
    stats: {
      total_computers: 85,
      linux_computers: 47,
      savings_per_year: 10000
    },
    nird_status: "intermediaire",
    member_since: "2024-03-25"
  },
  {
    id: 23,
    name: "École Rousseau",
    city: "Dijon",
    region: "Bourgogne-Franche-Comté",
    country: "France",
    type: "primaire",
    students: 190,
    indicators: {
      autonomy: 52,
      sustainability: 55,
      linux_percentage: 50
    },
    stats: {
      total_computers: 28,
      linux_computers: 14,
      savings_per_year: 2800
    },
    nird_status: "intermediaire",
    member_since: "2024-09-05"
  },
  {
    id: 24,
    name: "Lycée Al-Farabi",
    city: "Atar",
    region: "Adrar",
    country: "Mauritanie",
    type: "lycee",
    students: 550,
    indicators: {
      autonomy: 35,
      sustainability: 38,
      linux_percentage: 28
    },
    stats: {
      total_computers: 80,
      linux_computers: 22,
      savings_per_year: 4500
    },
    nird_status: "debutant",
    member_since: "2024-10-12"
  },
  {
    id: 25,
    name: "Collège Balzac",
    city: "Amiens",
    region: "Hauts-de-France",
    country: "France",
    type: "college",
    students: 460,
    indicators: {
      autonomy: 75,
      sustainability: 72,
      linux_percentage: 78
    },
    stats: {
      total_computers: 88,
      linux_computers: 69,
      savings_per_year: 15000
    },
    nird_status: "avance",
    member_since: "2023-10-18"
  }
];

export default schools;