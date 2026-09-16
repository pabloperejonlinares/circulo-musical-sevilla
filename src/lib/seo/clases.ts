import { cache } from "react";
import { CLASES, type Clase } from "@/data";

export const getClaseBySlug = cache((slug: string): Clase | undefined => {
  return CLASES.find((c) => c.href === `/clases/${slug}`);
});
