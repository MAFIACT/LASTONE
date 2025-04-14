'use client'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'
import { WagmiConfig } from 'wagmi'
import { base } from 'wagmi/chains'

const projectId = '050d3abd2409cfc2ab142c17fbd0a77c'

const metadata = {
  name: 'Web3 Dashboard',
  description: 'Connect Wallet & View PNL',
  url: 'https://finalmodal-eta.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [base]

const config = defaultWagmiConfig({
  projectId,
  chains,
  metadata
})

createWeb3Modal({ projectId, chains, wagmiConfig: config })

export function Web3Provider({ children }) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>
}
