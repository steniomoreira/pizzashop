import { api } from '@/lib/axios'

export interface RegisterRestautantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant(body: RegisterRestautantBody) {
  await api.post('/restaurants', body)
}
