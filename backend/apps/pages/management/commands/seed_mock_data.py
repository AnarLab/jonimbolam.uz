from django.core.management.base import BaseCommand
from django.utils import timezone

from apps.blog.models import BlogPost
from apps.doctors.models import Doctor
from apps.pages.models import AboutPage, FAQItem, SiteSettings
from apps.services.models import Service


class Command(BaseCommand):
    help = "Seed initial mock data for local/dev usage."

    def add_arguments(self, parser):
        parser.add_argument(
            "--force",
            action="store_true",
            help="Overwrite singleton settings/about and recreate list data.",
        )

    def handle(self, *args, **options):
        force: bool = bool(options["force"])

        # Site settings (singleton)
        settings_obj = SiteSettings.load()
        if force or not settings_obj.phone_primary:
            settings_obj.phone_primary = "+998 90 123 45 67"
            settings_obj.phone_secondary = "+998 71 123 45 67"
            settings_obj.email_primary = "info@jonimbolam.uz"
            settings_obj.email_secondary = "reception@jonimbolam.uz"
            settings_obj.address_line1 = "O'zbekiston Respublikasi, Toshkent shahri"
            settings_obj.address_line2 = "Amir Temur ko'chasi, 108-uy"
            settings_obj.working_hours_line1 = "Dushanba - Juma: 08:00 - 20:00"
            settings_obj.working_hours_line2 = "Shanba: 09:00 - 18:00"
            settings_obj.working_hours_line3 = "Yakshanba: 09:00 - 15:00"

            settings_obj.about_hero_title = "Biz haqimizda"
            settings_obj.about_hero_subtitle = "Jonim bolam - sog'ligingiz uchun ishonchli hamkor"
            settings_obj.services_hero_title = "Bizning xizmatlar"
            settings_obj.services_hero_subtitle = (
                "Jonim bolam klinikasida sog'ligingiz uchun keng ko'lamli professional tibbiy xizmatlar"
            )
            settings_obj.doctors_hero_title = "Bizning shifokorlar"
            settings_obj.doctors_hero_subtitle = (
                "Malakali va tajribali mutaxassislar jamoasi sizning sog'ligingiz uchun g'amxo'rlik qiladi"
            )
            settings_obj.blog_hero_title = "Tibbiyot blogi"
            settings_obj.blog_hero_subtitle = (
                "Sog'liqni saqlash, kasalliklarni oldini olish va sog'lom turmush tarzi haqida foydali maqolalar"
            )
            settings_obj.contact_hero_title = "Biz bilan bog'laning"
            settings_obj.contact_hero_subtitle = (
                "Savollaringiz bormi yoki qabulga yozilmoqchimisiz? Biz yordam berishga tayyormiz!"
            )
            settings_obj.emergency_title = "Shoshilinch yordam kerakmi?"
            settings_obj.emergency_subtitle = "24/7 tez tibbiy yordam xizmati"
            settings_obj.emergency_phone = "+998 90 123 45 67"
            settings_obj.save()

        # About (singleton)
        about = AboutPage.load()
        if force or not about.content:
            about.title = "Biz haqimizda"
            about.content = (
                "<p><strong>Jonim bolam</strong> — sog'ligingiz uchun ishonchli hamkor. "
                "Biz zamonaviy tibbiyot standartlariga rioya qilgan holda xizmat ko'rsatamiz.</p>"
            )
            about.save()

        # FAQ
        if force:
            FAQItem.objects.all().delete()
        if not FAQItem.objects.exists():
            faq_items = [
                (
                    "Qabul uchun oldindan yozilish kerakmi?",
                    "Ha, oldindan yozilish tavsiya etiladi. Telefon yoki onlayn orqali yozilishingiz mumkin.",
                ),
                (
                    "Xizmatlar narxi qancha?",
                    "Narxlar xizmat turiga qarab farqlanadi. Batafsil ma'lumot uchun qo'ng'iroq qiling.",
                ),
                (
                    "Laboratoriya tahlillari necha vaqtda tayyor bo'ladi?",
                    "Oddiy tahlillar bir necha soat ichida, murakkablari 1-2 kun ichida tayyor bo'ladi.",
                ),
                (
                    "Dam olish kunlari ishlaydimi?",
                    "Ha, shanba 09:00-18:00, yakshanba 09:00-15:00. Shoshilinch yordam 24/7.",
                ),
            ]
            for idx, (q, a) in enumerate(faq_items):
                FAQItem.objects.create(question=q, answer=a, order=idx, is_active=True)

        # Services
        if force:
            Service.objects.all().delete()
        if not Service.objects.exists():
            services = [
                ("Pediatriya", "Bolalar uchun to'liq tibbiy xizmat va profilaktika.", "<p>Pediatriya xizmatlari.</p>"),
                ("Terapiya", "Umumiy terapevtik ko'riklar va davolash.", "<p>Terapiya xizmatlari.</p>"),
                ("Kardiologiya", "Yurak-qon tomir diagnostikasi va davolash.", "<p>Kardiologiya xizmatlari.</p>"),
                ("Laboratoriya", "Zamonaviy laboratoriya tahlillari va diagnostika.", "<p>Laboratoriya.</p>"),
                ("Endokrinologiya", "Diabet va gormonal kasalliklar.", "<p>Endokrinologiya.</p>"),
                ("Oftalmologiya", "Ko'z kasalliklari diagnostikasi va davolash.", "<p>Oftalmologiya.</p>"),
            ]
            for idx, (title, short, desc) in enumerate(services):
                Service.objects.create(title=title, short_description=short, description=desc, is_active=True, order=idx)

        # Doctors
        if force:
            Doctor.objects.all().delete()
        if not Doctor.objects.exists():
            doctors = [
                ("Dr. Aliyev Rustam", "Bosh shifokor, Terapevt", "<p>20 yillik tajriba.</p>"),
                ("Dr. Karimova Dilnoza", "Pediatr", "<p>15 yillik tajriba.</p>"),
                ("Dr. Tursunov Jamshid", "Kardiolog", "<p>18 yillik tajriba.</p>"),
                ("Dr. Azimova Sevara", "Endokrinolog", "<p>12 yillik tajriba.</p>"),
                ("Dr. Mirzayev Otabek", "Oftalmolog", "<p>10 yillik tajriba.</p>"),
                ("Dr. Rahimova Nigora", "Laborant-shifokor", "<p>14 yillik tajriba.</p>"),
            ]
            for idx, (name, pos, bio) in enumerate(doctors):
                Doctor.objects.create(full_name=name, position=pos, bio=bio, is_active=True, order=idx)

        # Blog posts
        if force:
            BlogPost.objects.all().delete()
        if not BlogPost.objects.exists():
            now = timezone.now()
            BlogPost.objects.create(
                title="Bolalar uchun to'g'ri ovqatlanish qoidalari",
                excerpt="Farzandingizning sog'lig'i va rivojlanishi uchun to'g'ri ovqatlanish juda muhim.",
                content="<p>Bolalar organizmining to'g'ri rivojlanishi uchun muvozanatli ovqatlanish juda muhim.</p>",
                is_published=True,
                published_at=now,
            )
            BlogPost.objects.create(
                title="Yurak sog'lig'ini saqlashning 10 ta usuli",
                excerpt="Yurak-qon tomir kasalliklari oldini olish uchun oddiy ammo samarali usullar.",
                content="<p>Yurak sog'lig'ini saqlash bo'yicha tavsiyalar.</p>",
                is_published=True,
                published_at=now,
            )

        self.stdout.write(self.style.SUCCESS("Mock data seeded."))

