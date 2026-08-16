/**
 * Site-wide authority statistics — verified claims only.
 *
 * Every number here traces to a source already in the project tree
 * (see docs/voice-source-v0_1.md wall rules): the sixty-paper corpus
 * claim used across /research, the thirty-year clinical record from
 * the About bio, the UTS professorship in background.ts, and the
 * book in book.ts. Do not add stats that cannot be sourced.
 */

export interface SiteStat {
  value: string;
  label: string;
  /** Optional internal route the stat deep-links to. */
  href?: string;
}

export const SITE_STATS: SiteStat[] = [
  { value: '60', label: 'Peer-reviewed papers', href: '/research/publications' },
  { value: '30', label: 'Years in clinical practice' },
  { value: 'UTS', label: 'Professor, University of Technology Sydney' },
  { value: '2026', label: 'Chaos to Creation published', href: '/book' },
];
