import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent locale={locale} />;
}

function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations("hero");
  const d = useTranslations("discount");
  const r = useTranslations("rooms");
  const nav = useTranslations("nav");

  const featuredRooms = [
    {
      key: "standardDouble",
      price: 55,
      image: "/images/room-bedroom.png",
      guests: 2,
    },
    {
      key: "deluxeDouble",
      price: 75,
      image: "/images/room-hallway.png",
      guests: 2,
    },
    {
      key: "deluxeFamily",
      price: 110,
      image: "/images/room-living.png",
      guests: 4,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/room-living.png"
          alt="Art Hotel Vlora Reception"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-gold uppercase tracking-[0.3em] text-sm sm:text-base mb-4 font-medium">
            {t("subtitle")}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            {t("heading")}
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/35569XXXXXXX?text=${encodeURIComponent("Hi! I'd like to book a room at Art Hotel Vlora")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-dark transition-colors inline-flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t("bookDirect")}
            </a>
            <Link
              href={`/${locale}/rooms`}
              className="border border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:border-gold hover:text-gold transition-colors"
            >
              {t("exploreRooms")}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="bg-gold/10 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="inline-block bg-gold text-dark text-xs font-bold px-3 py-1 rounded-full mb-3">
                {d("badge")}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{d("title")}</h2>
              <p className="text-white/60 max-w-lg">{d("description")}</p>
            </div>
            <a
              href={`https://wa.me/35569XXXXXXX?text=${encodeURIComponent("Hi! I'd like to book a room at Art Hotel Vlora")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20BD5A] transition-colors inline-flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {d("cta")}
            </a>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{r("title")}</h2>
            <p className="text-white/60 max-w-2xl mx-auto">{r("subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div
                key={room.key}
                className="group bg-dark-lighter rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={r(`types.${room.key}.name`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-dark text-sm font-bold px-3 py-1 rounded-full">
                    €{room.price} {r("perNight")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{r(`types.${room.key}.name`)}</h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">
                    {r(`types.${room.key}.description`)}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-sm">
                      {room.guests} {r("guests")}
                    </span>
                    <a
                      href={`https://wa.me/35569XXXXXXX?text=${encodeURIComponent(`Hi! I'd like to book the ${r(`types.${room.key}.name`)} room`)}`}
                      target="_blank"
                      className="text-gold text-sm font-bold hover:underline"
                    >
                      {r("bookWhatsapp")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={`/${locale}/rooms`}
              className="border border-gold text-gold px-8 py-3 rounded-full font-medium hover:bg-gold hover:text-dark transition-colors inline-block"
            >
              {nav("rooms")} →
            </Link>
          </div>
        </div>
      </section>

      {/* Location Teaser */}
      <section className="py-16 sm:py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-medium">
                Albanian Riviera
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Vlorë, Albania
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Nestled on the stunning Albanian Riviera, Art Hotel Vlora offers breathtaking views of the Adriatic Sea.
                Steps from the beach and the iconic Lungomare promenade, our location is perfect for exploring
                the natural beauty and rich history of Vlorë.
              </p>
              <div className="space-y-3 text-white/50 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-gold">📍</span> 2 min walk to the beach
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold">🌊</span> 5 min walk to Lungomare
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold">🏛️</span> 10 min walk to Old Town
                </div>
              </div>
              <Link
                href={`/${locale}/location`}
                className="inline-block mt-8 text-gold font-bold hover:underline"
              >
                {nav("location")} →
              </Link>
            </div>
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                alt="Vlorë Beach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
