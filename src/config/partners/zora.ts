import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const zora: Partner = {
  slug: 'zora',
  name: 'Zora',
  url: 'https://zora.co/',
  description:
    "Take part in Zora's hyperstructure culture as they bring their favorite artists to Onchain Summer.",
  brandColor: '#000000',
  icon: '/partners/zora/icon.png',
  banner: '/partners/zora/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@lo',
  drops: [
    {
      image: '/partners/zora/drops/drop.gif',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Zora Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 17, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default zora
