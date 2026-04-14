// ============================================================
// SITE CONSTANTS — update these to change across the whole site
// ============================================================

export const SITE = {
  name: 'Code Orange Dev School',
  tagline: "Asia's Bitcoin Developer School",
  description:
    "Bitcoin lacks developers and node runners in Asia. Code Orange fixes this — training developers and bitcoiners into builders who strengthen Bitcoin's network through advanced self-custody, node running, and community leadership.",
  url: 'https://codeorange.dev',
  location: 'Canggu, Bali, Indonesia',
  email: 'codeorangedevs@gmail.com',
}

export const SOCIAL = {
  twitter: 'https://x.com/codeorangedevs',
  instagram: 'https://www.instagram.com/codeorangedevs/',
  github: 'https://github.com/code-orange-dev',
  discord: 'https://discord.gg/ZtvA79paWa',
  geyser: 'https://geyser.fund/project/codeorangedevschool',
  nostr: {
    npub: 'npub1gxqyeea3xspkd68mxlxsvvk3gdzdd555u504ynwpdj0ghg503mvq2gydt0',
    // decoded hex pubkey from the npub above
    hex: '4180c9932d1b06ba3de6f986316558414b28b5428f7d24894b2512a87d43b77b',
  },
}

export const STATS = [
  { value: '2+', label: 'Cohorts Run' },
  { value: '12+', label: 'Graduates' },
  { value: '8+', label: 'Weekly Programs' },
  { value: 'Bali', label: 'Based In' },
]

export const PROGRAMS = [
  {
    slug: 'rawbit',
    name: 'rawBit',
    subtitle: 'Study Cohort',
    tagline: 'For Developers',
    description:
      'A 10-week deep dive turning developers into Bitcoin builders. Self-study Transactions, Scripts, Taproot, and PSBTs through hands-on Discord sessions. Graduates contribute to Bitcoin open source software.',
    duration: '10 weeks',
    format: 'Online • Discord',
    schedule: 'Every Monday, 11:00 UTC',
    level: 'Developer',
    color: '#F7931A',
    topics: [
      'Bitcoin Transactions & Scripts',
      'Taproot & PSBTs',
      'Bitcoin Protocol Deep Dive',
      'Open Source Contributions',
      'Node Operation',
    ],
    cta: 'Apply to rawBit',
    icon: '₿',
  },
  {
    slug: 'sovereign-bitcoiner',
    name: 'Sovereign Bitcoiner',
    subtitle: 'Workshop',
    tagline: 'For Bitcoiners',
    description:
      'Deep technical training for bitcoiners who want real sovereignty. Cover full nodes, multisig security, self-custody, inheritance planning, and privacy tools like Ecash and Fedimint.',
    duration: 'Monthly',
    format: 'Online • Discord',
    schedule: 'Every 2nd Wednesday, 11:00 UTC',
    level: 'Intermediate',
    color: '#6C63FF',
    topics: [
      'Full Node Setup (Umbrel)',
      'Multisig (Nunchuk, Casa)',
      'Hardware Wallets (Coldcard, SeedSigner)',
      'Inheritance Planning',
      'Ecash & Fedimint Privacy',
    ],
    cta: 'Join Workshop',
    icon: '🛡️',
  },
  {
    slug: 'openclaw',
    name: 'OpenClaw',
    subtitle: 'Workshop',
    tagline: 'For Bitcoiners',
    description:
      'Hands-on open source Bitcoin workshop for bitcoiners. Learn to build and contribute to the Bitcoin ecosystem with guidance from experienced developers.',
    duration: 'Monthly',
    format: 'Online • Discord',
    schedule: 'Every 3rd Wednesday, 12:00 UTC',
    level: 'All levels',
    color: '#E74C3C',
    topics: [
      'Open Source Bitcoin Projects',
      'GitHub Workflow',
      'Code Review Basics',
      'Bitcoin Libraries',
      'Contributing to OSS',
    ],
    cta: 'Join Workshop',
    icon: '🦞',
  },
  {
    slug: 'vibe-coding',
    name: 'Vibe Coding on Nostr',
    subtitle: 'Workshop',
    tagline: 'No Code Required',
    description:
      'Build censorship-resistant apps on the p2p internet using AI tools. No coding experience needed — just a curiosity for freedom tech. Build on Nostr using Shakespeare.DIY.',
    duration: 'Monthly',
    format: 'In-Person • Bitcoin House Bali',
    schedule: 'Every 4th Tuesday, 5:00 PM WITA',
    level: 'Beginner',
    color: '#27AE60',
    topics: [
      'Nostr Protocol Basics',
      'AI-Assisted Development',
      'Building with Shakespeare.DIY',
      'Censorship-Resistant Apps',
      'Freedom Tech Stack',
    ],
    cta: 'Join Workshop',
    icon: '⚡',
  },
  {
    slug: 'bitcoin-basics',
    name: 'Bitcoin Basics',
    subtitle: 'Online Meetup',
    tagline: 'For Everyone',
    description:
      'A welcoming intro to Bitcoin technical fundamentals. Hosted by The Quiet Satoshi — perfect for curious newcomers ready to go deeper than just buying BTC.',
    duration: 'Monthly',
    format: 'Online • Discord',
    schedule: 'Every 1st Thursday, 11:00 UTC',
    level: 'Beginner',
    color: '#F39C12',
    topics: [
      'How Bitcoin Works',
      'Keys & Wallets',
      'Transactions & Mempool',
      'Node Basics',
      'Self-Custody 101',
    ],
    cta: 'Join Meetup',
    icon: '📖',
  },
  {
    slug: 'bitcoin-reading-club',
    name: 'Bitcoin Reading Club',
    subtitle: 'Online Meetup',
    tagline: 'For Thinkers',
    description:
      'Monthly deep-reads of the best Bitcoin books and papers. Currently working through The Bitcoin Standard. Hosted by Alex. Bring your dog-eared copy.',
    duration: 'Monthly',
    format: 'Online • Discord',
    schedule: 'Every 4th Wednesday, 12:00 UTC',
    level: 'All levels',
    color: '#8E44AD',
    topics: [
      'The Bitcoin Standard',
      'Mastering Bitcoin',
      'The Blocksize War',
      'Bitcoin White Paper',
      'Cypherpunk Classics',
    ],
    cta: 'Join Club',
    icon: '📚',
  },
  {
    slug: 'talk-a-bit',
    name: 'Talk-a-Bit',
    subtitle: 'Bitcoin Meetup',
    tagline: 'For the Community',
    description:
      'Monthly community meetup where bitcoiners from across Southeast Asia and beyond connect, share, and discuss. Hosted by einsamwolf28. In Bahasa & English.',
    duration: 'Monthly',
    format: 'Online • Discord',
    schedule: 'Every 15th, 19:00 WIB (UTC+7)',
    level: 'All levels',
    color: '#1ABC9C',
    topics: [
      'Community Updates',
      'Bitcoin News & Discussion',
      'SEA Bitcoin Scene',
      'Open Q&A',
      'Networking',
    ],
    cta: 'Join Meetup',
    icon: '🌏',
  },
]

export const NOSTR_RELAYS = [
  'wss://relay.damus.io',
  'wss://nos.lol',
  'wss://relay.nostr.band',
  'wss://nostr.wine',
  'wss://relay.snort.social',
]
