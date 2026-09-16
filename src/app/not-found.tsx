import type { Metadata } from "next";
import Link from "next/link";
import { CLASES } from "@/data";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-16 sm:px-6">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Página no encontrada</h1>
        <p className="mt-4 text-lg text-default-700">
          La página que buscas no existe o ha sido movida. Puedes volver al inicio
          o explorar nuestras clases de música en Sevilla.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Ir al inicio
        </Link>
        <Link
          href="/acerca-de"
          className="rounded-lg border border-default-200 px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
        >
          Contacto
        </Link>
      </div>

      <section aria-labelledby="clases-not-found">
        <h2 id="clases-not-found" className="text-xl font-semibold text-foreground">
          Nuestras clases
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-default-700">
          {CLASES.map(({ title, href }) => (
            <li key={href}>
              <Link href={href} className="text-primary hover:underline">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
