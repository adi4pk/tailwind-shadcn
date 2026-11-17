import { useState } from "react";
import type { ReactNode } from "react";
import Ex1Box from "./exercitii/Ex1Box";
import Ex2Navbar from "./exercitii/Ex2Navbar";
import Ex3Grid from "./exercitii/Ex3Grid";
import Ex4Button from "./exercitii/Ex4Button";
import Ex5Theme from "./exercitii/Ex5Theme";
import Ex6ProductPage from "./exercitii/Ex6ProductPage";
import Ex7ShadcnButton from "./exercitii/Ex7ShadcnButton";
import Ex8ShadcnCard from "./exercitii/Ex8ShadcnCard";
import Ex9StockForm from "./exercitii/Ex9StockForm";
import Ex10Icons from "./exercitii/Ex10Icons";
import Ex11Challenge from "./exercitii/Ex11Challenge";
import Capstone1Cafe from "./capstone/Capstone1Cafe";
import Capstone2Pricing from "./capstone/Capstone2Pricing";
import Capstone3Dashboard from "./capstone/Capstone3Dashboard";

type Page = {
  title: string;
  page: ReactNode;
};

type Section = {
  title: string;
  pages: Page[];
};

const sections: Section[] = [
  {
    title: "Partea 1 — Tailwind",
    pages: [
      { title: "1. Box model", page: <Ex1Box /> },
      { title: "2. Flex: navbar", page: <Ex2Navbar /> },
      { title: "3. Grid: produse", page: <Ex3Grid /> },
      { title: "4. Butonul cu stări", page: <Ex4Button /> },
      { title: "5. Culoarea brandului", page: <Ex5Theme /> },
      { title: "6. Pagina de produs", page: <Ex6ProductPage /> },
    ],
  },
  {
    title: "Partea 2 — shadcn/ui",
    pages: [
      { title: "7. Button din shadcn", page: <Ex7ShadcnButton /> },
      { title: "8. Card + Badge", page: <Ex8ShadcnCard /> },
      { title: "9. Anunță-mă în stoc", page: <Ex9StockForm /> },
      { title: "10. Iconițe", page: <Ex10Icons /> },
      { title: "11. Provocare", page: <Ex11Challenge /> },
    ],
  },
  {
    title: "Capstone",
    pages: [
      { title: "C1. Cafenea", page: <Capstone1Cafe /> },
      { title: "C2. Prețuri", page: <Capstone2Pricing /> },
      { title: "C3. Dashboard", page: <Capstone3Dashboard /> },
    ],
  },
];

export default function App() {
  const [selected, setSelected] = useState<Page>(sections[0].pages[0]);

  return (
    <div className="flex min-h-screen">
      <nav className="w-56 shrink-0 border-r border-gray-200 p-4">
        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            <h2 className="mb-2 text-xs font-semibold uppercase text-gray-500">{section.title}</h2>
            {section.pages.map((item) => (
              <button
                key={item.title}
                onClick={() => setSelected(item)}
                className={`block w-full rounded px-2 py-1 text-left text-sm ${item === selected ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`}
              >
                {item.title}
              </button>
            ))}
          </div>
        ))}
      </nav>
      <main className="min-w-0 flex-1 p-6">{selected.page}</main>
    </div>
  );
}
