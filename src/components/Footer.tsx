import Link from "next/link";

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
              Consultar horario
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-default-600">
              Dirección
            </h3>
            <p className="mt-2 text-sm text-default-700">
              Sevilla
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-default-600">
              Contacto
            </h3>
            <p className="mt-2 text-sm text-default-700">
              <a
                href="mailto:circulomusicaldesevilla@gmail.com"
                className="text-primary hover:underline"
              >
                circulomusicaldesevilla@gmail.com
              </a>
            </p>
            <p className="mt-1 text-sm text-default-700">
              691196341 / 630876239
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-default-600">
              Redes sociales
            </h3>
            <p className="mt-2 text-sm text-default-700">
              <a
                href="https://www.instagram.com/circulomusicaldesevilla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Instagram
              </a>
            </p>
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
