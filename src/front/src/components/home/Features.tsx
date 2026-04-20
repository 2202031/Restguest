import React from 'react';

export const Features = () => {
    const features = [
        {
            title: "Brinda una experiencia optimizada",
            description: "Mejora la satisfacción del cliente con herramientas avanzadas"
        },
        {
            title: "Mejora la calidad de las decisiones",
            description: "Toma decisiones informadas basadas en datos reales"
        },
        {
            title: "Cuenta con servicio técnico confiable",
            description: "Soporte técnico especializado cuando lo necesites"
        },
        {
            title: "Aumenta tus ganancias",
            description: "Optimiza tus operaciones para maximizar beneficios"
        }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
