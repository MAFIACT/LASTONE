'use client'

import { configureChains, createConfig } from 'wagmi'
import { base } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { EthereumClient } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'

export const projectId = '050d3abd2409cfc2ab142c17fbd0a77c' // Replace with your actual WalletConnect project ID

const { chains, publicClient } = configureChains([base], [publicProvider()])

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient
})

export const ethereumClient = new EthereumClient(wagmiConfig, chains)
