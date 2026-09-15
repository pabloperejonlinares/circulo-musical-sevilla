import Link from "next/link";
import { VENUE } from "@/data/venue";
import { SocialLinks } from "@/components/SocialLinks";
import { VenueMapsLink } from "@/components/VenueMapsLink";

export function Footer() {
  return (
    <footer className="w-full border-t border-default-200 bg-default-50/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-default-600">
              Horario
            </h3>
            <p className="mt-2 text-sm text-default-700">
              {VENUE.schedule.weekdays}
            </p>
            <p className="mt-1 text-sm text-default-700">
              {VENUE.schedule.friday}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-default-600">
              Dirección
            </h3>
            <p className="mt-2 text-sm text-default-700">
              <VenueMapsLink className="text-default-700 hover:text-primary hover:underline" />
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-default-600">
              Contacto
            </h3>
            <p className="mt-2 text-sm text-default-700">
              <a
                href={`mailto:${VENUE.email}`}
                className="text-primary hover:underline"
              >
                {VENUE.email}
              </a>
            </p>
            <p className="mt-1 text-sm text-default-700">
              {VENUE.phones.map((phone, index) => (
                <span key={phone.href}>
                  {index > 0 && " / "}
                  <a href={phone.href} className="hover:text-primary hover:underline">
                    {phone.display}
                  </a>
                </span>
              ))}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-default-600">
              Redes sociales
            </h3>
            <SocialLinks className="mt-2" />
          </div>
        </div>
        <hr className="my-8 border-default-200" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-default-600">
            © {new Date().getFullYear()} Círculo Musical de Sevilla. Escuela de música en Sevilla.
          </p>
          <Link
            href="/acerca-de"
            className="text-sm text-primary hover:underline"
          >
            Contacto y más información
          </Link>
        </div>
      </div>
    </footer>
  );
}
