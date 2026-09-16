import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import { CLASES } from "@/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClassContactForm } from "@/components/ClassContactForm";
import { JsonLd } from "@/components/JsonLd";
import { getClaseBySlug } from "@/lib/seo/clases";
import {
  buildBreadcrumbJsonLd,
  buildCourseJsonLd,
} from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const clase = getClaseBySlug(slug);

  if (!clase) {
    return { title: "Clase no encontrada" };
  }

  return buildPageMetadata({
    title: clase.title,
    description: clase.description,
    path: clase.href,
    image: clase.image,
  });
}

export async function generateStaticParams() {
  return CLASES.map((clase) => ({
    slug: clase.href.replace("/clases/", ""),
  }));
}

export default async function ClasePage({ params }: Props) {
  const { slug } = await params;
  const clase = getClaseBySlug(slug);

  if (!clase) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Inicio", path: "/" },
    { name: "Clases", path: "/#clases" },
    { name: clase.title, path: clase.href },
  ];

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <JsonLd data={buildCourseJsonLd(clase)} />
      <JsonLd data={buildBreadcrumbJsonLd(breadcrumbItems)} />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Clases", href: "/#clases" },
          { label: clase.title },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-8">{clase.title}</h1>

      <section className="mb-10 rounded-xl border border-default-200 bg-default-50 p-6">
        <h2 className="mb-6 text-2xl font-semibold text-foreground">
          ¿Te interesa? Rellena este formulario y contactaremos contigo
        </h2>
        <ClassContactForm pageTitle={clase.title} />
      </section>

      <div className="flex flex-col gap-6 text-lg text-default-700">
        {clase.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p key={index} className="leading-relaxed text-justify">
                  {block.text}
                </p>
              );
            case "heading": {
              const HeadingTag = `h${block.level}` as keyof React.JSX.IntrinsicElements;
              return (
                <HeadingTag
                  key={index}
                  className={`font-bold mt-6 ${
                    block.level === 3 ? "text-2xl" : "text-xl"
                  }`}
                >
                  {block.text}
                </HeadingTag>
              );
            }
            case "list":
              return (
                <ul key={index} className="list-disc pl-6 space-y-2">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            case "image":
              return (
                <div
                  key={index}
                  className="my-8 w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </article>
  );
}
