"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/selected-works')
  }, [router])

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center">
      <p className="text-neutral-500">Redirecting...</p>
    </div>
  )
}