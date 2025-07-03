// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function HomePage({ params }) {
  // const t = useTranslations("HomePage"); // for non-async function component
  const t = await getTranslations("HomePage"); // for async function component

  console.log(await params);

  return (
    <section className="flex flex-col justify-center text-center min-h-screen gap-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">{t("title")}</h1>
      <p className="text-2xl">{t("content")}</p>
    </section>
  );
}
