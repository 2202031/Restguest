export default function OptimizationSection() {
  const items = [
    {
      icon: "⚡",
      title: "Automatización Inteligente",
      desc: "Reduce tiempo en tareas repetitivas y aumenta la eficiencia del personal."
    },
    {
      icon: "📊",
      title: "Reportes Avanzados",
      desc: "Obtén métricas en tiempo real para tomar decisiones más rápidas."
    },
    {
      icon: "🤖",
      title: "Predicción de Demanda",
      desc: "Evita pérdidas y mejora la planificación con análisis inteligentes."
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Optimiza tu operación
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Herramientas diseñadas para mejorar tus procesos y aumentar la rentabilidad de tu negocio gastronómico.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
