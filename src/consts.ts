export const SITE = {
  title: 'Boom',
  description: 'Boom: Fast and easy Bitcoin payments',
  defaultLanguage: 'en-us'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'Boom logo,'
  },
  twitter: 'boom_wallet'
}

export const KNOWN_LANGUAGES = {
  English: 'en',
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/boomcrypto/boomwallet/tree/main`

export const COMMUNITY_INVITE_URL = `https://discord.gg/CwguEnbJAF`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX'
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  en: {
    'Boom Wallet': [
      { text: 'Introduction', link: 'en/wallet/introduction' },
      { text: 'Getting Started', link: 'en/wallet/getting-started' },
      { text: 'Payment Preferences', link: 'en/wallet/payment-prefs' },
      { text: 'Stacking', link: 'en/wallet/stacking' },
      { text: 'Chat', link: 'en/wallet/chat' }
    ],
    'Smart Shops': [
      { text: 'Introduction', link: 'en/shops/introduction' },
      { text: 'Getting Started', link: 'en/shops/getting-started' },
      { text: 'Managing Products', link: 'en/shops/managing-products' }
    ],
    'Newsletter': [
      { text: 'BoomTimes 001', link: 'en/newsletter/boom-times-001' }
    ],
  }
}
