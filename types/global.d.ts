export {}

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement | null
        prefill?: object
        utm?: object
      }) => void
    }
  }
}
