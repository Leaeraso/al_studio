import Image from "next/image";

export function SobreSection() {
  return (
    <section id="sobre" className="section-spacing">
      <div className="container-layout">
        <div className="flex flex-col items-center text-center gap-8 lg:grid lg:grid-cols-[400px_1fr] lg:gap-16 lg:items-center lg:text-left">
          {/* Foto — circular en mobile, rectangular en desktop */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <div className="w-48 h-48 lg:w-full lg:h-auto lg:aspect-[3/4] relative rounded-full lg:rounded-2xl overflow-hidden border-2 border-primary/20 lg:border lg:border-border lg:max-w-[400px]">
              <Image
                src="/dance-2.jpg"
                alt="Antonella Lipari, profesora y fundadora de Al Studio"
                fill
                className="object-cover"
                style={{ objectPosition: "center top" }}
                priority
              />
            </div>
          </div>

          {/* Texto */}
          <div>
            <span className="text-overline uppercase tracking-widest text-primary mb-3 block">
              SOBRE
            </span>
            <h2 className="font-display text-h1 text-foreground mb-6">
              Antonella Lipari
            </h2>
            <p className="text-body-lg text-muted-foreground mb-4 max-w-[480px] mx-auto lg:mx-0 lg:max-w-none">
              Profesora de danza con formacion en jazz, contemporanea y clasica.
              Cree Al Studio con una idea simple: que moverse sea un placer, no una obligacion.
            </p>
            <p className="text-body text-muted-foreground mb-8 max-w-[480px] mx-auto lg:mx-0 lg:max-w-none">
              Cada clase esta pensada para que conectes con tu cuerpo, a tu ritmo,
              sin presion y con la guia de alguien que ama lo que hace.
            </p>
            <a
              href="#clases"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border-strong text-foreground font-body font-medium text-body transition-all duration-200 hover:bg-surface-raised hover:border-primary hover:text-primary"
            >
              Conoce las clases
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
