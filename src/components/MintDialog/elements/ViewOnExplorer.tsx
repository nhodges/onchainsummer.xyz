import { Button, ButtonProps } from '@/components/Button'
import { RightArrow } from '@/components/icons/RightArrow'
import { isProd } from '@/config/chain'
import React from 'react'

interface ViewOnExplorerProps {
  txHash: string | undefined
  buttonVariant?: ButtonProps['variant']
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ViewOnExplorer = React.forwardRef<
  HTMLButtonElement,
  ViewOnExplorerProps
>(({ txHash, buttonVariant, onClick }, ref) => {
  if (!txHash) {
    return null
  }

  return (
    <Button
      variant={buttonVariant}
      external
      onClick={onClick}
      ref={ref}
      href={`https://${isProd ? '' : 'goerli.'}basescan.org/tx/${txHash}`}
    >
      View on Explorer <RightArrow />
    </Button>
  )
})

ViewOnExplorer.displayName = 'ViewOnExplorer'
