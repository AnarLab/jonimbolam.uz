"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useMemo, useState } from "react";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = useMemo(
    () => [
      { name: "Bosh sahifa", path: "/" },
      { name: "Xizmatlar", path: "/services" },
      { name: "Shifokorlar", path: "/doctors" },
      { name: "Blog", path: "/blog" },
      { name: "Biz haqimizda", path: "/about" },
      { name: "Aloqa", path: "/contact" },
    ],
    [],
  );

  const isActive = (path: string) => pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-teal-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+998901234567" className="flex items-center gap-2 hover:text-teal-100">
              <Phone className="w-4 h-4" />
              <span>+998 90 123 45 67</span>
            </a>
            <a href="mailto:info@jonimbolam.uz" className="flex items-center gap-2 hover:text-teal-100">
              <Mail className="w-4 h-4" />
              <span>info@jonimbolam.uz</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Toshkent, Amir Temur ko'chasi 108</span>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">J</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Jonim bolam</h1>
                <p className="text-sm text-gray-600">Sog'liq tibbiyot klinikasi</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`transition-colors ${
                    isActive(item.path)
                      ? "text-teal-600 font-medium"
                      : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Qabulga yozilish
              </Link>
            </nav>

            <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block py-2 transition-colors ${
                    isActive(item.path)
                      ? "text-teal-600 font-medium"
                      : "text-gray-700 hover:text-teal-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mt-4 bg-teal-600 text-white px-6 py-2 rounded-lg text-center hover:bg-teal-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Qabulga yozilish
              </Link>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Jonim bolam</h3>
              <p className="text-gray-400">
                Sizning sog'ligingiz bizning ustuvor vazifamiz. Zamonaviy uskunalar va malakali shifokorlar.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tez havolalar</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Xizmatlar</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Pediatriya</li>
                <li>Terapiya</li>
                <li>Kardiologiya</li>
                <li>Laboratoriya</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ish vaqti</h4>
              <div className="space-y-2 text-gray-400">
                <p>Dushanba - Juma: 08:00 - 20:00</p>
                <p>Shanba: 09:00 - 18:00</p>
                <p>Yakshanba: 09:00 - 15:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Jonim bolam. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

