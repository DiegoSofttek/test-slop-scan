export async function fetchUserData() {
  try {
    const response = await fetch("https://api.example.com/user");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function processData(data: string) {
  try {
    return JSON.parse(data);
  } catch (e) {
    throw new Error("Failed to parse data", { cause: e });
  }
}

export const getConfiguration = () => {
  return fetch('/api/config').catch(() => ({}));
}
