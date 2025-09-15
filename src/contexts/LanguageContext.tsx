import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DEFAULT_LANGUAGE } from '@/config/constants';

export interface Translation {
  nav: {
    home: string;
    price: string;
    sitePlan: string;
    amenities: string;
    gallery: string;
    location: string;
    brochure: string;
    requestCallBack: string;
    contactUs: string;
  };
  hero: {
    title: string;
    subtitle: string;
    location: string;
    developer: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    apartments: string;
    startsFrom: string;
    onwards: string;
    readyToMove: string;
    premiumFinishes: string;
    priceInquiry: string;
    type: string;
    area: string;
    price: string;
    bedrooms: {
      one: string;
      two: string;
      three: string;
    };
    inclusiveNote: string;
    worldClassAmenities: string;
  };
  amenities: {
    title: string;
    subtitle: string;
    viewAll: string;
    items: {
      residentLounge: string;
      shadedSeating: string;
      gymFitness: string;
      retailArea: string;
      swimmingPool: string;
      yogaPlatform: string;
    };
  };
  gallery: {
    title: string;
    subtitle: string;
    viewComplete: string;
  };
  location: {
    title: string;
    connectivity: string;
    requestDetails: string;
    primeLocation: string;
    connectivityData: Array<{
      name: string;
      time: string;
    }>;
  };
  sitePlan: {
    title: string;
    subtitle: string;
    viewMasterPlan: string;
    requestUnitPlan: string;
    description: string;
  };
  propertyInfo: {
    flexiblePayment: string;
    paymentPlan: string;
    downPayment: string;
    enquireNow: string;
    organizeSiteVisit: string;
    scheduleSiteVisit: string;
  };
  form: {
    name: string;
    phone: string;
    email: string;
    consent: string;
    privacyPolicy: string;
    termsConditions: string;
    submit: string;
    submitSuccess: string;
    consentRequired: string;
    trustIndicators: {
      support: string;
      secure: string;
      certified: string;
    };
  };
  footer: {
    disclaimer: string;
    copyright: string;
    privacyPolicy: string;
    termsConditions: string;
  };
}

