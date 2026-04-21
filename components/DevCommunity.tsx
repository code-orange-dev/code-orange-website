import Link from 'next/link'
import { ArrowRight, Github } from 'lucide-react'

const ACTIVE_DEVS = [
  {
    name: 'Chaitika',
    github: 'chaitika',
    flag: '🇮🇳',
    what: 'Silent Payments (BIP352)',
    detail: 'silent-pay-wallet, silent-pay-indexer at Bitshala Incubator. Also leads Lightning Network cohorts in India.',
    status: 'merged',
  },
  {
    name: 'Vaan',
    github: 'va-an',
    flag: '🇺🇦',
    what: 'rust-bitcoin & bdk-cli',
    detail: 'Active contributor to the Rust wallet infrastructure used by dozens of production Bitcoin apps.',
    status: 'merged',
  },
  {
    name: 'Razor',
    github: 'RazorBest',
    flag: '🇷🇴',
    what: 'peer-observer',
    detail: 'PRs #390 & #393 merged — 0xB10C\'s Bitcoin P2P network security monitoring tool. BOSS Challenge participant.',
    status: 'merged',
  },
  {
    name: 'Arowolo',
    github: 'Arowolokehinde',
    flag: '🇳🇬',
    what: 'Async Payjoin (BIP77)',
    detail: 'First PR to rust-payjoin approved — one of Bitcoin\'s most important privacy protocol upgrades.',
    status: 'merged',
  },
  {
    name: 'Psychemist',
    github: 'psychemist',
    flag: '🇳🇬',
    what: 'BDK · LDK · BIP375',
    detail: 'BDK Android WIF sweep tool, BIP375 Go implementation, rust-ldk — across wallet, protocol, and Lightning layers.',
    status: 'merged',
  },
  {
    name: 'Diegodev',
    github: '0xlaga',
    flag: '🇧🇷',
    what: 'gossip-observer · BINST',
    detail: 'bitcoin-visuals org, BINST protocol (Taproot + PSBT + ZK) — BTC++ hackathon finalist.',
    status: 'merged',
  },
  {
    name: 'Peter',
    github: 'pzafonte',
    flag: '🇸🇰',
    what: 'Bitcoin Core (C++)',
    detail: 'Contributing to Bitcoin Core and rust-bitcoin. Kernel-Node work under review — the deepest layer of the stack.',
    status: 'merged',
  },
]

const EMERGING_DEVS = [
  { name: 'Captain Levi', github: 'SIDHARTH20K4', what: 'BDK contributions', flag: '🇮🇳' },
  { name: 'Mwihoti',      github: 'mwihoti',       what: 'rust-bitcoin',      flag: '🇰🇪' },
  { name: 'Yongki',       github: 'ywiyogo',        what: 'Bitcoin Core (C++)', flag: '🇮🇩' },
  { name: 'Ilie',         github: 'Ilie27',          what: 'BitAxe + Stratum V2', flag: '🇷🇴' },
  { name: 'Elijahhh',     github: 'ElijahMwambazi',  what: 'Lightning (Rust) · BitDevs Zambia', flag: '🇿🇲' },
  { name: 'Muhammad',     github: 'muhahahmad68',     what: 'Floresta / BDK',   flag: '🇵🇰' },
]

export default function DevCommunity() {
  return (
    <div>
      {/* Active contributors */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <h3 className="text-white text-xs font-bold uppercase tracking-widest">Active — PRs merged or approved</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ACTIVE_DEVS.map((dev) => (
            <a
              key={dev.github}
              href={`https://github.com/${dev.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 rounded-xl bg-[#0e0e0e] border border-[#1a1a1a] hover:border-orange-DEFAULT/30 hover:bg-[#111] transition-all group"
            >
              <div className="text-xl shrink-0 mt-0.5">{dev.flag}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-white text-sm font-semibold group-hover:text-orange-DEFAULT transition-colors">{dev.name}</p>
                  <span className="text-text-dim font-mono text-xs">@{dev.github}</span>
                </div>
                <p className="text-orange-DEFAULT text-xs font-medium mb-1">{dev.what}</p>
                <p className="text-text-muted text-xs leading-relaxed line-clamp-2">{dev.detail}</p>
              </div>
              <Github className="w-3.5 h-3.5 text-text-dim group-hover:text-orange-DEFAULT transition-colors shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>

      {/* Emerging contributors */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <h3 className="text-white text-xs font-bold uppercase tracking-widest">Emerging — First PRs in progress</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {EMERGING_DEVS.map((dev) => (
            <a
              key={dev.github}
              href={`https://github.com/${dev.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0e0e0e] border border-[#1a1a1a] hover:border-orange-DEFAULT/30 transition-all group"
            >
              <span className="text-sm">{dev.flag}</span>
              <span className="text-white text-xs font-medium group-hover:text-orange-DEFAULT transition-colors">{dev.name}</span>
              <span className="text-text-dim text-xs hidden sm:inline">· {dev.what}</span>
            </a>
          ))}
        </div>
      </div>

      {/* CTA to full community page */}
      <a
        href="https://github.com/code-orange-dev/code-orange-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-4 rounded-xl bg-orange-muted border border-orange-DEFAULT/20 hover:border-orange-DEFAULT/50 transition-all group"
      >
        <div className="flex items-center gap-3">
          <Github className="w-5 h-5 text-orange-DEFAULT" />
          <div>
            <p className="text-white text-sm font-semibold">Full developer community on GitHub</p>
            <p className="text-text-muted text-xs">All profiles, PRs, and live contributions</p>
          </div>
        </div>
        <ArrowRight className="w-4 h-4 text-orange-DEFAULT group-hover:translate-x-1 transition-transform shrink-0" />
      </a>
    </div>
  )
}
