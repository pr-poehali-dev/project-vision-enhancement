import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import OrderForm from "@/components/OrderForm"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Plane",
    title: "Трансфер в аэропорт",
    desc: "Подача автомобиля точно в срок. Встреча с табличкой, помощь с багажом, без ожиданий.",
  },
  {
    icon: "MapPin",
    title: "Межгородские поездки",
    desc: "Комфортные поездки между городами России. Любое расстояние, любое время суток.",
  },
  {
    icon: "Car",
    title: "Корпоративный трансфер",
    desc: "Деловые поездки для сотрудников и партнёров. Договор, акты, закрывающие документы.",
  },
]

const advantages = [
  { icon: "Clock", label: "Пунктуальность", value: "100%" },
  { icon: "Shield", label: "Безопасность", value: "Профи" },
  { icon: "MapPin", label: "Города России", value: "Все" },
  { icon: "Star", label: "Рейтинг клиентов", value: "5.0" },
]

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      {/* Hero — на всю ширину экрана */}
      <main className="w-full relative h-screen">
        <Header />
        <SplineScene />
        <HeroTextOverlay />
        <RotatingTextAccent />
      </main>

      <div className="max-w-[1200px] mx-auto">

        {/* Услуги */}
        <section
          id="services"
          className="relative rounded-4xl py-7 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-16"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">+</div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">+</div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>

          <div className="px-6 md:px-16">
            <p className="text-accent font-mono text-sm mb-2 text-center">// наши услуги</p>
            <h2
              className="text-foreground text-3xl md:text-4xl font-bold text-center mb-10"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Куда вам нужно?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-3 hover:border-accent transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon name={s.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="text-foreground font-semibold text-lg" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-mono">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Преимущества */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {advantages.map((a) => (
                <div key={a.label} className="flex flex-col items-center gap-2 p-4 bg-background border border-border rounded-2xl">
                  <Icon name={a.icon} size={20} className="text-accent" />
                  <span className="text-foreground text-2xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {a.value}
                  </span>
                  <span className="text-muted-foreground text-xs font-mono text-center">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Тарифы */}
        <section
          id="tariffs"
          className="relative rounded-4xl py-10 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border mt-6"
        >
          <div className="px-6 md:px-16">
            <p className="text-accent font-mono text-sm mb-2 text-center">// тарифы</p>
            <h2
              className="text-foreground text-3xl md:text-4xl font-bold text-center mb-2"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Выберите класс автомобиля
            </h2>
            <p className="text-muted-foreground font-mono text-sm text-center mb-10">
              Все автомобили — ухоженные, с кондиционером и чистым салоном
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Эконом",
                  car: "Hyundai Solaris / KIA Rio",
                  price: "от 15 ₽/км",
                  features: ["До 3 пассажиров", "1 большой багаж", "Кондиционер", "Подача за 30 мин"],
                  accent: false,
                },
                {
                  name: "Комфорт",
                  car: "Toyota Camry / Skoda Octavia",
                  price: "от 22 ₽/км",
                  features: ["До 4 пассажиров", "2 больших багажа", "Кожаный салон", "Вода в подарок"],
                  accent: true,
                },
                {
                  name: "Бизнес",
                  car: "Mercedes E-class / BMW 5",
                  price: "от 35 ₽/км",
                  features: ["До 3 пассажиров", "3 места для багажа", "Премиум салон", "Встреча с табличкой"],
                  accent: false,
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className={`relative rounded-2xl p-6 flex flex-col gap-4 border transition-all duration-300 ${
                    t.accent
                      ? "border-accent bg-accent/5 shadow-[0_0_30px_hsl(var(--accent)/0.15)]"
                      : "border-border bg-background hover:border-accent/50"
                  }`}
                >
                  {t.accent && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary-foreground font-mono text-xs px-4 py-1 rounded-full font-bold">
                      Популярный
                    </span>
                  )}
                  <div>
                    <h3 className="text-foreground font-bold text-xl mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                      {t.name}
                    </h3>
                    <p className="text-muted-foreground font-mono text-xs">{t.car}</p>
                  </div>
                  <div className="text-accent font-bold text-2xl" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {t.price}
                  </div>
                  <ul className="flex flex-col gap-2">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-foreground/80 font-mono text-sm">
                        <Icon name="Check" size={14} className="text-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-auto py-3 rounded-xl font-bold text-sm text-center transition-all duration-300 hover:scale-[1.02] ${
                      t.accent
                        ? "bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                        : "bg-background border border-border hover:border-accent text-foreground"
                    }`}
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Выбрать
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Форма заказа */}
        <section
          id="contact"
          className="relative rounded-4xl py-10 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border mt-6 mb-6"
        >
          <div className="absolute top-8 left-8 text-foreground opacity-30 text-5xl font-extralight font-sans leading-[0rem]">+</div>
          <div className="absolute top-8 right-8 text-foreground opacity-30 text-5xl font-sans leading-[0] font-extralight">+</div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-30 text-5xl font-sans font-extralight">+</div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-30 text-5xl font-sans font-extralight">+</div>

          <div className="px-6 md:px-16">
            <p className="text-accent font-mono text-sm mb-2 text-center">// оформить поездку</p>
            <h2
              className="text-foreground text-3xl md:text-4xl font-bold text-center mb-2"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Заказать трансфер
            </h2>
            <p className="text-muted-foreground font-mono text-sm text-center mb-8">
              Заполните форму — мы перезвоним и подтвердим поездку
            </p>
            <OrderForm />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index