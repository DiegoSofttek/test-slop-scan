export async function fetchUserData() {
  try {
    const response = await fetch("https://api.example.com/user");
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch user data", error);
    throw error;
  }
}

export function processData(data: string) {
  try {
    return JSON.parse(data);
  } catch (e) {
    throw new Error("Failed to process data", { cause: e });
  }
}

export const getConfiguration = () => {
  return fetch('/api/config').catch(() => ({}));
}
