import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
        alert("Mensaje enviado correctamente 🚀");
    };

    return (
        <section className="w-full py-16 px-6 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
                <p className="text-gray-600 mb-10">
                    ¿Tienes dudas? ¿Quieres una demostración? Envíanos un mensaje y nuestro equipo te responderá lo antes posible.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6"
            >
                <div>
                    <label className="block mb-2 font-medium">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded-lg focus:ring focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Correo electrónico</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded-lg focus:ring focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Mensaje</label>
                    <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full p-3 border rounded-lg focus:ring focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                    Enviar mensaje
                </button>
            </form>
        </section>
    );
}
