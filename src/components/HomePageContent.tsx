"use client";

import Link from "next/link";
import Image from "next/image";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { CLASES } from "@/data";
import { Accordion, AccordionItem } from "@heroui/react";

const GALERIA_IMAGES = [
  { src: "/images/entrada.jpg", alt: "Entrada de la escuela" },
  { src: "/images/aula.jpg", alt: "Aula" },
  { src: "/images/violin-aula.jpg", alt: "Clase de violín" },
  { src: "/images/piano-aula.jpg", alt: "Clase de piano" },
  { src: "/images/clases-para-niños-aula.jpg", alt: "Clases para niños" },
  { src: "/images/violin-2.jpg", alt: "Violín" },
  { src: "/images/piano-2.jpg", alt: "Piano" },
];

export function HomePageContent() {
  return (
    <>
      <section className="bg-default-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-12">
            <div className="min-w-0 flex-1">
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Bienvenido a Círculo Musical de Sevilla
              </h2>
              <div className="space-y-4 text-default-700 text-justify">
                <p>
                  Tras muchos años de formación y experiencia como profesores, vimos que era difícil encontrar clases de música donde se combinara una enseñanza de calidad, con buena técnica instrumental, y al mismo tiempo un ambiente cercano, cariñoso y divertido. Por eso creamos este espacio: una escuela de música donde aprender es disfrutar.
                </p>
                <p>
                  En nuestra <strong>escuela de música en Sevilla</strong> impartimos clases de música para todas las edades y niveles. Aquí cada clase es una experiencia: aprenderás tu instrumento paso a paso, con bases sólidas y disfrutando del proceso. Queremos que vengas cada semana con ilusión, porque creemos que la música se aprende mejor cuando también se vive con alegría.
                </p>
              </div>
            </div>
            <div className="shrink-0 lg:w-[500px]">
              <GalleryCarousel images={GALERIA_IMAGES} compact />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-3xl font-bold text-foreground">
          ¿Qué sucede en nosotros cuando aprendemos a tocar un instrumento?
        </h2>
        <Accordion variant="bordered" className="rounded-xl bg-content1/80 backdrop-blur" itemClasses={{ title: "font-semibold text-lg" }}>
          <AccordionItem key="1" aria-label="Habilidades cognitivas" title="Habilidades cognitivas">
            <ul className="list-inside list-disc space-y-2 text-default-700 mb-4">
              <li><strong>Memoria:</strong> Se mejora la memoria a corto y largo plazo al recordar partituras, secuencias y patrones musicales.</li>
              <li><strong>Atención y concentración:</strong> Se entrena el enfoque sostenido para seguir el ritmo, leer partituras y coordinar movimientos.</li>
              <li><strong>Pensamiento lógico y abstracto:</strong> Se estimulan habilidades similares a las del razonamiento matemático (especialmente al leer música).</li>
              <li><strong>Lenguaje:</strong> Se fortalecen las áreas cerebrales relacionadas con el lenguaje, especialmente si se estudia desde edades tempranas.</li>
            </ul>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Coordinación motriz y psicomotricidad" title="Coordinación motriz y psicomotricidad">
            <ul className="list-inside list-disc space-y-2 text-default-700 mb-4">
              <li><strong>Motricidad fina:</strong> Requiere movimientos precisos de dedos y manos.</li>
              <li><strong>Coordinación visomotriz:</strong> Se integra la vista con los movimientos del cuerpo.</li>
              <li><strong>Coordinación bimanual:</strong> Ambas manos trabajan juntas, a menudo haciendo tareas diferentes.</li>
            </ul>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Desarrollo emocional" title="Desarrollo emocional">
            <ul className="list-inside list-disc space-y-2 text-default-700 mb-4">
              <li><strong>Expresión emocional:</strong> La música permite canalizar y expresar emociones de forma no verbal.</li>
              <li><strong>Autoconfianza:</strong> Superar retos musicales y progresar genera seguridad en uno mismo.</li>
              <li><strong>Tolerancia a la frustración:</strong> Requiere práctica constante, paciencia y aceptación del error.</li>
            </ul>
          </AccordionItem>
          <AccordionItem key="4" aria-label="Habilidades sociales" title="Habilidades sociales">
            <ul className="list-inside list-disc space-y-2 text-default-700 mb-4">
              <li><strong>Trabajo en equipo:</strong> Al tocar en grupo, orquesta o banda, se aprende a escuchar a los demás y coordinarse.</li>
              <li><strong>Empatía:</strong> Interpretar música requiere entender y comunicar emociones, lo que potencia la sensibilidad hacia los demás.</li>
            </ul>
          </AccordionItem>
          <AccordionItem key="5" aria-label="Disciplina y hábitos" title="Disciplina y hábitos">
            <ul className="list-inside list-disc space-y-2 text-default-700 mb-4">
              <li><strong>Organización y gestión del tiempo:</strong> El estudio regular requiere constancia y planificación.</li>
              <li><strong>Perseverancia:</strong> Se desarrolla la capacidad de mantener el esfuerzo a lo largo del tiempo.</li>
            </ul>
          </AccordionItem>
        </Accordion>
      </section>

      <section id="clases" className="bg-default-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-3xl font-bold text-foreground text-justify">
            Nuestras clases de música en Sevilla
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CLASES.map(({ title, href, image }) => (
              <Link
                key={href}
                href={href}
                className="group overflow-hidden rounded-xl border border-default-200 bg-content1/80 shadow-sm transition hover:border-primary/70 hover:shadow-lg"
              >
                <div className="relative aspect-4/3 w-full bg-default-200">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width:640px) 100vw, 33vw"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="font-semibold text-foreground group-hover:text-primary text-justify">
                    {title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-foreground text-justify">
          Círculo Musical de Sevilla
        </h2>
        <h3 className="mt-2 text-xl text-default-600 text-justify">
          Tu escuela de música en Sevilla
        </h3>
        <div className="mt-8 space-y-4 text-default-700 text-justify">
          <p>
            En <strong>Círculo Musical de Sevilla</strong> creemos profundamente en el poder transformador de la música. Cada una de nuestras propuestas formativas está diseñada para ofrecer <strong>clases de música en Sevilla</strong> que combinan una enseñanza técnica sólida con un enfoque humano, cercano y lleno de sensibilidad. Queremos que cada alumno, independientemente de su edad o nivel, descubra el placer de aprender mientras desarrolla una relación auténtica con su instrumento y con el arte musical.
          </p>
          <p>
            <strong>Clases de música en Sevilla para todas las edades.</strong> Como <strong>escuela de música en Sevilla</strong>, ofrecemos programas adaptados tanto a niños como a adultos. Para los más pequeños, nuestras <strong>clases de música para niños</strong> fomentan la creatividad, la concentración y la expresión emocional. Contamos también con <strong>Clases para niños</strong>, pensadas para los más pequeños (de 3 a 7 años) y organizadas en grupos reducidos —un máximo de 6 alumnos por grupo—. Para quienes buscan comenzar u avanzar con un instrumento concreto, disponemos de <strong>clases de Violín</strong>, <strong>Piano</strong>, y <strong>más instrumentos</strong>, impartidas por profesionales titulados.
          </p>
          <p>
            En definitiva, nuestra misión es acompañar a cada estudiante en un camino musical que sea enriquecedor, ilusionante y plenamente disfrutable.
          </p>
        </div>
        <hr className="my-10 border-default-200" />
        <blockquote className="border-l-4 border-primary pl-6 text-xl italic text-foreground text-justify">
          Aquí la música es el camino para crear experiencias, crecimiento y pasión.
        </blockquote>
      </section>
    </>
  );
}
