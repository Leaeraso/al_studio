import { Heart, Users, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

// Datos de los pilares en el mismo archivo: son contenido estático ligado a esta sección
const pilares = [
  {
    icon: Heart,
    title: "Expresion, no rutina",
    description:
      "Cada clase es una invitacion a conectar con tu cuerpo. Aca no se cuentan repeticiones, se viven experiencias.",
  },
  {
    icon: Users,
    title: "Comunidad boutique",
    description:
      "Grupos reducidos donde cada persona importa. Un espacio curado, no un gym masificado.",
  },
  {
    icon: Sparkles,
    title: "Variedad con guia",
    description:
      "Jazz, contemporanea, barre, yoga y mas. Explora disciplinas a tu ritmo, con la guia de siempre.",
  },
];

export function PropuestaSection() {
  return (
    <section id="propuesta" className="section-spacing">
      <div className="container-layout">
        <SectionTitle
          overline="POR QUE AL STUDIO"
          title="Movimiento con intencion"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {pilares.map((pilar) => (
            <div
              key={pilar.title}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <pilar.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-display text-h4 text-foreground mb-3">
                {pilar.title}
              </h3>
              <p className="text-body text-muted-foreground max-w-[320px]">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
