'use client'

import { useEffect, useRef } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  staggerDelay?: number
  direction?: 'up' | 'left'
}

/**
 * Attach ref(i) to each element you want revealed on scroll.
 * The element starts at opacity:0 + translateY(24px) and
 * transitions to opacity:1 + translateY(0) when it enters the viewport.
 *
 * Use staggerDelay to offset each item by N ms * index.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {},
) {
  const { threshold = 0.12, rootMargin = '0px 0px -48px 0px', staggerDelay = 0, direction = 'up' } = options
  const fromTransform = direction === 'left' ? 'translateX(-20px)' : 'translateY(24px)'
  const refs = useRef<(T | null)[]>([])

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      refs.current.forEach((el) => {
        if (!el) return
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.style.willChange = 'transform, opacity'
          el.style.opacity = '1'
          el.style.transform = 'none'
          const delay = Number(el.dataset.revealDelay ?? 0)
          setTimeout(() => {
            el.style.willChange = 'auto'
          }, delay + 600)
          observer.unobserve(entry.target)
        })
      },
      { threshold, rootMargin },
    )

    refs.current.forEach((el, i) => {
      if (!el) return
      const delay = staggerDelay * i
      el.dataset.revealDelay = String(delay)
      el.style.opacity = '0'
      el.style.transform = fromTransform
      el.style.transition = `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [threshold, rootMargin, staggerDelay, fromTransform])

  const ref = (i: number) => (el: T | null) => {
    refs.current[i] = el
  }

  return ref
}
