"use client";
// Client Component: necesita useState para rastrear cual card esta expandida

import { useState } from "react";
import { Music, Wind, Crown, Dumbbell, Leaf, Activity } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ClassCard } from "@/components/ui/ClassCard";

// Datos de las clases en el mismo archivo: contenido estático ligado a esta sección
const clases = [
  {
    id: "jazz",
    icon: Music,
    name: "Jazz",
    shortDesc: "Ritmo, actitud y libertad.",
    longDesc:
      "Ritmo, actitud y libertad. Jazz es la clase donde soltas el cuerpo y dejas que la musica te guie. Para todas, de cualquier nivel.",
    level: "todos" as const,
  },
  {
    id: "contemporanea",
    icon: Wind,
    name: "Danza Contemporanea",
    shortDesc: "Explorar, improvisar, crear.",
    longDesc:
      "Explorar, improvisar, crear. Contemporanea es la clase donde el movimiento se vuelve tuyo. Cada cuerpo cuenta una historia diferente.",
    level: "todos" as const,
  },
  {
    id: "clasica",
    icon: Crown,
    name: "Danza Clasica",
    shortDesc: "La base de todo.",
    longDesc:
      "La base de todo. Clasica te da la tecnica, la postura y la disciplina que potencian todo lo demas. Elegancia pura.",
    level: "todos" as const,
  },
  {
    id: "barre",
    icon: Dumbbell,
    name: "Barre",
    shortDesc: "Lo mejor del ballet y del pilates.",
    longDesc:
      "Lo mejor del ballet y del pilates en una sola clase. Barre trabaja fuerza, postura y flexibilidad con movimientos precisos y elegantes. No necesitas experiencia en danza.",
    level: "todos" as const,
  },
  {
    id: "yoga",
    icon: Leaf,
    name: "Yoga",
    shortDesc: "Respira, estira, soltar.",
    longDesc:
      "Respira, estira, soltar. Yoga en Al Studio es un momento para bajar, conectar con la respiracion y darle a tu cuerpo el descanso activo que necesita.",
    level: "todos" as const,
  },
  {
    id: "pilates",
    icon: Activity,
    name: "Pilates",
    shortDesc: "Control, alineacion y fuerza.",
    longDesc:
      "Control, alineacion y fuerza desde el centro. Pilates te ayuda a moverte mejor en cada clase, en cada dia.",
    level: "todos" as const,
  },
];

export function ClasesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="clases" className="section-spacing">
      <div className="container-layout">
        <SectionTitle
          overline="DISCIPLINAS"
          title="Encontra tu clase"
          description="Cada disciplina es una forma distinta de moverte. Todas comparten lo mismo: intencion, cuidado y libertad."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {clases.map((clase) => (
            <ClassCard
              key={clase.id}
              icon={clase.icon}
              name={clase.name}
              shortDesc={clase.shortDesc}
              longDesc={clase.longDesc}
              level={clase.level}
              isExpanded={expandedId === clase.id}
              onToggle={() => handleToggle(clase.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
