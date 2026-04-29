import type { NavItem } from '../types/index'
import { getPrograms } from './programs'

export function buildNavItems(): NavItem[] {
  const programItems: NavItem[] = getPrograms().map(program => ({
    label: program.title,
    href: `/programs-v2#${program.id}`
  }))

  return [
    { label: 'Home', href: '/' },
    { label: 'Our Story', href: '/our-story' },
    {
      label: 'Programming',
      href: '/programs-v2',
      children: programItems
    },
    { label: 'Contact Us', href: '/contact' }
  ]
}
