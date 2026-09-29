export async function fetchUserData() {
  try {
    const response = await fetch("https://api.example.com/user");
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch user data", error);
    throw new Error("Failed to fetch user data", { cause: error });
  }
}

export function processData(data: string) {
  try {
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Failed to process data", { cause: error });
  }
}

export const getConfiguration = () => {
  return fetch('/api/config').catch((error) => {
    console.error('Failed to fetch configuration', error);
    throw error;
  });
}
