import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Wrench, Whatsapp } from "lucide-react";

const exampleWorks = [
  {
    name: "Portón corredizo",
    image: "https://images.unsplash.com/photo-1581090700227-1e8e89eb5f1b",
  },
  {
    name: "Rejas personalizadas",
    image: "https://images.unsplash.com/photo-1603561595765-14f635b3457f",
  },
  {
    name: "Estructura metálica",
    image: "https://images.unsplash.com/photo-1610465298756-d6796fcd7f64",
  },
];

export default function ESGR() {
  return (
    <div className="p-6 space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold">ESGR - Herrería Profesional</h1>
        <p className="text-lg mt-2 text-gray-700">Más de 20 años de experiencia en soldaduras, arreglos de portones y bobinaciones</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Servicios</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Arreglo de portones</li>
          <li>Bobinaciones</li>
          <li>Soldaduras especializadas</li>
          <li>Presupuestos personalizados según el problema</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Trabajos Realizados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exampleWorks.map((work, index) => (
            <Card key={index} className="rounded-2xl shadow-lg">
              <img
                src={work.image}
                alt={work.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{work.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Información Importante</h2>
        <p className="text-gray-800 mb-2">
          📍 Se cobra una visita en caso de no realizar el trabajo. El valor depende de la distancia por el costo de combustible.
        </p>
        <p className="text-gray-800 mb-2">
          ✅ Si el trabajo se realiza, el costo de visita se descuenta del total.
        </p>
        <p className="text-gray-800">💳 Se acepta <strong>Mercado Pago</strong>.</p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contacto Directo</h2>
        <p className="mb-4">Podés comunicarte por WhatsApp para presupuestos sin compromiso:</p>
        <div className="space-y-4">
          <a href="https://wa.me/541124711043" target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-auto flex gap-2 items-center justify-center bg-green-600 hover:bg-green-700">
              <Whatsapp size={20} /> WhatsApp: 1124711043
            </Button>
          </a>
          <a href="https://wa.me/541134352754" target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-auto flex gap-2 items-center justify-center bg-green-600 hover:bg-green-700">
              <Whatsapp size={20} /> WhatsApp: 1134352754
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
