'use client'

import {HeroUIProvider} from '@heroui/react'

export function HerouiProviders({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}