const BG_URL = "https://cdn.poehali.dev/projects/096cd460-2417-4a92-8fdd-73bad949bb52/bucket/0aaa07d5-06dc-4116-a5df-508e1f47d151.jpg"

export default function SplineScene() {
  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        backgroundImage: `url(${BG_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.1) 100%)",
        }}
      />
    </div>
  )
}