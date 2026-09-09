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
  } catch (error) {
    throw new Error("Failed to parse data as JSON", { cause: error });
  }
}

export const getConfiguration = () => {
  // Slop pattern: Promise .catch() default fallback
  return fetch('/api/config').catch(() => ({}));
}
