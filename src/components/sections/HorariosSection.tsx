import { SectionTitle } from "@/components/ui/SectionTitle";

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

const clasesConfig: Record<string, { color: string; textColor: string }> = {
  "PILATES":            { color: "#F8B4D9", textColor: "#5a1a3a" },
  "Método BARRE":       { color: "#A8D8EA", textColor: "#0d3a4a" },
  "Entrenamiento+60":   { color: "#B5EAD7", textColor: "#0d3a28" },
  "GAP":                { color: "#FFDAC1", textColor: "#5a2d0c" },
  "FLEXIBILIDAD":       { color: "#E2B0FF", textColor: "#3a0d5a" },
  "YOGA":               { color: "#FFE4A0", textColor: "#4a3400" },
  "FITNESS FUSIÓN":     { color: "#FF9AA2", textColor: "#5a0d14" },
  "Ensayo ANKRA":       { color: "#C7CEEA", textColor: "#1a2050" },
};

const horarios = [
  { hora: "09:30", lunes: null,             martes: "PILATES",        miercoles: null,              jueves: "PILATES",        viernes: null },
  { hora: "10:30", lunes: null,             martes: "Método BARRE",   miercoles: "Entrenamiento+60", jueves: "Método BARRE",   viernes: "Entrenamiento+60" },
  { hora: "15:00", lunes: null,             martes: null,             miercoles: null,              jueves: null,             viernes: "GAP" },
  { hora: "16:30", lunes: null,             martes: null,             miercoles: null,              jueves: null,             viernes: "FLEXIBILIDAD" },
  { hora: "17:00", lunes: "YOGA",           martes: null,             miercoles: "YOGA",            jueves: null,             viernes: null },
  { hora: "17:30", lunes: null,             martes: "FLEXIBILIDAD",   miercoles: null,              jueves: "FLEXIBILIDAD",   viernes: null },
  { hora: "18:00", lunes: "FITNESS FUSIÓN", martes: null,             miercoles: "FITNESS FUSIÓN",  jueves: null,             viernes: "GAP" },
  { hora: "18:30", lunes: null,             martes: "Método BARRE",   miercoles: null,              jueves: "Método BARRE",   viernes: null },
  { hora: "19:00", lunes: "PILATES",        martes: null,             miercoles: "PILATES",         jueves: null,             viernes: "Método BARRE" },
  { hora: "19:30", lunes: null,             martes: "FITNESS FUSIÓN", miercoles: null,              jueves: "FITNESS FUSIÓN", viernes: null },
  { hora: "20:00", lunes: "GAP",            martes: null,             miercoles: "GAP",             jueves: "Ensayo ANKRA",   viernes: null },
];

function ClassPill({ nombre }: { nombre: string }) {
  const cfg = clasesConfig[nombre];
  if (!cfg) return <span className="text-body-sm text-muted-foreground">{nombre}</span>;
  return (
    <span
      className="inline-block w-full text-center text-caption font-semibold px-2 py-1.5 rounded-md leading-tight"
      style={{ backgroundColor: cfg.color, color: cfg.textColor }}
    >
      {nombre}
    </span>
  );
}

export function HorariosSection() {
  return (
    <section id="horarios" className="section-spacing">
      <div className="container-layout">
        <SectionTitle
          overline="HORARIOS"
          title="Encontra tu momento"
          description="Clases de lunes a viernes. Consulta disponibilidad antes de reservar."
        />

        {/* Grilla semanal */}
        <div className="overflow-x-auto scrollbar-hide rounded-xl border border-border">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr>
                <th className="bg-surface-raised px-4 py-3 text-left text-caption font-semibold text-muted-foreground uppercase tracking-widest w-16 border-b border-border">
                  Hora
                </th>
                {dias.map((dia) => (
                  <th
                    key={dia}
                    className="bg-surface-raised px-3 py-3 text-center text-caption font-semibold text-muted-foreground uppercase tracking-widest border-b border-l border-border"
                  >
                    {dia}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {horarios.map((fila, i) => (
                <tr
                  key={fila.hora}
                  style={{ backgroundColor: i % 2 === 0 ? "var(--color-surface)" : "var(--color-background)" }}
                >
                  <td className="px-4 py-3 font-mono text-body-sm font-semibold text-foreground border-r border-border whitespace-nowrap align-middle">
                    {fila.hora}
                  </td>
                  {dias.map((dia) => {
                    const clase = fila[dia.toLowerCase() as keyof typeof fila] as string | null;
                    return (
                      <td key={dia} className="px-2 py-2 border-l border-border text-center align-middle">
                        {clase ? <ClassPill nombre={clase} /> : null}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Leyenda de colores */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {Object.entries(clasesConfig).map(([nombre, cfg]) => (
            <span
              key={nombre}
              className="text-caption font-medium px-3 py-1 rounded-full"
              style={{ backgroundColor: cfg.color, color: cfg.textColor }}
            >
              {nombre}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-body text-muted-foreground mb-4">
            Los horarios pueden variar. Consulta antes de venir.
          </p>
          <a
            href="https://wa.me/5492616934562?text=Hola!%20Quiero%20consultar%20por%20los%20horarios%20de%20Al%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-body font-semibold text-body transition-all duration-300 glow-hover hover:bg-primary-hover active:scale-[0.98]"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
