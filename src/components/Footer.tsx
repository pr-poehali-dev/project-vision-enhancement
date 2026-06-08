import Icon from "@/components/ui/icon"

export default function Footer() {
  return (
    <footer id="footer-contact" className="w-full bg-card border-t border-border mt-6">
      <div className="max-w-[1200px] mx-auto px-6 py-16">

        {/* Верхний блок */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Бренд */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-foreground font-bold text-xl" style={{ fontFamily: "var(--font-montserrat)" }}>
                Car<span className="text-accent">Travel</span>
              </h3>
              <p className="text-muted-foreground font-mono text-xs tracking-widest mt-1">МЕЖДУГОРОДНЕЕ ТАКСИ</p>
            </div>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed">
              Комфортные поездки в аэропорт и по всем городам России. Работаем 24/7 без выходных.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://t.me/cartravel" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors">
                <Icon name="Send" size={15} />
              </a>
              <a href="https://wa.me/78001234567" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors">
                <Icon name="MessageCircle" size={15} />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div className="flex flex-col gap-3">
            <h4 className="text-foreground font-bold font-mono text-sm mb-1">Навигация</h4>
            {[
              { label: "Услуги", href: "#services" },
              { label: "Тарифы", href: "#tariffs" },
              { label: "Заказать трансфер", href: "#contact" },
              { label: "Контакты", href: "#footer-contact" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-accent font-mono text-sm transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Контакты */}
          <div className="flex flex-col gap-4">
            <h4 className="text-foreground font-bold font-mono text-sm mb-1">Контакты</h4>
            <a href="tel:+78001234567" className="flex items-center gap-3 text-muted-foreground hover:text-accent font-mono text-sm transition-colors">
              <Icon name="Phone" size={15} className="text-accent shrink-0" />
              +7 (800) 123-45-67
            </a>
            <a href="https://wa.me/78001234567" className="flex items-center gap-3 text-muted-foreground hover:text-accent font-mono text-sm transition-colors">
              <Icon name="MessageCircle" size={15} className="text-accent shrink-0" />
              WhatsApp
            </a>
            <a href="https://t.me/cartravel" className="flex items-center gap-3 text-muted-foreground hover:text-accent font-mono text-sm transition-colors">
              <Icon name="Send" size={15} className="text-accent shrink-0" />
              Telegram
            </a>
            <div className="flex items-start gap-3 text-muted-foreground font-mono text-sm">
              <Icon name="Clock" size={15} className="text-accent shrink-0 mt-0.5" />
              Работаем круглосуточно, 24/7
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-10 mb-10">
          <div>
            <h2 className="text-foreground text-2xl md:text-3xl font-bold text-center md:text-left" style={{ fontFamily: "var(--font-montserrat)" }}>
              Готовы к поездке?
            </h2>
            <p className="text-muted-foreground font-mono text-sm mt-1 text-center md:text-left">Оформите заявку — перезвоним за 5 минут</p>
          </div>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-base whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 flex items-center gap-2"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Заказать трансфер
            <Icon name="ArrowUpRight" size={18} />
          </a>
        </div>

        {/* Копирайт */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 border-t border-border pt-6">
          <p className="text-muted-foreground text-sm font-mono">© 2025 CarTravel. Все права защищены.</p>
          <p className="text-muted-foreground text-sm font-mono">poehali.dev</p>
        </div>
      </div>
    </footer>
  )
}
