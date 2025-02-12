import { server } from "@/mocks/node";
import fetchWithCredentials from "./lib/fetchWithCredentials";

server.listen();

export default async function Home() {
  const res = await fetchWithCredentials({ url: "/home" });
  const data = await res.json();

  return (
    <div>
      <h1>Home</h1>
      <p>{data.message}</p>
    </div>
  );
}
