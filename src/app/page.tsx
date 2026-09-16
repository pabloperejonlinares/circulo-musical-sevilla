import { HomePageContent } from "@/components/HomePageContent";
import { JsonLd } from "@/components/JsonLd";
import { HOME_FAQ_ITEMS } from "@/data/faq";
import { buildFaqJsonLd } from "@/lib/seo/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(HOME_FAQ_ITEMS)} />
      <HomePageContent />
    </>
  );
}
