import { Partner } from './types'
import { limited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const rainbowWallet: Partner = {
  slug: 'rainbow',
  name: 'Rainbow',
  url: 'https://rainbow.me/',
  description:
    'Become a Rainbow World citizen with your very own Citizens created by AdWorld.',
  brandColor: '#e9f2ff',
  icon: '/partners/rainbow-wallet/icon.png',
  banner: '/partners/rainbow-wallet/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@rainbowdotme',
  drops: [
    {
      image: '/partners/rainbow-wallet/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Rainbow Drop',
      ...limited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 26, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 27, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default rainbowWallet
