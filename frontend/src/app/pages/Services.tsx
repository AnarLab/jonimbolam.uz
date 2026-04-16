"use client";

import { Heart, Stethoscope, Activity, TestTube, Baby, Eye, ChevronDown, ChevronUp } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { apiGet } from "../../lib/api";

export function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [settings, setSettings] = useState<{ services_hero_title?: string; services_hero_subtitle?: string } | null>(
    null
  );
  const [services, setServices] = useState<
    Array<{
      id: number
      title: string
      slug: string
      short_description: string
      description: string
      price_from: string | null
      order: number
    }>
  >([]);
  const [faqs, setFaqs] = useState<Array<{ id: number; question: string; answer: string; order: number }>>([]);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const [servicesRes, faqRes] = await Promise.all([
          apiGet<
            Array<{
              id: number
              title: string
              slug: string
              short_description: string
              description: string
              price_from: string | null
              order: number
            }>
          >("/api/services/"),
          apiGet<Array<{ id: number; question: string; answer: string; order: number }>>("/api/pages/faq/"),
        ]);
        if (cancelled) return;
        setServices(servicesRes);
        setFaqs(faqRes);
      } catch {
        // keep UI with existing static content if API fails
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const s = await apiGet<{ services_hero_title?: string; services_hero_subtitle?: string }>("/api/pages/settings/");
        if (!cancelled) setSettings(s);
      } catch {}
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const iconByTitle = useMemo(() => {
    return (title: string) => {
      const t = title.toLowerCase();
      if (t.includes("pedi")) return <Baby className="w-16 h-16" />;
      if (t.includes("kardio") || t.includes("yurak")) return <Activity className="w-16 h-16" />;
      if (t.includes("labor") || t.includes("tahlil")) return <TestTube className="w-16 h-16" />;
      if (t.includes("oftal") || t.includes("ko'z") || t.includes("koʻz")) return <Eye className="w-16 h-16" />;
      if (t.includes("endo") || t.includes("diabet")) return <Heart className="w-16 h-16" />;
      return <Stethoscope className="w-16 h-16" />;
    };
  }, []);

  const fallbackServices = [
    {
      icon: <Baby className="w-16 h-16" />,
      title: "Pediatriya",
      description:
        "Bolalar uchun to'liq tibbiy xizmat va profilaktika. Yangi tug'ilgan chaqaloqlardan to yoshgacha bo'lgan bolalarga professional parvarish.",
      features: [
        "Preventiv ko'riklar",
        "Vaksinatsiya",
        "Rivojlanish nazorati",
        "Kasalliklar diagnostikasi",
      ],
      image: "https://images.unsplash.com/photo-1632052999485-d748103abf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBkb2N0b3IlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzYyNTE4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Stethoscope className="w-16 h-16" />,
      title: "Terapiya",
      description:
        "Umumiy terapevtik ko'riklar va davolash. Kattalar uchun keng ko'lamli tibbiy xizmatlar va maslahatlar.",
      features: [
        "Umumiy ko'riklar",
        "Diagnostika",
        "Davolash rejalari",
        "Profilaktik maslahatlar",
      ],
      image: "https://images.unsplash.com/photo-1612944095914-33fd0a85fcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzYyMzc0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Activity className="w-16 h-16" />,
      title: "Kardiologiya",
      description:
        "Yurak-qon tomir kasalliklari diagnostikasi va davolash. EKG, Exo-KG va boshqa zamonaviy tekshiruvlar.",
      features: [
        "EKG tekshiruvi",
        "Exo-kardiografiya",
        "Qon bosimi nazorati",
        "Yurak kasalliklari davolash",
      ],
      image: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMG1vZGVybnxlbnwxfHx8fDE3NzYyMzAxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <TestTube className="w-16 h-16" />,
      title: "Laboratoriya",
      description:
        "Zamonaviy laboratoriya tahlillari va diagnostika. Tez va aniq natijalarga ega bo'lish imkoniyati.",
      features: [
        "Qon tahlillari",
        "Biokimyoviy tahlillar",
        "Gormonal tekshiruvlar",
        "Mikrobiologik tahlillar",
      ],
      image: "https://images.unsplash.com/photo-1655313719494-1d700d4aedd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzc2MjI3MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Heart className="w-16 h-16" />,
      title: "Endokrinologiya",
      description:
        "Endokrin tizim kasalliklari diagnostikasi va davolash. Qandli diabet va boshqa gormonal kasalliklar.",
      features: [
        "Diabet diagnostikasi",
        "Qalqonsimon bez tekshiruvi",
        "Gormonal muvozanat",
        "Ovqatlanish maslahatlari",
      ],
      image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzYyNTE4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Eye className="w-16 h-16" />,
      title: "Oftalmologiya",
      description:
        "Ko'z kasalliklari diagnostikasi va davolash. Ko'rish qobiliyatini tekshirish va tuzatish.",
      features: [
        "Ko'z tekshiruvi",
        "Ko'zoynak tanlash",
        "Linza maslahat",
        "Ko'z kasalliklari davolash",
      ],
      image: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc3NjIwNjgxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const fallbackFaqs = [
    {
      question: "Qabul uchun oldindan yozilish kerakmi?",
      answer: "Ha, oldindan yozilish tavsiya etiladi. Bu sizning vaqtingizni tejaydi va kutishsiz xizmat olasiz. Telefon yoki onlayn orqali yozilishingiz mumkin.",
    },
    {
      question: "Xizmatlar narxi qancha?",
      answer: "Narxlar xizmat turiga qarab farqlanadi. Pediatriya ko'rigi 150,000 so'm, terapiya 120,000 so'm, kardiologiya 200,000 so'm. Batafsil narxlar ro'yxati uchun qo'ng'iroq qiling.",
    },
    {
      question: "Laboratoriya tahlillari necha vaqtda tayyor bo'ladi?",
      answer: "Oddiy qon tahlillari bir necha soat ichida tayyor bo'ladi. Murakkab tahlillar 1-2 kun ichida. Shoshilinch holatlarda ekspres tahlillar ham mavjud.",
    },
    {
      question: "Klinikangizda sug'urta qabul qilinadimi?",
      answer: "Ha, biz ko'plab tibbiy sug'urta kompaniyalari bilan hamkorlik qilamiz. Sug'urta polisangizni keltiring va biz sizga yordam beramiz.",
    },
    {
      question: "Bolalar uchun qanday xizmatlar mavjud?",
      answer: "Pediatriya bo'limida preventiv ko'riklar, vaksinatsiya, rivojlanish nazorati va turli kasalliklar diagnostikasi xizmatlari mavjud. Yangi tug'ilganlardan yoshgacha.",
    },
    {
      question: "Onlayn to'lov qilish mumkinmi?",
      answer: "Ha, bizning saytda onlayn to'lov xizmati mavjud. Siz bank kartasi, Payme, Click yoki bank o'tkazmasi orqali to'lov qilishingiz mumkin.",
    },
    {
      question: "Shifokor maslahatlarini onlayn olish mumkinmi?",
      answer: "Hozircha biz faqat klinikada shaxsiy ko'riklar o'tkazamiz. Lekin oldindan telefon orqali maslahat olishingiz mumkin.",
    },
    {
      question: "Dam olish kunlari ishlaydimi?",
      answer: "Ha, biz shanba kunlari 09:00 dan 18:00 gacha, yakshanba kunlari 09:00 dan 15:00 gacha ishlaymiz. Shoshilinch yordam 24/7 mavjud.",
    },
  ];

  const renderServices = services.length
    ? services.map((s) => ({
        icon: iconByTitle(s.title),
        title: s.title,
        description: s.short_description || "",
        features: [],
        image:
          "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        longHtml: s.description || "",
      }))
    : fallbackServices.map((s) => ({ ...s, longHtml: "" }));

  const renderFaqs = faqs.length
    ? faqs.map((f) => ({ question: f.question, answer: f.answer }))
    : fallbackFaqs;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{settings?.services_hero_title || "Bizning xizmatlar"}</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            {settings?.services_hero_subtitle ||
              "Jonim bolam klinikasida sog'ligingiz uchun keng ko'lamli professional tibbiy xizmatlar"}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {renderServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-teal-600 mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-700 text-lg mb-6">{service.description}</p>
                  {service.features.length ? (
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ) : service.longHtml ? (
                    <div
                      className="prose max-w-none text-gray-700"
                      dangerouslySetInnerHTML={{ __html: service.longHtml }}
                    />
                  ) : null}
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Tez-tez so'raladigan savollar</h2>
            <p className="text-xl text-gray-600">
              Sizning savollaringizga javoblar
            </p>
          </div>
          <div className="space-y-4">
            {renderFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <div
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Sizga qaysi xizmat kerak?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Bizning mutaxassislarimiz sizga yordam berishga doim tayyor
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-teal-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Qabulga yozilish
            </Link>
            <Link
              href="/payment"
              className="border-2 border-teal-600 text-teal-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              Onlayn to'lov
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}