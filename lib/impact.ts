// ============================================================
// IMPACT DATA — single source of truth for graduate outcomes.
//
// Numbers and PRs are mirrored from the PUBLIC, auditable tracker at
// github.com/code-orange-dev/PR-tracking-dashboard. Keep this file in
// sync when the dashboard updates so the website never overstates.
//
// Last synced: May 14, 2026
// ============================================================

export const IMPACT_UPDATED = 'May 14, 2026'

/** Headline outcome metrics — the numbers funders and partners care about. */
export const IMPACT_METRICS = [
  { value: '45+', label: 'PRs merged',            sub: 'into Bitcoin open source' },
  { value: '75+', label: 'PRs opened',            sub: 'across the ecosystem' },
  { value: '25+', label: 'Projects contributed to', sub: 'Core, BDK, payjoin & more' },
  { value: '13',  label: 'Active contributors',   sub: 'shipping code today' },
  { value: '50+', label: 'Graduates',             sub: 'from 5+ cohorts' },
  { value: '10',  label: 'Emerging devs',         sub: 'first PR imminent' },
]

/**
 * Flagship merged PRs — a curated subset chosen for repo significance.
 * The full list (45+) lives on the public dashboard.
 */
export const FLAGSHIP_PRS = [
  { dev: 'Peter',       handle: 'pzafonte',      project: 'Bitcoin Core',          repo: 'bitcoin/bitcoin',                 pr: '#34885', url: 'https://github.com/bitcoin/bitcoin/pull/34885',                 desc: 'kernel: expose btck_block_tree_entry_get_ancestor' },
  { dev: 'Peter',       handle: 'pzafonte',      project: 'rust-bitcoin',          repo: 'rust-bitcoin/rust-bitcoin',       pr: '#5968',  url: 'https://github.com/rust-bitcoin/rust-bitcoin/pull/5968',         desc: 'p2p: encoding trait impls for NetworkMessage' },
  { dev: 'Vaan',        handle: 'va-an',         project: 'rust-payjoin',          repo: 'payjoin/rust-payjoin',            pr: '#1554',  url: 'https://github.com/payjoin/rust-payjoin/pull/1554',              desc: 'refactor(cli): simplify bip cli args' },
  { dev: 'Arowolo',     handle: 'Arowolokehinde', project: 'rust-payjoin',         repo: 'payjoin/rust-payjoin',            pr: '#1498',  url: 'https://github.com/payjoin/rust-payjoin/pull/1498',              desc: 'Fix send success log error and order' },
  { dev: 'Razor',       handle: 'RazorBest',     project: 'peer-observer',         repo: 'peer-observer/peer-observer',     pr: '#408',   url: 'https://github.com/peer-observer/peer-observer/pull/408',        desc: 'ebpf-extractor: reload eBPF objects on bitcoind restart' },
  { dev: 'Razor',       handle: 'RazorBest',     project: 'rust-bitcoin/corepc',   repo: 'rust-bitcoin/corepc',             pr: '#547',   url: 'https://github.com/rust-bitcoin/corepc/pull/547',                desc: 'Change prune_target_size type from u32 to u64' },
  { dev: 'Psychemist',  handle: 'psychemist',    project: 'rust-lightning (LDK)',  repo: 'lightningdevkit/rust-lightning',  pr: '#4293',  url: 'https://github.com/lightningdevkit/rust-lightning/pull/4293',    desc: 'Change Bolt11Invoice payment_hash return type' },
  { dev: 'Psychemist',  handle: 'psychemist',    project: 'saving-satoshi-script', repo: 'saving-satoshi/saving-satoshi-script', pr: '#19', url: 'https://github.com/saving-satoshi/saving-satoshi-script/pull/19', desc: 'Implement OP_CHECKSIGADD opcode (BIP-342)' },
  { dev: 'Vaan',        handle: 'va-an',         project: 'BDK',                   repo: 'bitcoindevkit/bdk_wallet',        pr: '#422',   url: 'https://github.com/bitcoindevkit/bdk_wallet/pull/422',           desc: 'docs(wallet): fix misleading RBF comment in create_tx' },
  { dev: 'Vaan',        handle: 'va-an',         project: 'bdk-cli',               repo: 'bitcoindevkit/bdk-cli',           pr: '#270',   url: 'https://github.com/bitcoindevkit/bdk-cli/pull/270',              desc: 'fix: RUSTSEC-2026-0097 for rand 0.9' },
  { dev: 'Chaitika',    handle: 'chaitika',      project: 'silent-pay-wallet',     repo: 'Bitshala-Incubator/silent-pay-wallet', pr: '#79', url: 'https://github.com/Bitshala-Incubator/silent-pay-wallet/pull/79', desc: 'FIX: odd Y parity for SP UTXO spend pubkeys (BIP352)' },
  { dev: 'Gradale',     handle: 'alexgrad42',    project: 'rust-bitcoin',          repo: 'rust-bitcoin/rust-bitcoin',       pr: '#6125',  url: 'https://github.com/rust-bitcoin/rust-bitcoin/pull/6125',         desc: 'crypto: constant-time equality for Poly1305 tags' },
]

/** Flagship projects the community has shipped code into. */
export const IMPACT_PROJECTS = [
  'Bitcoin Core', 'rust-bitcoin', 'rust-payjoin', 'BDK', 'bdk-cli',
  'rust-lightning (LDK)', 'peer-observer', 'silent-pay-wallet', 'silent-pay-indexer',
  'Floresta', 'Fedimint', 'Cashu', 'BTCPay Server', 'Kyoto', 'kernel-node',
  'rust-bitcoinkernel', 'corepc', 'hex-conservative', 'bitcointranscripts', 'mastering-taproot',
]

/** Where graduates go — the pipeline outcome that matters most. */
export const GRAD_DESTINATIONS = [
  { name: 'Chaincode Labs',  detail: 'BOSS Challenge — cohort grads enter with priority support',  url: 'https://learning.chaincode.com' },
  { name: 'OpenSats',        detail: 'Grant applications for full-time OSS contribution',           url: 'https://opensats.org' },
  { name: 'Bitshala',        detail: 'Protocol incubator — silent-pay & LN cohorts',                url: 'https://bitshala.org' },
  { name: 'BTC++ Hackathons', detail: 'BINST (Taproot + PSBT + ZK) — hackathon finalist',           url: 'https://btcplusplus.dev' },
  { name: 'Full-time roles', detail: 'Bitcoin companies & open source maintainer tracks',           url: 'https://codeorange.dev/fellowships' },
]

/** Public, auditable sources — transparency is the credibility play. */
export const IMPACT_SOURCES = [
  { label: 'PR Tracking Dashboard', url: 'https://github.com/code-orange-dev/PR-tracking-dashboard' },
  { label: 'Community Records',     url: 'https://github.com/code-orange-dev/community' },
  { label: 'Impact Report',         url: 'https://github.com/code-orange-dev/impact-report' },
  { label: 'Graduate Pipeline',     url: 'https://github.com/code-orange-dev/grad-pipeline' },
]
