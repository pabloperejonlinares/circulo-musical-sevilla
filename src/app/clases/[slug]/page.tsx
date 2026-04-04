import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import { CLASES } from "@/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const clase = CLASES.find((c) => c.href === `/clases/${slug}`);

  if (!clase) {
    return { title: "Clase no encontrada" };
  }

  return {
    title: `${clase.title} | Círculo Musical de Sevilla`,
  };
}

export async function generateStaticParams() {
  return CLASES.map((clase) => ({
    slug: clase.href.replace("/clases/", ""),
  }));
}

export default async function ClasePage({ params }: Props) {
  const { slug } = await params;
  const clase = CLASES.find((c) => c.href === `/clases/${slug}`);

  if (!clase) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        {clase.title}
      </h1>
      
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
                <div key={index} className="my-8 w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg">
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
    </main>
  );
}