const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: "Home",
      price: "Price",
      sitePlan: "Site Plan",
      amenities: "Amenities",
      gallery: "Gallery",
      location: "Location",
      brochure: "Brochure",
      requestCallBack: "Request Call Back",
      contactUs: "Contact Us",
    },
    hero: {
      title: "GAGARIN\nAVENUE",
      subtitle: "At Premium District",
      location: "Gagarin Avenue",
      developer: "By Elite Properties",
    },
    pricing: {
      title: "Apartment Pricing",
      subtitle: "Choose from our selection of luxury apartments",
      apartments: "Luxury 1, 2 & 3 Bed Apartments",
      startsFrom: "Starts From",
      onwards: "Onwards",
      readyToMove: "Ready to Move",
      premiumFinishes: "Premium Finishes",
      priceInquiry: "Price Inquiry",
      type: "Type",
      area: "Area",
      price: "Price",
      bedrooms: {
        one: "1 Bedroom",
        two: "2 Bedroom",
        three: "3 Bedroom",
      },
      inclusiveNote: "All prices are inclusive of registration and other charges",
      worldClassAmenities: "World-class Amenities",
    },
    amenities: {
      title: "Premium Amenities",
      subtitle: "Experience luxury living with world-class facilities",
      viewAll: "View All Amenities",
      items: {
        residentLounge: "Resident Lounge",
        shadedSeating: "Shaded Seating Areas",
        gymFitness: "Gym & Fitness Center",
        retailArea: "Retail Area",
        swimmingPool: "Swimming Pool",
        yogaPlatform: "Yoga Platform",
      },
    },
    gallery: {
      title: "Photo Gallery",
      subtitle: "Explore our stunning interiors and exteriors",
      viewComplete: "View Complete Gallery",
    },
    location: {
      title: "Location",
      connectivity: "Connectivity",
      requestDetails: "Request Location Details",
      primeLocation: "Prime Location",
      connectivityData: [
        { name: "Samarkand State University", time: "5 Mins" },
        { name: "Central Bazaar Market", time: "8 Mins" },
        { name: "Registan Square", time: "12 Mins" },
        { name: "Samarkand Park", time: "7 Mins" },
        { name: "City Shopping Center", time: "10 Mins" },
        { name: "Traditional Restaurants District", time: "6 Mins" }
      ],
    },
    sitePlan: {
      title: "Site Plan & Layout",
      subtitle: "Discover the architectural excellence",
      viewMasterPlan: "View Master Plan Layout",
      requestUnitPlan: "Request Unit Plan Layout",
      description: "Explore our comprehensive site plans and detailed unit layouts. Get a complete understanding of the property's layout, positioning, and architectural design.",
    },
    propertyInfo: {
      flexiblePayment: "Flexible Payment Options Available",
      paymentPlan: "Easy 70/30 Payment Plan",
      downPayment: "Down Payment 20%",
      enquireNow: "Enquire Now",
      organizeSiteVisit: "Organize Site Visit",
      scheduleSiteVisit: "Schedule Site Visit",
    },
    form: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      consent: "I consent to the processing of my personal data for marketing purposes and agree to the",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions",
      submit: "Submit Inquiry",
      submitSuccess: "Thank you! We'll contact you soon.",
      consentRequired: "Please provide your consent to proceed.",
      trustIndicators: {
        support: "24/7 Support",
        secure: "Secure & Private",
        certified: "Award Winning",
      },
    },
    footer: {
      disclaimer: "We are an authorised marketing partner for this project. Provided content is given by respective owners and this website and content is for information purpose only and it does not constitute any offer to avail for any services. Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability. You can expect a call, SMS or emails on details registered with us.",
      copyright: "Copyright © 2025",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms and Conditions",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      price: "Цены",
      sitePlan: "План участка",
      amenities: "Удобства",
      gallery: "Галерея",
      location: "Местоположение",
      brochure: "Брошюра",
      requestCallBack: "Заказать звонок",
      contactUs: "Связаться с нами",
    },
    hero: {
      title: "GAGARIN\nAVENUE",
      subtitle: "В премиум районе",
      location: "Проспект Гагарина",
      developer: "От Элитной недвижимости",
    },
    pricing: {
      title: "Цены на квартиры",
      subtitle: "Выберите из нашего выбора роскошных квартир",
      apartments: "Роскошные 1, 2 и 3 комнатные квартиры",
      startsFrom: "Начиная от",
      onwards: "И выше",
      readyToMove: "Готово к заселению",
      premiumFinishes: "Премиум отделка",
      priceInquiry: "Запрос цены",
      type: "Тип",
      area: "Площадь",
      price: "Цена",
      bedrooms: {
        one: "1 комнатная",
        two: "2 комнатная",
        three: "3 комнатная",
      },
      inclusiveNote: "Все цены включают регистрацию и прочие сборы",
      worldClassAmenities: "Удобства мирового класса",
    },
    amenities: {
      title: "Премиум удобства",
      subtitle: "Испытайте роскошную жизнь с удобствами мирового класса",
      viewAll: "Посмотреть все удобства",
      items: {
        residentLounge: "Лаундж для жителей",
        shadedSeating: "Затененные зоны отдыха",
        gymFitness: "Тренажерный зал и фитнес-центр",
        retailArea: "Торговая зона",
        swimmingPool: "Бассейн",
        yogaPlatform: "Платформа для йоги",
      },
    },
    gallery: {
      title: "Фотогалерея",
      subtitle: "Исследуйте наши потрясающие интерьеры и экстерьеры",
      viewComplete: "Посмотреть полную галерею",
    },
    location: {
      title: "Местоположение",
      connectivity: "Связь",
      requestDetails: "Запросить детали местоположения",
      primeLocation: "Премиальное местоположение",
      connectivityData: [
        { name: "Самаркандский государственный университет", time: "5 мин" },
        { name: "Центральный базар", time: "8 мин" },
        { name: "Площадь Регистан", time: "12 мин" },
        { name: "Парк Самарканда", time: "7 мин" },
        { name: "Городской торговый центр", time: "10 мин" },
        { name: "Район традиционных ресторанов", time: "6 мин" }
      ],
    },
    sitePlan: {
      title: "План участка и планировка",
      subtitle: "Откройте для себя архитектурное совершенство",
      viewMasterPlan: "Посмотреть генеральный план",
      requestUnitPlan: "Запросить план квартиры",
      description: "Изучите наши комплексные планы участков и детальные планировки квартир. Получите полное представление о планировке, расположении и архитектурном дизайне недвижимости.",
    },
    propertyInfo: {
      flexiblePayment: "Доступны гибкие варианты оплаты",
      paymentPlan: "Простой план оплаты 70/30",
      downPayment: "Первоначальный взнос 20%",
      enquireNow: "Узнать сейчас",
      organizeSiteVisit: "Организовать посещение объекта",
      scheduleSiteVisit: "Запланировать посещение объекта",
    },
    form: {
      name: "Полное имя",
      phone: "Номер телефона",
      email: "Адрес электронной почты",
      consent: "Я даю согласие на обработку моих персональных данных в маркетинговых целях и соглашаюсь с",
      privacyPolicy: "Политикой конфиденциальности",
      termsConditions: "Условиями использования",
      submit: "Отправить запрос",
      submitSuccess: "Спасибо! Мы свяжемся с вами в ближайшее время.",
      consentRequired: "Пожалуйста, дайте свое согласие для продолжения.",
      trustIndicators: {
        support: "Поддержка 24/7",
        secure: "Безопасно и конфиденциально",
        certified: "Награжденный",
      },
    },
    footer: {
      disclaimer: "Мы являемся авторизованным маркетинговым партнером этого проекта. Предоставленный контент предоставлен соответствующими владельцами, и этот веб-сайт и контент предназначены только для информационных целей и не представляют собой какого-либо предложения воспользоваться какими-либо услугами. Указанные цены могут быть изменены без предварительного уведомления, а упомянутая недвижимость зависит от наличия. Вы можете ожидать звонка, SMS или электронных писем по зарегистрированным у нас данным.",
      copyright: "Авторское право © 2025",
      privacyPolicy: "Политика конфиденциальности",
      termsConditions: "Условия использования",
    },
  },
  uz: {
    nav: {
      home: "Bosh sahifa",
      price: "Narxlar",
      sitePlan: "Sayt rejasi",
      amenities: "Qulayliklar",
      gallery: "Galereya",
      location: "Joylashuv",
      brochure: "Broshyura",
      requestCallBack: "Qo'ng'iroq so'rash",
      contactUs: "Biz bilan bog'lanish",
    },
    hero: {
      title: "GAGARIN\nAVENUE",
      subtitle: "Premium hududda",
      location: "Gagarin ko'chasi",
      developer: "Elite Properties tomonidan",
    },
    pricing: {
      title: "Kvartira narxlari",
      subtitle: "Hashamatli kvartilardan tanlang",
      apartments: "Hashamatli 1, 2 va 3 xonali kvartiralar",
      startsFrom: "Dan boshlab",
      onwards: "Va undan yuqori",
      readyToMove: "Ko'chishga tayyor",
      premiumFinishes: "Premium tugallash",
      priceInquiry: "Narx so'rovi",
      type: "Turi",
      area: "Maydoni",
      price: "Narxi",
      bedrooms: {
        one: "1 xonali",
        two: "2 xonali",
        three: "3 xonali",
      },
      inclusiveNote: "Barcha narxlarga ro'yxatga olish va boshqa to'lovlar kiradi",
      worldClassAmenities: "Jahon darajasidagi qulayliklar",
    },
    amenities: {
      title: "Premium qulayliklar",
      subtitle: "Jahon darajasidagi ob'ektlar bilan hashamatli hayotni his eting",
      viewAll: "Barcha qulayliklarni ko'rish",
      items: {
        residentLounge: "Rezidentlar zaliga",
        shadedSeating: "Soyali o'tirish joylari",
        gymFitness: "Sport zali va fitnes markazi",
        retailArea: "Savdo hududi",
        swimmingPool: "Suzish hovuzi",
        yogaPlatform: "Yoga platformasi",
      },
    },
    gallery: {
      title: "Foto galereya",
      subtitle: "Ajoyib ichki va tashqi ko'rinishlarni o'rganing",
      viewComplete: "To'liq galereyani ko'rish",
    },
    location: {
      title: "Joylashuv",
      connectivity: "Aloqa",
      requestDetails: "Joylashuv tafsilotlarini so'rash",
      primeLocation: "Premium joylashuv",
      connectivityData: [
        { name: "Samarqand davlat universiteti", time: "5 daqiqa" },
        { name: "Markaziy bozor", time: "8 daqiqa" },
        { name: "Registon maydoni", time: "12 daqiqa" },
        { name: "Samarqand bog'i", time: "7 daqiqa" },
        { name: "Shahar savdo markazi", time: "10 daqiqa" },
        { name: "An'anaviy restoranlar tumani", time: "6 daqiqa" }
      ],
    },
    sitePlan: {
      title: "Sayt rejasi va tartib",
      subtitle: "Arxitektura mukammalligini kashf eting",
      viewMasterPlan: "Bosh reja tartibini ko'rish",
      requestUnitPlan: "Kvartira rejasini so'rash",
      description: "Bizning keng qamrovli sayt rejalarimiz va batafsil kvartira tartiblarini o'rganing. Mulkning tartib-qoidalari, joylashuvi va me'moriy dizayni haqida to'liq tushunchaga ega bo'ling.",
    },
    propertyInfo: {
      flexiblePayment: "Moslashuvchan to'lov variantlari mavjud",
      paymentPlan: "Oson 70/30 to'lov rejasi",
      downPayment: "Dastlabki to'lov 20%",
      enquireNow: "Hozir so'rang",
      organizeSiteVisit: "Ob'ektga tashrif tashlash",
      scheduleSiteVisit: "Ob'ektga tashrifni rejalashtirish",
    },
    form: {
      name: "To'liq ism",
      phone: "Telefon raqami",
      email: "Elektron pochta manzili",
      consent: "Men shaxsiy ma'lumotlarimni marketing maqsadlarda qayta ishlashga rozilik beraman va quyidagiga roziman",
      privacyPolicy: "Maxfiylik siyosati",
      termsConditions: "Foydalanish shartlari",
      submit: "So'rov yuborish",
      submitSuccess: "Rahmat! Tez orada siz bilan bog'lanamiz.",
      consentRequired: "Davom etish uchun roziligingizni bering.",
      trustIndicators: {
        support: "24/7 qo'llab-quvvatlash",
        secure: "Xavfsiz va maxfiy",
        certified: "Mukofotli",
      },
    },
    footer: {
      disclaimer: "Biz ushbu loyiha uchun vakolatli marketing hamkorimiz. Taqdim etilgan kontent tegishli egalar tomonidan berilgan va ushbu veb-sayt va kontent faqat ma'lumot maqsadida mo'ljallangan va u hech qanday xizmatlardan foydalanish taklifini tashkil etmaydi. Ko'rsatilgan narxlar oldindan ogohlantirmasdan o'zgarishi mumkin va eslatib o'tilgan mulklar mavjudligiga bog'liq. Siz bizda ro'yxatdan o'tgan ma'lumotlar bo'yicha qo'ng'iroq, SMS yoki elektron pochta xabarlarini kutishingiz mumkin.",
      copyright: "Mualliflik huquqi © 2025",
      privacyPolicy: "Maxfiylik siyosati",
      termsConditions: "Foydalanish shartlari",
    },
  },
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};