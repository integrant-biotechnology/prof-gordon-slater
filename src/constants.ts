// -------------------------------------------------------------
// src/constants.ts — barrel re-export.
//
// As of PR-1 of the multi-page-IA upgrade, all content has moved
// into purpose-named modules under src/data/. This file remains
// as a barrel re-export so every existing `import { … } from
// '@/constants'` site keeps working unchanged — zero behaviour
// change for consumers, clean modules underneath.
//
// New code should import directly from the relevant src/data/*
// module. Existing imports stay valid.
// -------------------------------------------------------------

export * from './data/identity';
export * from './data/background';
export * from './data/book';
export * from './data/research/themes';
export * from './data/research/publications';
export * from './data/research/body-of-work';
export * from './data/writing';
export * from './data/community';
export * from './data/giving';
export * from './data/social';
