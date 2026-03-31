export interface ClientSlideData {
  name: string
  tags: string[]
  services: string[]
  metrics: { label: string; value: string }[]
  quote: string
  videoSrc?: string
}

export const CLIENT_SLIDES: ClientSlideData[] = [
  {
    name: 'Kylen',
    tags: ['Coach Business', 'Reels & Shorts'],
    services: [
      'Montage Reels',
      'Direction artistique',
      'Programmation automatique',
    ],
    metrics: [
      { label: 'Vues', value: '1,7M' },
      { label: 'Abonnés gagnés', value: '+3 744' },
      { label: 'Durée', value: '3 mois' },
      { label: 'Fréquence', value: '4×/sem' },
    ],
    quote: '[Témoignage Kylen — à remplir]',
    videoSrc: '/videos/KAA_France.mp4',
  },
  {
    name: 'Client 2',
    tags: ['Formation en ligne', 'YouTube & Reels'],
    services: [
      'Montage YouTube',
      'Shorts hebdomadaires',
      'Miniatures A/B testing',
    ],
    metrics: [
      { label: 'Vues', value: 'XXX' },
      { label: 'Abonnés gagnés', value: '+XXX' },
      { label: 'Durée', value: 'X mois' },
      { label: 'Vidéos livrées', value: 'XX' },
    ],
    quote: '[Témoignage client 2 — à remplir]',
    videoSrc: '/videos/XEN_Mixe.mp4',
  },
  {
    name: 'Quentin',
    tags: ['Consulting', 'Reels'],
    services: [
      'Montage Reels',
      'Brand Board complet',
      'Système de publication',
    ],
    metrics: [
      { label: 'Clients signés', value: '6' },
      { label: 'Abonnés au départ', value: '300' },
      { label: 'Durée', value: '2 mois' },
      { label: 'Reels livrés', value: '16' },
    ],
    quote: '[Témoignage Quentin — à remplir]',
    videoSrc: '/videos/Xen_Prix.mp4',
  },
]
