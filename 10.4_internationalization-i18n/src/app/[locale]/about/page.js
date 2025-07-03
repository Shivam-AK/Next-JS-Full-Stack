import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage"); // for non-async function component

  return (
    <section className="flex flex-col justify-center text-center min-h-screen gap-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">{t("title")}</h1>
      <p className="text-2xl">{t("content")}</p>
    </section>
  );
}
