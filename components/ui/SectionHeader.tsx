import type { ReactNode } from 'react'

type RevealFn = (index: number) => (el: HTMLElement | null) => void

interface SectionHeaderProps {
  /** Texte du badge pre-titre */
  badgeText: string
  /** Variante du badge : accent (rose) ou default (gris) */
  badgeVariant?: 'accent' | 'default'
  /** Icône optionnelle affichée avant le texte du badge */
  badgeIcon?: ReactNode
  /** Première partie du H2 (Inter bold) */
  titlePart1: string
  /** Partie italique du H2 (Ivy Presto, accent) — optionnelle */
  titleItalic?: string
  /** Sous-titre descriptif */
  subtitle?: string
  /** Alignement du bloc — 'center' par défaut */
  align?: 'center' | 'left'
  /** Fonction de scroll reveal (useScrollReveal) — indices 0=badge, 1=h2, 2=subtitle */
  revealFn?: RevealFn
  className?: string
}

export function SectionHeader({
  badgeText,
  badgeVariant = 'accent',
  badgeIcon,
  titlePart1,
  titleItalic,
  subtitle,
  align = 'center',
  revealFn,
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'
  const badgeClass =
    badgeVariant === 'accent' ? 'irys-section-badge-accent' : 'irys-section-badge'

  return (
    <div className={`${alignClass} ${className}`}>
      {/* Badge */}
      <div
        ref={revealFn?.(0)}
        className={`${badgeClass} mb-6 w-fit text-[13px] ${align === 'center' ? 'mx-auto' : ''}`}
      >
        {badgeIcon && (
          <span className="flex-shrink-0 flex items-center">{badgeIcon}</span>
        )}
        {badgeText}
      </div>

      {/* H2 */}
      <h2
        ref={revealFn?.(1)}
        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-text"
      >
        {titlePart1}
        {titleItalic && (
          <>
            {' '}
            <span className="font-display-italic text-accent">{titleItalic}</span>
          </>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          ref={revealFn?.(2)}
          className="text-[14px] leading-relaxed text-subdued"
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
