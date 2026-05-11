import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function NotFound() {
  const t = useTranslations('notFound')
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-heading text-[120px] leading-none font-bold text-accent">
          404
        </p>
        <h1 className="font-heading text-[28px] font-bold mt-4 text-text">
          {t('title')}
        </h1>
        <p className="text-[15px] text-subdued mt-3">
          {t('description')}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-accent text-white font-bold text-[14px] hover:opacity-90 transition-opacity"
        >
          {t('cta')}
        </Link>
      </div>
    </main>
  )
}
