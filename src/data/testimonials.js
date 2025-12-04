const testimonials = [
  {
    id: 1,
    title: "Notre migration Linux en 6 mois",
    type: "video",
    author: {
      name: "Marie Dupont",
      role: "Technicienne",
      school_name: "Lycée Carnot",
      city: "Bruay-la-Buissière"
    },
    summary: "Comment nous avons migré 98% de notre parc vers Linux et économisé 35K€/an.",
    results: {
      before: {
        windows_percentage: 100,
        budget_licenses: 18000,
        autonomy: 5
      },
      after: {
        linux_percentage: 98,
        budget_licenses: 500,
        autonomy: 95,
        savings_per_year: 35000
      }
    },
    tags: ["migration", "linux", "economies", "ubuntu"],
    created_at: "2024-10-15T14:00:00Z",
    stats: {
      views: 2300,
      likes: 156
    }
  },
  {
    id: 2,
    title: "Comment j'ai convaincu mon équipe",
    type: "text",
    author: {
      name: "Paul Legrand",
      role: "Directeur",
      school_name: "Collège Pasteur",
      city: "Paris"
    },
    summary: "Les 5 arguments qui ont fait basculer mes enseignants réticents vers NIRD.",
    results: null,
    tags: ["changement", "management", "pedagogie"],
    created_at: "2024-11-20T10:30:00Z",
    stats: {
      views: 1800,
      likes: 89
    }
  },
  {
    id: 3,
    title: "Migration avec un budget limité",
    type: "video",
    author: {
      name: "Ahmed El Fassi",
      role: "Technicien",
      school_name: "Lycée Ibn Khaldoun",
      city: "Casablanca"
    },
    summary: "Comment nous avons réussi notre transition avec seulement 3000€ de budget.",
    results: {
      before: {
        windows_percentage: 100,
        budget_licenses: 8000,
        autonomy: 10
      },
      after: {
        linux_percentage: 85,
        budget_licenses: 200,
        autonomy: 70,
        savings_per_year: 7800
      }
    },
    tags: ["budget", "economie", "afrique"],
    created_at: "2024-11-05T09:15:00Z",
    stats: {
      views: 1450,
      likes: 98
    }
  },
  {
    id: 4,
    title: "Le club Linux des élèves",
    type: "text",
    author: {
      name: "Claire Dubois",
      role: "Enseignante",
      school_name: "Collège Molière",
      city: "Lyon"
    },
    summary: "Comment les élèves sont devenus les ambassadeurs de NIRD dans notre établissement.",
    results: null,
    tags: ["pedagogie", "eleves", "club"],
    created_at: "2024-10-28T11:00:00Z",
    stats: {
      views: 1120,
      likes: 76
    }
  }
];

export default testimonials;