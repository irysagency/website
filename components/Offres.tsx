'use client'

import { useState } from 'react'
import { Smartphone, Megaphone, Play, Mic, Crosshair, Calendar, Gift } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTranslations } from 'next-intl'
import { OffreCard } from './offres/OffreCard'
import { PackCard } from './offres/PackCard'
import type { Pack } from './offres/PackCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

type Tab = 'abonnements' | 'packs'

const ICON_PROPS = { size: 20, strokeWidth: 1.5 } as const

export default function Offres() {
  const t = useTranslations('offres')
  const [activeTab, setActiveTab] = useState<Tab>('abonnements')
  const revealHeader = useScrollReveal({ staggerDelay: 80 })

  const ABONNEMENTS = [
    {
      name: t('o1_name'),
      tagline: t('o1_tag'),
      price: t('o1_price'),
      recommended: false,
      features: [t('o1_f1'), t('o1_f2'), t('o1_f3'), t('o1_f4'), t('o1_f5'), t('o1_f6'), t('o1_f7')],
    },
    {
      name: t('o2_name'),
      tagline: t('o2_tag'),
      price: t('o2_price'),
      recommended: true,
      features: [t('o2_f1'), t('o2_f2'), t('o2_f3'), t('o2_f4'), t('o2_f5'), t('o2_f6')],
    },
    {
      name: t('o3_name'),
      tagline: t('o3_tag'),
      price: t('o3_price'),
      recommended: false,
      features: [t('o3_f1'), t('o3_f2'), t('o3_f3'), t('o3_f4'), t('o3_f5')],
    },
  ]

  const PACKS: Pack[] = [
    {
      icon: <Smartphone {...ICON_PROPS} />,
      name: t('pack1_name'),
      tagline: t('pack1_sub'),
      standard: t('pack1_price_std'),
      premium: t('pack1_price_prem'),
      features: [t('pack1_f1'), t('pack1_f2'), t('pack1_f3')],
    },
    {
      icon: <Megaphone {...ICON_PROPS} />,
      name: t('pack2_name'),
      tagline: t('pack2_sub'),
      standard: t('pack2_price_std'),
      premium: null,
      features: [t('pack2_f1'), t('pack2_f2'), t('pack2_f3')],
    },
    {
      icon: <Play {...ICON_PROPS} />,
      name: t('pack3_name'),
      tagline: t('pack3_sub'),
      standard: t('pack3_price_std'),
      premium: t('pack3_price_prem'),
      features: [t('pack3_f1'), t('pack3_f2'), t('pack3_f3')],
    },
    {
      icon: <Mic {...ICON_PROPS} />,
      name: t('pack4_name'),
      tagline: t('pack4_sub'),
      standard: t('pack4_price_std'),
      premium: null,
      features: [t('pack4_f1'), t('pack4_f2'), t('pack4_f3'), t('pack4_f4')],
    },
    {
      icon: <Crosshair {...ICON_PROPS} />,
      name: t('pack5_name'),
      tagline: t('pack5_sub'),
      standard: t('pack5_price_std'),
      premium: t('pack5_price_prem'),
      features: [t('pack5_f1'), t('pack5_f2'), t('pack5_f3')],
    },
  ]

  return (
    <section id="offres" className="relative py-24 px-4">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 30% at 50% 10%, rgba(232, 23, 93, 0.08) 0%, transparent 100%)',
        }}
      />

      <div className="max-w-[1100px] mx-auto text-center relative z-10">
        {/* Header */}
        <SectionHeader
          badgeText={t('label')}
          titlePart1={t('h2_part1')}
          titleItalic={t('h2_part2')}
          subtitle={t('subtitle')}
          revealFn={revealHeader}
          className="mb-8"
        />

        {/* Tab switcher */}
        <div ref={revealHeader(3)} className="flex items-center justify-center mb-12">
          <div
            className="irys-conic-border rounded-full inline-flex overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            {(['abonnements', 'packs'] as Tab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2.5 text-[13px] font-semibold rounded-full transition-all duration-200"
                style={{
                  background: activeTab === tab ? 'var(--color-accent)' : 'transparent',
                  color: '#fff',
                }}
              >
                {tab === 'abonnements' ? t('tab_abo') : t('tab_packs')}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === 'abonnements' && (
            <motion.div
              key="abonnements"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5">
                {ABONNEMENTS.map((offre) => (
                  <OffreCard
                    key={offre.name}
                    offre={offre}
                    labelHtMonth={t('ht_month')}
                    labelRecommended={t('recommended')}
                    labelCta={t('cta_card')}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'packs' && (
            <motion.div
              key="packs"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {PACKS.map((pack) => (
                  <PackCard
                    key={pack.name}
                    pack={pack}
                    premiumMention={t('premium_mention')}
                    labelStandard={t('standard')}
                    labelPremium={t('premium')}
                    labelHt={t('ht')}
                    labelOrder={t('cta_commander')}
                  />
                ))}
              </div>
              <div
                className="mt-5 rounded-xl px-5 py-4"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <p className="text-[12px] text-subdued">
                  {t('packs_note')}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-12">
          <p className="text-[13px] mb-4 text-subdued">
            {t('cta_help')}
          </p>
          <a href="#calendly" className="irys-btn-accent-filled px-10 py-4 text-sm">
            {t('cta_bottom')}
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <span className="flex items-center gap-2 text-[13px] text-subdued">
            <Calendar size={14} strokeWidth={1.5} />
            {t('trust_no_commitment')}
          </span>
          <span className="text-faint">·</span>
          <span className="flex items-center gap-2 text-[13px] text-subdued">
            <Gift size={14} strokeWidth={1.5} />
            {t('trust_first_video')}
          </span>
        </div>
      </div>
    </section>
  )
}
