import type { Stat } from '../types/index'

export const stats: Stat[] = [
  { value: '3500', label: 'Toys Distributed', suffix: '+' },
  { value: '5000', label: 'Families Served', suffix: '+' },
  { value: '15', label: 'Annual Community Events' },
  { value: '50', label: 'Community Partners' },
  { value: '150', label: 'Volunteers Engaged' }
]

export function getStats(): Stat[] {
  return stats
}
