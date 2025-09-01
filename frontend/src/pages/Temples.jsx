import { useTranslation } from "react-i18next";

export default function Temples() {
  const { t } = useTranslation();

  const temples = [
    { name: "Hadimba Temple", place: "Manali" },
    { name: "Jwalamukhi Temple", place: "Kangra" },
    { name: "Chintpurni Temple", place: "Una" },
    { name: "Naina Devi Temple", place: "Bilaspur" },
    { name: "Baijnath Temple", place: "Kangra" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">{t("temples")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {temples.map((temple, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold">{temple.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{temple.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
