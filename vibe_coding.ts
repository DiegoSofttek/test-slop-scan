export async function fetchUserData() {
  const response = await fetch("https://api.example.com/user");
  return await response.json();
}

export function processData(data: string) {
  try {
    return JSON.parse(data);
  } catch (e) {
    throw new Error("Something went wrong", { cause: e });
  }
}

export const getConfiguration = () => {
  return fetch('/api/config').catch(() => ({}));
}