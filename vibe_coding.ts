export async function fetchUserData() {
  try {
    const response = await fetch("https://api.example.com/user");
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch user data", { cause: error });
  }
}

export function processData(data: string) {
  try {
    return JSON.parse(data);
  } catch (e) {
    // Slop pattern: Generic replacement error
    throw new Error("Something went wrong");
  }
}

export const getConfiguration = () => {
  // Slop pattern: Promise .catch() default fallback
  return fetch('/api/config').catch(() => ({}));
}
