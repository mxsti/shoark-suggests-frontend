const baseUrl: string = process.env.BACKEND_URL;

const ApiCall = async () => {
  const requestUrl: string = `${baseUrl}`;
  const response = await fetch(requestUrl);
  return await response.json();
}

export default ApiCall;
