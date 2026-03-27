'use client'

import { useState } from 'react'
import { Calendar, Gift } from 'lucide-react'
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
      name: t('pack1_name'),
      tagline: t('pack1_sub'),
      standard: t('pack1_price_std'),
      premium: t('pack1_price_prem'),
      features: [t('pack1_f1'), t('pack1_f2'), t('pack1_f3')],
      features_prem: [t('pack1_f1_prem'), t('pack1_f2_prem'), t('pack1_f3_prem')],
    },
    {
      name: t('pack2_name'),
      tagline: t('pack2_sub'),
      standard: t('pack2_price_std'),
      premium: null,
      features: [t('pack2_f1'), t('pack2_f2'), t('pack2_f3')],
    },
    {
      name: t('pack3_name'),
      tagline: t('pack3_sub'),
      standard: t('pack3_price_std'),
      premium: t('pack3_price_prem'),
      features: [t('pack3_f1'), t('pack3_f2'), t('pack3_f3')],
      features_prem: [t('pack3_f1_prem'), t('pack3_f2_prem'), t('pack3_f3_prem')],
    },
    {
      name: t('pack4_name'),
      tagline: t('pack4_sub'),
      standard: t('pack4_price_std'),
      premium: null,
      features: [t('pack4_f1'), t('pack4_f2'), t('pack4_f3'), t('pack4_f4')],
    },
    {
      name: t('pack5_name'),
      tagline: t('pack5_sub'),
      standard: t('pack5_price_std'),
      premium: t('pack5_price_prem'),
      features: [t('pack5_f1'), t('pack5_f2'), t('pack5_f3')],
      features_prem: [t('pack5_f1_prem'), t('pack5_f2_prem'), t('pack5_f3_prem')],
    },
  ]

  const premiumPacks = PACKS.filter((p) => p.premium !== null)
  const standardPacks = PACKS.filter((p) => p.premium === null)

  return (
    <section id="offres" className="relative py-24 px-4">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 30% at 50% 10%, rgba(238, 29, 82, 0.08) 0%, transparent 100%)',
        }}
      />

      <div className="max-w-[1100px] mx-auto text-center relative z-10">
        <SectionHeader
          badgeText={t('label')}
          titlePart1={t('h2_part1')}
          titleItalic={t('h2_part2')}
          subtitle={t('subtitle')}
          revealFn={revealHeader}
          className="mb-8"
        />

        {/* Benefits Badges - Elevated from footer to header area */}
        <div ref={revealHeader(2)} className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12">
          <div className="flex items-center gap-2 text-white/40 tracking-[0.2em] text-[10px] font-bold">
            <Calendar size={12} strokeWidth={2} className="text-accent" aria-hidden="true" />
            {t('trust_no_commitment')}
          </div>
          <div className="flex items-center gap-2 text-white/40 tracking-[0.2em] text-[10px] font-bold">
            <Gift size={12} strokeWidth={2} className="text-accent" aria-hidden="true" />
            {t('trust_first_video')}
          </div>
        </div>

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
                {premiumPacks.map((pack) => (
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
              
              {/* Deuxième ligne centrée pour les packs sans mode premium */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-2xl mx-auto">
                {standardPacks.map((pack) => (
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
      </div>
    </section>
  )
}
