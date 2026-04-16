import Link from "next/link";
import { Heart, Users, Award, Clock, Stethoscope, Activity, TestTube, Baby, Star, Quote } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Professional xizmat",
      description: "Malakali shifokorlar va zamonaviy uskunalar",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Yordam",
      description: "Tez tibbiy yordam xizmati doim tayyor",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Yuqori sifat",
      description: "Xalqaro standartlarga mos sifatli xizmat",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tajribali jamoa",
      description: "15 yillik tajribaga ega mutaxassislar",
    },
  ];

  const services = [
    {
      icon: <Baby className="w-12 h-12" />,
      title: "Pediatriya",
      description: "Bolalar uchun to'liq tibbiy xizmat va profilaktika",
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "Terapiya",
      description: "Umumiy terapevtik ko'riklar va davolash",
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Kardiologiya",
      description: "Yurak-qon tomir kasalliklari diagnostikasi",
    },
    {
      icon: <TestTube className="w-12 h-12" />,
      title: "Laboratoriya",
      description: "Zamonaviy laboratoriya tahlillari",
    },
  ];

  const testimonials = [
    {
      name: "Dilnoza Rahimova",
      age: "32 yosh, ona",
      text: "Farzandim uchun eng yaxshi klinika! Shifokorlar juda e'tiborli va professional. Dr. Karimova bizga juda yordam berdi. Minnatdorman!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612944095914-33fd0a85fcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzYyMzc0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Aziz Tursunov",
      age: "45 yosh",
      text: "Yurak muammolarim bilan murojaat qildim. Dr. Tursunov menga juda yaxshi davolash rejasi tuzib berdi. Hozir o'zimni ancha yaxshi his qilyapman.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzYyNTE4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Madina Yusupova",
      age: "28 yosh",
      text: "Laboratoriya xizmatlari juda tez va aniq. Natijalarni bir necha soat ichida oldim. Klinikaning tozaligi va tartibiga alohida rahmat!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612944095914-33fd0a85fcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzYyMzc0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Sizning sog'ligingiz - bizning g'amxo'rligimiz
              </h1>
              <p className="text-xl mb-8 text-teal-100">
                Jonim bolam klinikasida professional shifokorlar va zamonaviy tibbiy uskunalar bilan
                sog'ligingizni saqlang.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
                >
                  Qabulga yozilish
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
                >
                  Xizmatlar
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc3NjIwNjgxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Jonim bolam klinikasi"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-teal-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Bizning xizmatlar</h2>
            <p className="text-xl text-gray-600">
              Sog'ligingiz uchun keng ko'lamli tibbiy xizmatlar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-teal-600 transition-colors group"
              >
                <div className="text-teal-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-teal-600 font-medium hover:text-teal-700 inline-flex items-center"
                >
                  Batafsil →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Bemorlarimiz fikrlari</h2>
            <p className="text-xl text-gray-600">
              Bizning xizmatlarimizdan foydalanganlarning sharhlari
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.age}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-teal-200 mb-2" />
                <p className="text-gray-700 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-teal-100">Yillik tajriba</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-teal-100">Malakali shifokorlar</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10000+</div>
              <div className="text-teal-100">Baxtli bemorlar</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-teal-100">Mamnunlik darajasi</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Shifokorimizga hoziroq qabulga yoziling</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sog'ligingiz uchun birinchi qadamni tashang. Biz sizga yordam berishga tayyormiz!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Qabulga yozilish
          </Link>
        </div>
      </section>
    </div>
  );
}