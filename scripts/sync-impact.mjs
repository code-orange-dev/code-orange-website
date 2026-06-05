#!/usr/bin/env node
/**
 * sync-impact.mjs
 * ----------------------------------------------------------------------------
 * Pulls the latest headline numbers from the PUBLIC Code Orange PR-tracking
 * dashboard and writes them to lib/impact-data.json. The /impact page reads
 * that JSON, so running this keeps the site's outcome metrics in sync with the
 * auditable source of truth — no manual editing, no stale numbers.
 *
 * Usage:   node scripts/sync-impact.mjs
 * CI:      run on a schedule via .github/workflows/sync-impact.yml
 *
 * Zero dependencies. Uses Node's built-in fetch (Node 18+).
 * ----------------------------------------------------------------------------
 */
import { writeFile, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'lib', 'impact-data.json')

// Canonical, public source. Override with DASHBOARD_URL if it ever moves.
const SOURCE =
  process.env.DASHBOARD_URL ||
  'https://raw.githubusercontent.com/code-orange-dev/PR-tracking-dashboard/main/README.md'

// Map dashboard "Metric" labels → keys in impact-data.json.
const LABELS = {
  'Total PRs Opened': 'opened',
  'PRs Merged': 'merged',
  'Distinct Projects Contributed To': 'projects',
  'Active Contributors': 'activeContributors',
  'Emerging Contributors (first PR imminent)': 'emerging',
}

/** Pull "**42+**" style value for a given metric label out of the markdown table. */
function extractMetric(md, label) {
  const esc = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  // | **Label** | **value** |
  const re = new RegExp(`\\|\\s*\\*\\*${esc}\\*\\*\\s*\\|\\s*\\*\\*(.+?)\\*\\*\\s*\\|`)
  const m = md.match(re)
  return m ? m[1].trim() : null
}

function extractUpdated(md) {
  const m = md.match(/Last updated:\s*([^\n*<|]+)/i)
  return m ? m[1].trim() : null
}

async function main() {
  console.log(`[sync-impact] fetching ${SOURCE}`)
  const res = await fetch(SOURCE, { headers: { 'User-Agent': 'codeorange-sync' } })
  if (!res.ok) throw new Error(`Fetch failed: HTTP ${res.status}`)
  const md = await res.text()

  const next = {}
  for (const [label, key] of Object.entries(LABELS)) {
    const val = extractMetric(md, label)
    if (val) next[key] = val
  }
  const updated = extractUpdated(md)
  if (updated) next.updated = updated

  // Safety: refuse to write a partial/garbage parse.
  const required = ['opened', 'merged', 'projects', 'activeContributors', 'emerging', 'updated']
  const missing = required.filter((k) => !next[k])
  if (missing.length) {
    throw new Error(
      `Parse incomplete — missing: ${missing.join(', ')}. ` +
        `The dashboard format may have changed; not overwriting impact-data.json.`,
    )
  }

  // Preserve key order and only rewrite if something actually changed.
  const ordered = {
    updated: next.updated,
    merged: next.merged,
    opened: next.opened,
    projects: next.projects,
    activeContributors: next.activeContributors,
    emerging: next.emerging,
  }
  const json = JSON.stringify(ordered, null, 2) + '\n'

  let prev = ''
  try {
    prev = await readFile(OUT, 'utf8')
  } catch {
    /* first run */
  }

  if (prev.trim() === json.trim()) {
    console.log('[sync-impact] no change — already up to date.')
    return
  }

  await writeFile(OUT, json)
  console.log('[sync-impact] updated lib/impact-data.json:')
  console.log(json)
}

main().catch((err) => {
  console.error(`[sync-impact] ERROR: ${err.message}`)
  process.exit(1)
})
