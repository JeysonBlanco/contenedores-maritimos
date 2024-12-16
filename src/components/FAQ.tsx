import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Qué es un contenedor HC?",
    answer: "Un contenedor HC (High Cube) es un contenedor con una altura adicional de 30cm comparado con un contenedor estándar. Esto proporciona más espacio vertical para cargas altas o voluminosas."
  },
  {
    question: "¿Cómo calcular el peso facturable en un envío marítimo?",
    answer: "El peso facturable en envíos marítimos se calcula considerando tanto el peso real como el volumen de la carga. Se utiliza la relación 1m³ = 1,000kg para determinar cuál será el factor determinante para el costo."
  },
  {
    question: "¿Qué cargas no son aptas para contenedores estándar?",
    answer: "Las cargas sobredimensionadas, mercancías peligrosas sin certificación apropiada, y productos que requieren temperatura controlada no son aptos para contenedores estándar. Estos requieren contenedores especiales como flat rack, open top o reefer."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <HelpCircle className="w-10 h-10 text-blue-600" />
            <h2 className="text-3xl font-bold">Preguntas Frecuentes</h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}