import { Button } from '@/components/ui/button'
import Link from 'next/dist/client/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600 mt-2">La página que estás buscando no existe.</p>
        <Button asChild>
            <Link href="/"className="mt-4">
                Volver al inicio
            </Link>
        </Button>
    </div>
  )
}
