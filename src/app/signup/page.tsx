'use client'

import { useSearchParams } from 'next/navigation'
import { AuthForm } from '@/components/auth/auth-form'

export default function SignupPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your account
            {type && ` as a ${type.charAt(0).toUpperCase() + type.slice(1)}`}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="/login" className="font-medium text-primary hover:text-primary/90">
              sign in to your existing account
            </a>
          </p>
        </div>
        <AuthForm />
      </div>
    </div>
  )
}