import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { Award, GraduationCap, Briefcase } from "lucide-react";
import { apiGet, getApiBaseUrl, withAbsoluteUrl } from "../../lib/api";

type DoctorDto = {
  id: number
  full_name: string
  slug: string
  position: string
  bio: string
  photo: string | null
  order: number
}

export async function Doctors() {
  const doctors = await apiGet<DoctorDto[]>("/api/doctors/");
  const settings = await apiGet<{ doctors_hero_title?: string; doctors_hero_subtitle?: string }>("/api/pages/settings/");
  const baseUrl = getApiBaseUrl()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{settings.doctors_hero_title || "Bizning shifokorlar"}</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            {settings.doctors_hero_subtitle ||
              "Malakali va tajribali mutaxassislar jamoasi sizning sog'ligingiz uchun g'amxo'rlik qiladi"}
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.slug || index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-80">
                  <ImageWithFallback
                    src={
                      withAbsoluteUrl(baseUrl, doctor.photo) ||
                      "https://images.unsplash.com/photo-1612944095914-33fd0a85fcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    }
                    alt={doctor.full_name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{doctor.full_name}</h3>
                    <p className="text-teal-300">{doctor.position}</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Mutaxassislik</p>
                      <p className="font-medium">{doctor.position || "-"}</p>
                    </div>
                  </div>
                  {doctor.bio ? (
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500">Bio</p>
                        <div
                          className="text-gray-700 line-clamp-4"
                          dangerouslySetInnerHTML={{ __html: doctor.bio }}
                        />
                      </div>
                    </div>
                  ) : null}
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Slug</p>
                      <p className="font-medium">{doctor.slug}</p>
                    </div>
                  </div>
                  <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors">
                    Qabulga yozilish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nima uchun bizni tanlaysiz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Yuqori malaka</h3>
              <p className="text-gray-600">
                Barcha shifokorlarimiz xalqaro sertifikatlar va yuqori malakaga ega
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Katta tajriba</h3>
              <p className="text-gray-600">
                O'rtacha 15 yillik amaliy tajribaga ega professional mutaxassislar
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Doimiy rivojlanish</h3>
              <p className="text-gray-600">
                Shifokorlarimiz muntazam ravishda malaka oshirish kurslarida qatnashadilar
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
