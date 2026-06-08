import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

const LOGO_URL = "https://cdn.poehali.dev/projects/c2bd1535-aa26-4a07-a3f6-51d547fc1da3/bucket/9c68532a-1e01-48df-9a75-8e68a1b85ebb.jpg"

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Тарифы", href: "#tariffs" },
  { label: "Цены", href: "#contact" },
  { label: "Контакты", href: "#footer-contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(0,0,0,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid hsl(var(--border))",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-3">
        {/* Лого */}
        <a href="#" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="CarTravel" className="h-12 w-12 object-contain rounded-full" />
          <div className="flex flex-col leading-tight">
            <span className="text-foreground font-bold text-base tracking-wide" style={{ fontFamily: "var(--font-montserrat)" }}>
              Car<span className="text-accent">Travel</span>
            </span>
            <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">Междугороднее такси</span>
          </div>
        </a>

        {/* Навигация десктоп */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/70 hover:text-accent font-mono text-sm transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Телефон + кнопка */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+78001234567" className="flex items-center gap-2 text-foreground/80 hover:text-accent font-mono text-sm transition-colors">
            <Icon name="Phone" size={14} className="text-accent" />
            +7 (800) 123-45-67
          </a>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] flex items-center gap-1.5"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Заказать <Icon name="ArrowUpRight" size={14} />
          </a>
        </div>

        {/* Бургер мобайл */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-foreground/80 hover:text-accent font-mono text-base py-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:+78001234567" className="flex items-center gap-2 text-accent font-mono text-base py-1">
            <Icon name="Phone" size={16} />
            +7 (800) 123-45-67
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-sm text-center mt-2"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Заказать трансфер
          </a>
        </div>
      )}
    </header>
  )
}