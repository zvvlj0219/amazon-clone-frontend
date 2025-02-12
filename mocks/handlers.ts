import { API_DOMAIN } from '@/config/app';
import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get(`${API_DOMAIN}/home`, () => {
    return HttpResponse.json({ message: 'Hello, World!' }, { status: 200 });
  }),
];