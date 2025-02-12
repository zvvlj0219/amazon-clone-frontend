import { API_DOMAIN } from "@/config/app";
import { cookies, headers } from "next/headers";

type Params = {
  url: string;
  forceCache?: boolean;
}

const fetchWithCredentials = async ({ url, forceCache = false }: Params) => {
  const headerStore = await headers();
  const origin = headerStore.get('origin');

  const cookieStore = await cookies();
  const cookie = cookieStore.toString();

  return fetch(`${API_DOMAIN}/${url.replace(/^\//, '')}`, {
    cache: forceCache ? 'force-cache' : 'no-store',
    headers: {
      accept: 'application/json',
      Cookie: cookie,
      origin:  origin ?? 'empty',
    },
  });
};

export default fetchWithCredentials;