import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { slugify } from './slugify'

describe('slugify', () => {
  // Unit tests
  it('converts spaces to hyphens', () => {
    expect(slugify('AGLA Academy')).toBe('agla-academy')
  })

  it('lowercases all characters', () => {
    expect(slugify('ANNUAL SANTA TOUR')).toBe('annual-santa-tour')
  })

  it('handles accented characters', () => {
    expect(slugify('Festival de La Familia')).toBe('festival-de-la-familia')
    expect(slugify('Copa Adriána')).toBe('copa-adriana')
  })

  it('removes special characters', () => {
    expect(slugify("Adriana's Soccer Academy")).toBe('adrianas-soccer-academy')
  })

  it('collapses multiple spaces/hyphens', () => {
    expect(slugify('Annual  Back-to-School  Drive')).toBe('annual-back-to-school-drive')
  })

  it('trims leading and trailing hyphens', () => {
    expect(slugify(' Annual Food Drive ')).toBe('annual-food-drive')
  })

  it('handles ampersand', () => {
    expect(slugify('Global & Community Partnerships')).toBe('global-community-partnerships')
  })

  // Property-based tests
  it('always returns a string matching /^[a-z0-9-]+$/ for non-empty titles', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter(s => s.trim().length > 0 && /[a-zA-Z0-9]/.test(s)),
        (title) => {
          const result = slugify(title)
          expect(result).toMatch(/^[a-z0-9][a-z0-9-]*[a-z0-9]$|^[a-z0-9]$/)
        }
      )
    )
  })

  it('never returns a string with consecutive hyphens', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter(s => s.trim().length > 0 && /[a-zA-Z0-9]/.test(s)),
        (title) => {
          const result = slugify(title)
          expect(result).not.toMatch(/--/)
        }
      )
    )
  })
})

describe('programs data', () => {
  it('all program ids are unique', async () => {
    const { getPrograms } = await import('../content/programs')
    const programs = getPrograms()
    const ids = programs.map(p => p.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('returns exactly 8 programs', async () => {
    const { getPrograms } = await import('../content/programs')
    const programs = getPrograms()
    expect(programs).toHaveLength(8)
  })

  it('all programs have required fields', async () => {
    const { getPrograms } = await import('../content/programs')
    const programs = getPrograms()
    for (const program of programs) {
      expect(program.id).toBeTruthy()
      expect(program.title).toBeTruthy()
      expect(program.tagline).toBeTruthy()
      expect(program.description).toBeTruthy()
      expect(program.goals.length).toBeGreaterThan(0)
      expect(program.keyComponents.length).toBeGreaterThan(0)
    }
  })

  it('all program ids match /^[a-z0-9-]+$/', async () => {
    const { getPrograms } = await import('../content/programs')
    const programs = getPrograms()
    for (const program of programs) {
      expect(program.id).toMatch(/^[a-z0-9-]+$/)
    }
  })
})
