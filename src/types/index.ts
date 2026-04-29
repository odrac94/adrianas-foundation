import type { ImageMetadata } from 'astro'

export interface Program {
  id: string
  title: string
  tagline: string
  description: string
  goals: string[]
  keyComponents: string[]
  category: 'mentorship' | 'sports' | 'community' | 'partnership'
  icon?: string
  image?: ImageMetadata | string
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface ContactEntry {
  category: string
  description: string
  email: string
}

export interface Value {
  label: string
  icon?: string
}
