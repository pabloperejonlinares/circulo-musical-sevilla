import type { Metadata } from "next";
import Link from "next/link";
import { VenueMapsLink } from "@/components/VenueMapsLink";

const EMAIL = "circulomusicaldesevilla@gmail.com";
const PHONE_PRIMARY = { display: "691 196 341", tel: "tel:+34691196341" };
const PHONE_SECONDARY = { display: "630 876 239", tel: "tel:+34630876239" };
const WHATSAPP = "https://wa.me/34691196341";
const INSTAGRAM = "https://instagram.com/circulomusicaldesevilla";
const FACEBOOK =
  "https://www.facebook.com/profile.php?id=61581075881201";

export const metadata: Metadata = {
  title: "Contacto | Círculo Musical de Sevilla",
  description:
    "Contacto, horario y ubicación de Círculo Musical de Sevilla. Escuela de música en Sevilla: primera clase de prueba sin compromiso.",
};

export default function AcercaDePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <section className="space-y-6 text-default-700">
        <h2 className="text-2xl font-bold text-foreground">
          ¡Bienvenidos a Círculo Musical de Sevilla!
        </h2>
        <p className="leading-relaxed text-justify">
          Nuestra <strong>escuela de música en Sevilla</strong> nació de la
          ilusión de dos amigos apasionados que han dedicado toda su vida a la
          música. Tras muchos años de formación y experiencia como profesores,
          vimos que era difícil encontrar clases de música donde se combinara
          una enseñanza de calidad, con buena técnica instrumental, y al mismo
          tiempo un ambiente cercano, cariñoso y divertido. Por eso creamos este
          espacio: una escuela de música donde aprender es disfrutar.
        </p>
        <p className="leading-relaxed text-justify">
          En nuestra escuela de música en Sevilla impartimos{" "}
          <strong>clases de música para todas las edades y niveles</strong>:
          desde niños de 3 años hasta adultos y mayores que se animan a empezar
          o retomar su instrumento, como nuestro veterano alumno de 77 años.
          Ofrecemos clases de piano, guitarra, violín, canto… adaptadas a cada
          alumno, siempre con un método que une la mejor técnica con la
          motivación y el disfrute de la música.
        </p>
        <p className="leading-relaxed text-justify">
          Aquí cada clase es una experiencia: aprenderás tu instrumento paso a
          paso, con bases sólidas y disfrutando del proceso. Queremos que vengas
          cada semana con ilusión, porque creemos que la música se aprende mejor
          cuando también se vive con alegría.
        </p>
      </section>

      <section
        className="mt-12 rounded-xl border border-default-200 bg-content1/80 p-6 shadow-sm backdrop-blur sm:p-8"
        aria-labelledby="contacto-heading"
      >
        <h2
          id="contacto-heading"
          className="text-xl font-bold text-foreground"
        >
          Datos de contacto
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-default-700">
          <li>
            Nuestro correo electrónico:{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              {EMAIL}
            </a>
          </li>
          <li>
            Nuestros teléfonos de contacto:{" "}
            <a
              href={PHONE_PRIMARY.tel}
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              {PHONE_PRIMARY.display}
            </a>
            {" / "}
            <a
              href={PHONE_SECONDARY.tel}
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              {PHONE_SECONDARY.display}
            </a>
          </li>
        </ul>

        <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-default-600">
          Horario
        </h3>
        <ul className="mt-2 list-none space-y-1 text-default-700">
          <li>
            De lunes a jueves, de 10:00 a 13:30 y de 16:00 a 20:30
          </li>
          <li>Viernes de 10:00 a 13:30 y de 16:00 a 19:00</li>
        </ul>

        <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-default-600">
          Dirección
        </h3>
        <VenueMapsLink className="mt-2 inline-block font-medium text-primary underline-offset-2 hover:underline" />

        <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-default-600">
          Redes y mensajería
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm marker:text-default-500">
          <li>
            <Link
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-2 hover:underline"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-2 hover:underline"
            >
              Instagram
            </Link>
          </li>
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="text-primary underline-offset-2 hover:underline"
            >
              Correo electrónico
            </a>
          </li>
          <li>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-2 hover:underline"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
