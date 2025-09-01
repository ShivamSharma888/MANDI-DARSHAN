import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        districts: "Districts",
        temples: "Temples",
        tourist: "Tourist Spots",
        parking: "Parking",
        about: "About",
        title: "Himachal Darshan",
        welcome: "Explore the beauty of Himachal Pradesh",

        testimonials: {
          title: "What Visitors Say",
          message:
            "Hear from travelers who explored Himachal Pradesh and shared their unforgettable journeys.",
          amit: "Himachal is the best travel experience I ever had!",
          priya: "Peaceful temples and breathtaking mountains.",
          rahul: "Perfect destination for adventure lovers!",
          sneha: "The culture and hospitality of Himachal are unmatched.",
          vikram: "Snow-capped peaks and valleys made my trip unforgettable."
        }
      }
    },
    hi: {
      translation: {
        home: "होम",
        districts: "ज़िले",
        temples: "मंदिर",
        tourist: "पर्यटन स्थल",
        parking: "पार्किंग",
        about: "हमारे बारे में",
        title: "हिमाचल दर्शन",
        welcome: "हिमाचल प्रदेश की सुंदरता का अन्वेषण करें",

        testimonials: {
          title: "यात्रियों की राय",
          message:
            "यात्रियों से सुनें जिन्होंने हिमाचल प्रदेश की खोज की और अपने अविस्मरणीय अनुभव साझा किए।",
          amit: "हिमाचल मेरी अब तक की सबसे बेहतरीन यात्रा का अनुभव है!",
          priya: "शांत मंदिर और मनमोहक पर्वत।",
          rahul: "साहसिक प्रेमियों के लिए एकदम सही जगह!",
          sneha: "हिमाचल की संस्कृति और आतिथ्य अतुलनीय है।",
          vikram:
            "बर्फ से ढकी चोटियाँ और घाटियाँ मेरी यात्रा को अविस्मरणीय बना गईं।"
        }
      }
    },
    pa: {
      translation: {
        home: "ਘਰ",
        districts: "ਜ਼ਿਲ੍ਹੇ",
        temples: "ਮੰਦਰ",
        tourist: "ਸੈਰ-ਸਪਾਟੇ",
        parking: "ਪਾਰਕਿੰਗ",
        about: "ਸਾਡੇ ਬਾਰੇ",
        title: "ਹਿਮਾਚਲ ਦਰਸ਼ਨ",
        welcome: "ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਦੀ ਖੂਬਸੂਰਤੀ ਦੀ ਖੋਜ ਕਰੋ",

        testimonials: {
          title: "ਯਾਤਰੀਆਂ ਦੀ ਰਾਏ",
          message:
            "ਉਹਨਾਂ ਯਾਤਰੀਆਂ ਤੋਂ ਸੁਣੋ ਜਿਨ੍ਹਾਂ ਨੇ ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਦੀ ਖੋਜ ਕੀਤੀ ਅਤੇ ਆਪਣੇ ਅਵਿਸਮਰਨੀਯ ਅਨੁਭਵ ਸਾਂਝੇ ਕੀਤੇ।",
          amit: "ਹਿਮਾਚਲ ਮੇਰੇ ਜੀਵਨ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਸਫਰ ਦਾ ਤਜਰਬਾ ਹੈ!",
          priya: "ਸ਼ਾਂਤ ਮੰਦਰ ਅਤੇ ਦਿਲਕਸ਼ ਪਹਾੜ।",
          rahul: "ਰੋਮਾਂਚਕ ਯਾਤਰੀਆਂ ਲਈ ਬਿਲਕੁਲ ਸਹੀ ਜਗ੍ਹਾ!",
          sneha: "ਹਿਮਾਚਲ ਦੀ ਸੰਸਕ੍ਰਿਤੀ ਅਤੇ ਮਹਿਮਾਨਨਵਾਜ਼ੀ ਬੇਮਿਸਾਲ ਹੈ।",
          vikram: "ਬਰਫ਼ੀਲੇ ਪਹਾੜ ਅਤੇ ਘਾਟੀਆਂ ਨੇ ਮੇਰਾ ਸਫ਼ਰ ਅਵਿਸਮਰਨੀਯ ਬਣਾ ਦਿੱਤਾ।"
        }
      }
    }
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
