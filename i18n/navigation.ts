import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

// Wrappers next-intl pour <Link>, useRouter, usePathname, redirect, getPathname
// Importe-les depuis '@/i18n/navigation' au lieu de 'next/link' ou 'next/navigation'
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
