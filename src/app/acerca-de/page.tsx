import Link from "next/link";
import { CLASES } from "@/data";
import { VENUE } from "@/data/venue";
import { SocialLinks } from "@/components/SocialLinks";
import { VenueMapsLink } from "@/components/VenueMapsLink";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Contacto",
  description:
    "Contacta con Círculo Musical de Sevilla. Escuela de música en Sevilla con clases para todas las edades. Primera clase de prueba sin compromiso.",
  path: "/acerca-de",
});

export default function AcercaDePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contacto</h1>
      <h2 className="mb-8 text-2xl font-semibold text-default-700">
        ¡Bienvenidos a Círculo Musical de Sevilla!
      </h2>

      <div className="flex flex-col gap-6 text-lg text-default-700">
        <p className="leading-relaxed text-justify">
          Nuestra <strong>escuela de música en Sevilla</strong> nació de la ilusión de dos amigos apasionados que han dedicado toda su vida a la música. Tras muchos años de formación y experiencia como profesores, vimos que era difícil encontrar clases de música donde se combinara una enseñanza de calidad, con buena técnica instrumental, y al mismo tiempo un ambiente cercano, cariñoso y divertido. Por eso creamos este espacio: una escuela de música donde aprender es disfrutar.
        </p>
        <p className="leading-relaxed text-justify">
          En nuestra escuela de música en Sevilla impartimos{" "}
          <strong>clases de música para todas las edades y niveles</strong>: desde
          bebés y niños de 3 años hasta adultos y mayores que se animan a empezar
          o retomar su instrumento. Ofrecemos clases adaptadas a cada alumno,
          siempre con un método que une la mejor técnica con la motivación y el
          disfrute de la música.
        </p>
        <p className="leading-relaxed text-justify">
          Aquí cada clase es una experiencia: aprenderás tu instrumento paso a
          paso, con bases sólidas y disfrutando del proceso. Queremos que vengas
          cada semana con ilusión, porque creemos que la música se aprende mejor
          cuando también se vive con alegría.
        </p>

        <section aria-labelledby="clases-heading">
          <h3 id="clases-heading" className="mt-2 text-2xl font-bold">
            Nuestras clases
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {CLASES.map(({ title, href }) => (
              <li key={href}>
                <Link href={href} className="text-primary hover:underline">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="contacto-heading"
          className="mt-4 rounded-xl border border-default-200 bg-default-50 p-6"
        >
          <h3 id="contacto-heading" className="text-2xl font-bold">
            Datos de contacto
          </h3>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="font-semibold text-foreground">Correo electrónico</dt>
              <dd>
                <a
                  href={`mailto:${VENUE.email}`}
                  className="text-primary hover:underline"
                >
                  {VENUE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Teléfonos</dt>
              <dd className="flex flex-wrap gap-x-2 gap-y-1">
                {VENUE.phones.map((phone, index) => (
                  <span key={phone.href}>
                    {index > 0 && (
                      <span className="text-default-500" aria-hidden>
                        /
                      </span>
                    )}{" "}
                    <a
                      href={phone.href}
                      className="text-primary hover:underline"
                    >
                      {phone.display}
                    </a>
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Horario</dt>
              <dd className="space-y-1">
                <p>{VENUE.schedule.weekdays}</p>
                <p>{VENUE.schedule.friday}</p>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Dirección</dt>
              <dd>
                <VenueMapsLink />
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Redes sociales</dt>
              <dd>
                <SocialLinks includeEmail />
              </dd>
            </div>
          </dl>
        </section>

        <p className="leading-relaxed text-justify">
          ¿Tienes dudas o quieres reservar tu{" "}
          <strong>primera clase de prueba sin compromiso</strong>? Escríbenos o
          llámanos: estaremos encantados de ayudarte.
        </p>
      </div>
    </div>
  );
}
