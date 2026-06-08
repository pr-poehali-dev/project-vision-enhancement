import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const LOGO_URL = "https://cdn.poehali.dev/projects/c2bd1535-aa26-4a07-a3f6-51d547fc1da3/bucket/9c68532a-1e01-48df-9a75-8e68a1b85ebb.jpg"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/0 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 text-transparent">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="CarTravel" width={56} height={56} className="h-14 w-14 object-contain rounded-full" />
          <span className="text-foreground font-bold text-lg tracking-wide" style={{ fontFamily: "var(--font-montserrat)" }}>
            Car<span className="text-accent">Travel</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button
              className="bg-primary text-primary-foreground rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              style={{ paddingLeft: "24px", paddingRight: "16px" }}
            >
              Заказать трансфер <Icon name="ArrowUpRight" size={16} className="ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}