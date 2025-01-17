import { Partner } from './types'
import { unlimited, limited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '../constants'

const cokeConfig: Partner = {
  slug: 'Coca-Cola',
  name: 'Coca-Cola®',
  url: 'https://www.coca-cola.com/',
  description:
    "Collect art from Coca‑Cola®’s Masterpiece collection to see what happens when the universe comes together in 'Real Magic' ways.",
  brandColor: '#F40009',
  icon: '/partners/coke/icon.png',
  banner: '/partners/coke/banner-icon.svg',
  aarweaveDigest: 'rXJRpWEegt2wUA9yBsb1tDQnSmgDaVaslHhVE9I-ojw',
  twitter: '@CocaCola',
  drops: [
    {
      image: '/partners/coke/drop/coke.webp',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Coke NFT Drop',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 14, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
    {
      image: '/partners/open-sea/external-drops/1.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: '',
      name: 'Closer to the Sun',
      startDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 14, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      ...limited,
      type: 'erc-721',
      price: '0.0001',
    },
    {
      image: '/partners/open-sea/external-drops/2.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: '',
      name: 'Runaway',
      startDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 14, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      crossMintClientId: '04a71fe3-29a3-42b4-8dec-a5c633fe5029',
      address: '0x4406EF711207f60f7bA6EEf2757F3b404D28a0b7',
      type: 'erc-721',
      price: '0.0001',
    },
    {
      image: '/partners/open-sea/external-drops/3.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Yu-Gi-Oh!',
      startDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 14, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      crossMintClientId: '04a71fe3-29a3-42b4-8dec-a5c633fe5029',
      address: '0x4406EF711207f60f7bA6EEf2757F3b404D28a0b7',
      type: 'erc-721',
      price: '0.0001',
    },
    {
      image: '/partners/open-sea/external-drops/4.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Number 1',
      startDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 14, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      crossMintClientId: '04a71fe3-29a3-42b4-8dec-a5c633fe5029',
      address: '0x4406EF711207f60f7bA6EEf2757F3b404D28a0b7',
      type: 'erc-721',
      price: '0.0001',
    },
  ],
}

export default cokeConfig
