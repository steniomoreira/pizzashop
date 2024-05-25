import { api } from '@/lib/axios'

export interface SingnBody {
  email: string
}

export async function signIn({ email }: SingnBody) {
  await api.post('/authenticate', { email })
}
