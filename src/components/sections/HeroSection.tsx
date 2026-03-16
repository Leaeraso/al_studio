import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Imagen de fondo con mask y overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dance.jpg"
          alt="Bailarinas de Al Studio en formacion"
          fill
          priority
          className="object-cover opacity-60 hero-image-mask lg:hero-image-mask-desktop"
          style={{ objectPosition: "center 20%" }}
        />
        {/* Overlay para mejorar legibilidad del texto sobre la imagen */}
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Contenido principal con animaciones escalonadas */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 md:px-8 max-w-[680px] mx-auto">
        <span
          className="text-overline uppercase tracking-widest text-primary mb-4 block opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0ms" }}
        >
          ESTUDIO BOUTIQUE DE MOVIMIENTO
        </span>

        <h1
          className="font-display text-[36px] md:text-[48px] lg:text-display text-foreground mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          Tu cuerpo, tu expresion.
        </h1>

        <p
          className="text-body-lg text-muted-foreground mb-10 max-w-[520px] opacity-0 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          Danza, barre, yoga y pilates en el corazon de Mendoza.
        </p>

        <a
          href="https://wa.me/5492616934562?text=Hola!%20Quiero%20consultar%20por%20las%20clases%20en%20Al%20Studio."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-primary text-primary-foreground font-body font-semibold text-body-lg transition-all duration-300 glow-hover hover:bg-primary-hover active:scale-[0.98] opacity-0 animate-fade-in-up"
          style={{ animationDelay: "450ms" }}
          aria-label="Reservar clase por WhatsApp"
        >
          Reserva tu clase
        </a>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-5 h-5 text-muted-foreground opacity-50" />
      </div>
    </section>
  );
}
