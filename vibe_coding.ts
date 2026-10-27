export async function fetchUserData() {
  let response: Response;
  try {
    response = await fetch("https://api.example.com/user");
  } catch (error) {
    throw new Error("Network request to https://api.example.com/user failed", { cause: error });
  }
  try {
    return await response.json();
  } catch (error) {
    throw new Error(`Response from https://api.example.com/user was not valid JSON (status ${response.status})`, { cause: error });
  }
}

export function processData(data: string) {
  try {
    return JSON.parse(data);
  } catch (e) {
    throw new Error(`Invalid JSON input to processData (${data.length} chars)`, { cause: e });
  }
}

export const getConfiguration = () => {
  return fetch('/api/config').catch(() => ({}));
}
