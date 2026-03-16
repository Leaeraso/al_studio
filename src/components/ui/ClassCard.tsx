"use client";
// Client Component: necesita useState para controlar el estado de expansion de cada card

import { ChevronRight, Clock, Users, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ClassCardProps {
  icon: LucideIcon;
  name: string;
  shortDesc: string;
  longDesc: string;
  level: "todos" | "intermedio" | "avanzado";
  isExpanded: boolean;
  onToggle: () => void;
}

const levelConfig: Record<
  ClassCardProps["level"],
  { label: string; classes: string }
> = {
  todos: { label: "Todos los niveles", classes: "bg-primary/10 text-primary" },
  intermedio: {
    label: "Intermedio",
    classes: "bg-secondary/10 text-secondary",
  },
  avanzado: {
    label: "Avanzado",
    classes: "bg-destructive/10 text-destructive",
  },
};

export function ClassCard({
  icon: Icon,
  name,
  shortDesc,
  longDesc,
  level,
  isExpanded,
  onToggle,
}: ClassCardProps) {
  const levelInfo = levelConfig[level];

  return (
    <div
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      aria-expanded={isExpanded}
      aria-label={`${name} — ${isExpanded ? "Cerrar detalle" : "Ver detalle"}`}
      className={`bg-surface rounded-xl p-6 md:p-8 cursor-pointer transition-all duration-300 ease-out group ${
        isExpanded
          ? "border border-primary/20 shadow-md"
          : "border border-border hover:border-primary/30 hover:shadow-md"
      }`}
    >
      {/* Contenido siempre visible */}
      <div>
        <Icon className="w-7 h-7 text-primary mb-4" aria-hidden="true" />
        <h3 className="font-display text-h3 text-foreground mb-2">{name}</h3>
        <p className="text-body-sm text-muted-foreground mb-4 line-clamp-2">
          {shortDesc}
        </p>
        <div className="flex items-center justify-between">
          <span
            className={`text-caption font-medium px-2.5 py-0.5 rounded-full ${levelInfo.classes}`}
          >
            {levelInfo.label}
          </span>
          <span
            className={`text-body-sm text-primary flex items-center gap-1 transition-opacity duration-200 ${
              isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
            aria-hidden="true"
          >
            {isExpanded ? "Cerrar" : "Ver mas"}
            <ChevronRight
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isExpanded ? "rotate-90" : ""
              }`}
            />
          </span>
        </div>
      </div>

      {/* Contenido expandido */}
      {isExpanded && (
        <div className="mt-4">
          <div className="border-t border-border my-4" />
          <p className="text-body text-muted-foreground mb-6">{longDesc}</p>
          <div className="grid grid-cols-2 gap-3 text-body-sm mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="text-foreground">60 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="text-foreground">{levelInfo.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="text-foreground">3x semana</span>
            </div>
          </div>
          <a
            href="https://wa.me/5492616934562?text=Hola!%20Quiero%20consultar%20por%20las%20clases%20en%20Al%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-body font-semibold text-body-sm transition-all duration-300 glow-hover hover:bg-primary-hover active:scale-[0.98]"
            aria-label={`Consultar por WhatsApp sobre clases de ${name}`}
          >
            Consultar por WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
