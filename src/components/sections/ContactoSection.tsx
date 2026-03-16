import { MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

// Datos de contacto estáticos — no requieren fetching ni estado de cliente
const contactItems = [
  {
    icon: MapPin,
    title: "Brasil 196, Ciudad",
    subtitle: "Mendoza, Argentina",
    href: undefined,
  },
  {
    icon: Clock,
    title: "Lunes a Sabado",
    subtitle: "9:00 a 21:00",
    href: undefined,
  },
  {
    icon: Instagram,
    title: "@al.studio____",
    subtitle: "Seguinos en Instagram",
    href: "https://instagram.com/al.studio____",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Escribinos para reservar",
    href: "https://wa.me/5492616934562?text=Hola!%20Quiero%20consultar%20por%20las%20clases%20en%20Al%20Studio.",
  },
] as const;

export function ContactoSection() {
  return (
    <section id="contacto" className="section-spacing">
      <div className="container-layout">
        <SectionTitle
          overline="CONTACTO"
          title="Veni a conocernos"
        />
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Mapa de Google Maps — embed iframe sin API key con URL pública */}
          <div className="w-full aspect-video md:aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.0!2d-68.8450!3d-32.8895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0902e6af1d5d%3A0x0!2sBrasil%20196%2C%20M5500%20Ciudad%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion de Al Studio — Brasil 196, Ciudad, Mendoza"
            />
          </div>

          {/* Info de contacto */}
          <div className="flex flex-col gap-6">
            {contactItems.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <item.icon
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body font-medium text-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <p className="text-body font-medium text-foreground">{item.title}</p>
                  )}
                  <p className="text-body-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/5492616934562?text=Hola!%20Quiero%20consultar%20por%20las%20clases%20en%20Al%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-primary text-primary-foreground font-body font-semibold text-body-lg transition-all duration-300 glow-hover hover:bg-primary-hover active:scale-[0.98]"
            >
              {/* SVG inline del logo de WhatsApp — no disponible en lucide-react */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
