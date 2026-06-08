import HeroOrderForm from "@/components/HeroOrderForm"

export default function HeroTextOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-between px-8 md:px-16">
      {/* Левая часть — текст */}
      <div className="flex flex-col justify-center max-w-lg">
        <p className="text-accent font-mono text-sm mb-4 tracking-widest">// междугороднее такси</p>
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-5"
          style={{
            fontFamily: "var(--font-montserrat)",
            color: "rgb(0, 0, 0)",
            WebkitTextStroke: "4px white",
            paintOrder: "stroke fill",
          }}
        >
          CAR<br />TRAVEL
        </h1>
        <p className="text-foreground/90 font-mono text-sm md:text-lg max-w-sm tracking-wide mb-8">
          Трансфер в аэропорт<br />и по городам России
        </p>
        <a
          href="#services"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-base w-fit transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_hsl(var(--primary)/0.6)]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Узнать больше
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>

      {/* Правая часть — форма */}
      <div className="block w-[300px] shrink-0">
        <div
          className="rounded-2xl p-4 border border-white/10"
          style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(16px)" }}
        >
          <p className="text-accent font-mono text-xs tracking-widest mb-3">// быстрый заказ</p>
          <HeroOrderForm />
        </div>
      </div>

      {/* Стрелка вниз */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-foreground/50 font-mono text-xs tracking-widest">прокрутите</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  )
}