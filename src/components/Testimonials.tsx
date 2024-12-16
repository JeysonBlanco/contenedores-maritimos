import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Rodríguez",
    company: "Importadora Global S.A.",
    text: "Esta herramienta nos ayudó a optimizar nuestros envíos y reducir costos en un 25%. La calculadora de contenedores es especialmente útil.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    name: "Ana Martínez",
    company: "Logística Internacional",
    text: "La información detallada sobre dimensiones nos ha permitido planificar mejor nuestros envíos y evitar errores costosos.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Miguel Torres",
    company: "Exportadora del Pacífico",
    text: "Gracias a esta plataforma, nuestro equipo comprende mejor las opciones de contenedores disponibles para cada tipo de carga.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Quote className="w-10 h-10 text-blue-600" />
            <h2 className="text-3xl font-bold">Casos de Éxito</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}