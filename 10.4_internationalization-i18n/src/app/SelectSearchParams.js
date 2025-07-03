"use client";

import { redirect, usePathname } from "@/i18n/navigation";

export default function SelectSearchParams({ route }) {
  const pathname = usePathname();

  return (
    <select
      defaultValue={route}
      className="bg-cyan-400 text-black py-2 px-4"
      onChange={({ target }) => {
        redirect({ href: pathname, locale: target.value });
      }}
    >
      <option value="en">English</option>
      <option value="hi">Hindi</option>
    </select>
  );
}
