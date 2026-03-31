export {}

declare global {
  interface Window {
    Cal: ((...args: unknown[]) => void) & {
      loaded?: boolean
      ns: Record<string, (...args: unknown[]) => void>
      q: unknown[]
    }
  }
}
