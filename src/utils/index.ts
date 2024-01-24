import { formatDistance, parseISO } from 'date-fns'

export const formatDistanceFromNow = (dateStr: string) => {
  return formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace('about ', '')
}
