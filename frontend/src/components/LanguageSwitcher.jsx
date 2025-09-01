// src/components/LanguageSwitcher.jsx
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-center gap-3 mt-4">
      <button
        onClick={() => changeLanguage("en")}
        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("hi")}
        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        हिंदी
      </button>
      <button
        onClick={() => changeLanguage("pa")}
        className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        ਪੰਜਾਬੀ
      </button>
    </div>
  );
}
