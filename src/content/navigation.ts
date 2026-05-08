import type { NavItem } from '../types/index'

export function buildNavItems(): NavItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Academy', href: '/academy' },
    { label: 'Donors & Partners', href: '/donate' },
    { label: 'Contact Us', href: '/contact' }
  ]
}
