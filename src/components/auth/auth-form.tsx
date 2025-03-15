'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export function AuthForm() {
  const supabase = createClientComponentClient()

  return (
    <div className="w-full max-w-[400px] mx-auto p-4">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google', 'github', 'linkedin', 'discord']}
        redirectTo={`${window.location.origin}/auth/callback`}
        theme="dark"
        socialLayout="vertical"
        showLinks={false}
      />
    </div>
  )
}