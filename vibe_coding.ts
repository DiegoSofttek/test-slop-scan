export async function fetchUserData() {
  try {
    const response = await fetch("https://api.example.com/user");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export function processData(data: string) {
  try {
    return JSON.parse(data);
  } catch (e) {
    throw new Error("Something went wrong");
  }
}

export const getConfiguration = () => {
  return fetch('/api/config').catch(() => ({}));
}