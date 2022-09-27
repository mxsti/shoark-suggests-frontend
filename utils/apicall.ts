const baseUrl: string = process.env.BACKEND_URL;

export default async function ApiCall<T>(method: string = "GET"): Promise<T | null> {
  const requestUrl: string = `${baseUrl}`;

  const response = await fetch(requestUrl, {
    mode: "cors",
  });

  return Promise.resolve(await response.json());
}
