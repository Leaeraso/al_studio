import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Studio | Estudio boutique de danza y movimiento en Mendoza",
  description:
    "Jazz, Contemporanea, Clasica, Barre, Yoga y Pilates en el corazon de Mendoza. Tu cuerpo, tu expresion.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body>{children}</body>
    </html>
  );
}
