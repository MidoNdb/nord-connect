export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="glass rounded-2xl p-8 md:p-12 shadow-xl animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Bienvenue sur <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">NIRD Connect</span> 🏰
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            La plateforme interactive qui aide les établissements scolaires à entrer 
            dans la démarche <strong className="text-blue-600">NIRD : Numérique Inclusif, 
            Responsable et Durable</strong>.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              🚀 Commencer
            </button>
            <button className="bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              📚 En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
        <StatCard 
          icon="🏫" 
          number="1,285" 
          label="Établissements" 
          color="from-blue-500 to-blue-600"
          delay="stagger-1"
        />
        <StatCard 
          icon="💻" 
          number="85,420" 
          label="PC sauvés" 
          color="from-green-500 to-green-600"
          delay="stagger-2"
        />
        <StatCard 
          icon="💰" 
          number="12.4M€" 
          label="Économisés" 
          color="from-yellow-500 to-yellow-600"
          delay="stagger-3"
        />
        <StatCard 
          icon="🌱" 
          number="1,230t" 
          label="CO2 évités" 
          color="from-purple-500 to-purple-600"
          delay="stagger-4"
        />
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        <FeatureCard 
          emoji="💬"
          title="Forum Collaboratif"
          description="Posez vos questions et échangez avec les établissements engagés dans NIRD. Entraide et partage au cœur de la communauté."
          color="from-blue-500 to-cyan-500"
          delay="stagger-1"
        />

        <FeatureCard 
          emoji="🗺️"
          title="Carte Interactive"
          description="Découvrez les écoles qui ont déjà adopté Linux et le numérique durable. Trouvez des mentors près de chez vous."
          color="from-green-500 to-emerald-500"
          delay="stagger-2"
        />

        <FeatureCard 
          emoji="📖"
          title="Témoignages"
          description="Laissez-vous inspirer par des réussites concrètes et des histoires vraies. Des résultats chiffrés et des conseils pratiques."
          color="from-purple-500 to-pink-500"
          delay="stagger-3"
        />
      </section>

      {/* Call to Action */}
      <section className="glass rounded-2xl p-8 text-center animate-fade-in">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Prêt à rejoindre le mouvement ? 🚀
        </h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Des centaines d'établissements ont déjà franchi le pas. Rejoignez la 
          communauté NIRD et reprenez le contrôle de votre infrastructure numérique.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-bounce-subtle">
          Rejoindre NIRD Connect
        </button>
      </section>
    </div>
  );
}

function StatCard({ icon, number, label, color, delay }) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg hover-lift animate-scale-in ${delay}`}>
      <div className="text-4xl mb-3">{icon}</div>
      <div className={`text-3xl font-bold bg-gradient-to-r ${color} text-transparent bg-clip-text mb-1`}>
        {number}
      </div>
      <div className="text-sm text-slate-600 font-medium">{label}</div>
    </div>
  );
}

function FeatureCard({ emoji, title, description, color, delay }) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg hover-lift animate-fade-in ${delay} border-2 border-transparent hover:border-blue-200 transition-all duration-300`}>
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-3xl mb-4 shadow-lg`}>
        {emoji}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
      <button className="mt-4 text-blue-600 font-semibold hover:gap-2 flex items-center gap-1 transition-all duration-300">
        Découvrir <span>→</span>
      </button>
    </div>
  );
}