"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function BlogPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/blog/en") // instantly redirect
  }, [router])

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-lg font-medium text-gray-700 animate-pulse">
        <Loader2 className="w-6 h-6 animate-spin text-green-600" />
      </div>
    </div>
  )
}
