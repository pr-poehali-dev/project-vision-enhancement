import { useState } from "react"
import Icon from "@/components/ui/icon"

const carClasses = [
  { id: "urgent", label: "Срочный", icon: "⚡" },
  { id: "standard", label: "Стандарт", icon: "🚗" },
  { id: "comfort", label: "Комфорт", icon: "🚙" },
  { id: "minivan", label: "Минивэн", icon: "🚐" },
  { id: "business", label: "Бизнес", icon: "🖤" },
]

export default function HeroOrderForm() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [carClass, setCarClass] = useState("standard")
  const [sent, setSent] = useState(false)

  const today = new Date().toISOString().split("T")[0]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await new Promise((r) => setTimeout(r, 600))
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
          <Icon name="CheckCircle" size={28} className="text-accent" />
        </div>
        <p className="text-foreground font-bold text-base" style={{ fontFamily: "var(--font-montserrat)" }}>Заявка принята!</p>
        <p className="text-muted-foreground font-mono text-xs">Перезвоним в течение 5 минут</p>
        <button onClick={() => setSent(false)} className="text-accent font-mono text-xs underline underline-offset-4 mt-1">
          Новая заявка
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
      {/* Откуда */}
      <div className="relative">
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Откуда?"
          required
          className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors pr-10"
        />
        <Icon name="MapPin" size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-accent" />
      </div>

      {/* Куда */}
      <div className="relative">
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Куда?"
          required
          className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {/* Имя + телефон */}
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          required
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-3 py-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Номер телефона"
          required
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-3 py-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {/* Дата + время */}
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-0.5">
          <label className="text-muted-foreground font-mono text-[10px] px-1">Дата поездки</label>
          <input
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            required
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-3 py-2.5 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label className="text-muted-foreground font-mono text-[10px] px-1">Во сколько?</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-3 py-2.5 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Класс авто */}
      <div className="grid grid-cols-3 gap-2">
        {carClasses.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCarClass(c.id)}
            className={`flex flex-col items-center gap-1 py-2.5 px-2 rounded-xl border text-xs font-mono transition-all duration-200 ${
              carClass === c.id
                ? "border-accent bg-accent/10 text-accent"
                : "border-[#2a2a2a] bg-[#1a1a1a] text-muted-foreground hover:border-accent/50"
            }`}
          >
            <span className="text-lg leading-none">{c.icon}</span>
            <span>{c.label}</span>
          </button>
        ))}
      </div>

      {/* Кнопка */}
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground rounded-xl py-3.5 font-bold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] flex items-center justify-center gap-2 mt-1"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        Отправить
        <Icon name="ArrowRight" size={16} />
      </button>
    </form>
  )
}
