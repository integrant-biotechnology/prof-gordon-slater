// -------------------------------------------------------------
// Speaking engagements & media mentions — render-gated.
//
// Both arrays ship EMPTY on purpose: the voice-source wall rules
// require every entry to trace to a verifiable source, and none
// are in the project tree yet. Sections consuming these arrays
// render nothing while they are empty — populate with real
// entries (title, venue, year, optional link) to surface them.
// -------------------------------------------------------------

export interface Engagement {
  title: string;
  venue: string;
  year: string;
  href?: string;
}

export interface MediaMention {
  title: string;
  outlet: string;
  year: string;
  href?: string;
}

export const SPEAKING: Engagement[] = [];

export const MEDIA: MediaMention[] = [];
