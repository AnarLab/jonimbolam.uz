import { Target, Eye, Award, Users, Heart, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { apiGet } from "../../lib/api";

export async function About(props: { page?: { title?: string; content?: string } }) {
  const settings = await apiGet<{ about_hero_title?: string; about_hero_subtitle?: string }>("/api/pages/settings/");
  const title = props.page?.title || "Biz haqimizda";
  const contentHtml = props.page?.content || "";

  const values = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "G'amxo'rlik",
      description: "Har bir bemorga individual yondashuv va samimiy munosabat",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Professional",
      description: "Yuqori malakali shifokorlar va zamonaviy tibbiy uskunalar",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Jamoa",
      description: "Bir maqsadga yo'naltirilgan mutaxassislar jamoasi",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Rivojlanish",
      description: "Doimiy takomillashtirish va yangi texnologiyalar joriy etish",
    },
  ];

  const milestones = [
    { year: "2011", event: "Klinika tashkil etildi" },
    { year: "2014", event: "Birinchi 1000 ta bemor davolandi" },
    { year: "2017", event: "Zamonaviy laboratoriya ochildi" },
    { year: "2020", error: "Yangi bino va kengaytirilgan xizmatlar" },
    { year: "2023", event: "10000-bemor davolandi" },
    { year: "2026", event: "Mintaqadagi eng yaxshi klinikalar qatorida" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{settings.about_hero_title || title}</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            {settings.about_hero_subtitle || "Jonim bolam - sog'ligingiz uchun ishonchli hamkor"}
          </p>
        </div>
      </section>

      {contentHtml ? (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <article
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </section>
      ) : null}

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc3NjIwNjgxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Jonim bolam klinikasi"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-teal-600" />
                  <h2 className="text-3xl font-bold">Bizning maqsadimiz</h2>
                </div>
                <p className="text-gray-700 text-lg">
                  Jonim bolam klinikasining asosiy maqsadi - har bir bemorga yuqori sifatli,
                  xavfsiz va professional tibbiy xizmat ko'rsatish. Biz zamonaviy tibbiyot
                  standartlariga rioya qilgan holda, bemorlarimizning sog'lig'ini tiklash va
                  saqlashga intilamiz.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-teal-600" />
                  <h2 className="text-3xl font-bold">Bizning qarashimiz</h2>
                </div>
                <p className="text-gray-700 text-lg">
                  Biz O'zbekistonda eng ishonchli va ilg'or tibbiy muassasalardan biri bo'lishni
                  ko'zlaymiz. Har bir oila a'zosi uchun sog'lik va farovonlik markazi bo'lib,
                  mintaqamizda tibbiy xizmatlar standartlarini belgilaymiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Bizning qadriyatlarimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-teal-600 flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Bizning tarixiy yo'limiz</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24">
                  <div className="text-2xl font-bold text-teal-600">{milestone.year}</div>
                </div>
                <div className="flex-1">
                  <div className="relative pl-6 border-l-4 border-teal-600 pb-8">
                    <div className="absolute -left-2.5 top-0 w-4 h-4 bg-teal-600 rounded-full"></div>
                    <p className="text-lg text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Bizning yutuqlarimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-teal-100">Yillik tajriba</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-teal-100">Shifokorlar</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-teal-100">Davolangan bemorlar</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-teal-100">Mamnunlik darajasi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nima uchun Jonim bolam?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sertifikatlangan mutaxassislar</h3>
                <p className="text-gray-600">
                  Barcha shifokorlarimiz xalqaro standartlarga mos sertifikatlarga ega
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Zamonaviy uskunalar</h3>
                <p className="text-gray-600">
                  Eng so'nggi tibbiy texnologiyalar va uskunalar bilan jihozlangan
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Individual yondashuv</h3>
                <p className="text-gray-600">
                  Har bir bemorga alohida e'tibor va individual davolash rejasi
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Qulay muhit</h3>
                <p className="text-gray-600">
                  Zamonaviy va shinam sharoitlar, do'stona atmosfera
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
