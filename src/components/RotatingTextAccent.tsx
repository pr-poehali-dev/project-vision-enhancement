const LOGO_URL = "https://cdn.poehali.dev/projects/c2bd1535-aa26-4a07-a3f6-51d547fc1da3/bucket/9c68532a-1e01-48df-9a75-8e68a1b85ebb.jpg"

export default function RotatingTextAccent() {
  const text = "-- Заказать трансфер --- Аэропорт --- Межгород --- "

  return (
    <div className="absolute bottom-20 right-8 w-24 h-24 md:w-32 md:h-32">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={LOGO_URL} alt="CarTravel" className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full" />
        </div>

        <div className="absolute inset-0 animate-spin-slow">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
            </defs>
            <text className="text-xs fill-white font-medium">
              <textPath href="#circle" startOffset="0%">
                {text.repeat(2)}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}