import { isProd } from './chain'
import { coke, fwb, parallel, anotherblock, standWithCrypto } from './partners'
import { Partner } from './partners/types'

export const schedule: Record<string, Partner> = isProd
  ? {
      '2023-08-10': fwb,
      '2023-08-11': parallel,
      '2023-08-12': coke,
      '2023-08-13': anotherblock,
      '2023-08-14': standWithCrypto,
    }
  : {
      '2023-07-18': fwb,
      '2023-07-19': parallel,
      '2023-07-20': coke,
      '2023-07-21': anotherblock,
      '2023-07-22': standWithCrypto,
    }
