import { useTranslation } from "react-i18next";

export default function Tourist() {
  const { t } = useTranslation();

  const spots = [
    { name: "Rohtang Pass", district: "Kullu" },
    { name: "Khajjiar", district: "Chamba" },
    { name: "Mall Road", district: "Shimla" },
    { name: "Great Himalayan National Park", district: "Kullu" },
    { name: "Spiti Valley", district: "Lahaul-Spiti" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">{t("tourist")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {spots.map((spot, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{spot.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{spot.district}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
