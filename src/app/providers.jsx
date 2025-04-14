'use client'

import { Web3Provider } from '../lib/wallet'

export default function Providers({ children }) {
  return <Web3Provider>{children}</Web3Provider>
}
