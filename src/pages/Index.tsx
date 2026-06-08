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
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-screen">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        {/* Услуги */}
        <section
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