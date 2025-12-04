export default function TestimonialCard({ testimonial }) {
  const typeIcons = {
    video: "🎥",
    text: "📝",
    audio: "🎧"
  };

  const formatNumber = (num) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover-lift animate-fade-in">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-start justify-between mb-3">
          <div className="text-5xl">{typeIcons[testimonial.type]}</div>
          <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">
            {testimonial.type}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold mb-2">{testimonial.title}</h3>
        <p className="text-blue-100 text-sm">{testimonial.summary}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Author */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
            {testimonial.author.name[0]}
          </div>
          <div>
            <p className="font-bold text-slate-800">{testimonial.author.name}</p>
            <p className="text-sm text-gray-600">
              {testimonial.author.role} • {testimonial.author.school_name}
            </p>
            <p className="text-xs text-gray-500">{testimonial.author.city}</p>
          </div>
        </div>

        {/* Results */}
        {testimonial.results && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-3">📊 Résultats</p>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-600">Linux</p>
                <p className="text-2xl font-bold text-green-600">
                  {testimonial.results.after.linux_percentage}%
                </p>
                <p className="text-xs text-gray-500">
                  (avant : {testimonial.results.before.windows_percentage}%)
                </p>
              </div>
              
              <div>
                <p className="text-gray-600">Autonomie</p>
                <p className="text-2xl font-bold text-blue-600">
                  {testimonial.results.after.autonomy}%
                </p>
                <p className="text-xs text-gray-500">
                  (avant : {testimonial.results.before.autonomy}%)
                </p>
              </div>
              
              {testimonial.results.after.savings_per_year && (
                <div className="col-span-2">
                  <p className="text-gray-600">Économies annuelles</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {testimonial.results.after.savings_per_year.toLocaleString()}€
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {testimonial.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-gray-600 border-t pt-4">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              👁️ {formatNumber(testimonial.stats.views)}
            </span>
            <span className="flex items-center gap-1">
              ❤️ {formatNumber(testimonial.stats.likes)}
            </span>
          </div>
          
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Lire plus →
          </button>
        </div>
      </div>
    </div>
  );
}