'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
}

export default function MagneticButton({ children, className = '', href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    // Calcule la distance du centre du bouton
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    // Multiplicateur pour la force magnétique (0.2 = doux, 0.5 = très fort)
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  const Content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-flex z-10 w-fit ${className}`}
    >
      {children}
    </motion.div>
  )

  if (href) {
    // Si c'est un lien, on l'enrobe proprement sans perturber la physique
    return <a href={href} className="inline-block relative z-10">{Content}</a>
  }

  return Content
}
