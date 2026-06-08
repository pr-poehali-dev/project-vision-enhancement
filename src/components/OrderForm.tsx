import { useState } from "react"
import Icon from "@/components/ui/icon"

type FormState = "idle" | "loading" | "success" | "error"

export default function OrderForm() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<FormState>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    await new Promise((r) => setTimeout(r, 800))
    setStatus("success")
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
          <Icon name="CheckCircle" size={32} className="text-accent" />
        </div>
        <h3 className="text-foreground text-xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
          Заявка принята!
        </h3>
        <p className="text-muted-foreground font-mono text-sm max-w-xs">
          Мы свяжемся с вами в ближайшее время для подтверждения поездки.
        </p>
        <button
          onClick={() => { setStatus("idle"); setFrom(""); setTo(""); setDate(""); setTime(""); setPhone(""); setName("") }}
          className="text-accent font-mono text-sm underline underline-offset-4 mt-2"
        >
          Оформить ещё одну заявку
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-accent font-mono text-xs">Откуда</label>
          <div className="relative">
            <Icon name="MapPin" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Город или адрес отправления"
              required
              className="w-full bg-background border border-border rounded-xl pl-9 pr-4 py-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-accent font-mono text-xs">Куда</label>
          <div className="relative">
            <Icon name="Navigation" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Город, аэропорт или адрес"
              required
              className="w-full bg-background border border-border rounded-xl pl-9 pr-4 py-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-accent font-mono text-xs">Дата поездки</label>
          <div className="relative">
            <Icon name="Calendar" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full bg-background border border-border rounded-xl pl-9 pr-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-accent font-mono text-xs">Время подачи</label>
          <div className="relative">
            <Icon name="Clock" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full bg-background border border-border rounded-xl pl-9 pr-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-accent font-mono text-xs">Ваше имя</label>
          <div className="relative">
            <Icon name="User" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Как к вам обращаться?"
              required
              className="w-full bg-background border border-border rounded-xl pl-9 pr-4 py-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-accent font-mono text-xs">Телефон</label>
          <div className="relative">
            <Icon name="Phone" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (___) ___-__-__"
              required
              className="w-full bg-background border border-border rounded-xl pl-9 pr-4 py-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary text-primary-foreground rounded-xl py-4 font-bold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_hsl(var(--primary)/0.5)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {status === "loading" ? (
          <>
            <Icon name="Loader2" size={18} className="animate-spin" />
            Отправляем...
          </>
        ) : (
          <>
            Заказать трансфер
            <Icon name="ArrowRight" size={18} />
          </>
        )}
      </button>
    </form>
  )
}
