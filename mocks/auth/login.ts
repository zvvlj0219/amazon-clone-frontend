import { API_DOMAIN } from '@/config/app'
import { http, HttpResponse, PathParams } from 'msw'

type LoginRequestBody = { email: string, password: string };

export const loginResolver = http.post<PathParams, LoginRequestBody>(`${API_DOMAIN}/api/login`, async ({ request }) => {
    const { email } = await request.json();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
        return HttpResponse.json({ message: 'Invalid email format' }, { status: 500 });
    }

    return HttpResponse.json(null, { status: 200 });
});
