import { ReactNode } from "react"

interface SectionProps {
  title?: string
  subtitle?: string
  children: ReactNode
}

export function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      {title && (
        <div className="mb-16">
          <h2 className="text-4xl font-bold">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-xl text-zinc-400 max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}
    </section>
  )
}
