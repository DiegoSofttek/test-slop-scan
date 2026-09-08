export async function fetchUserData() {
  try {
    const response = await fetch("https://api.example.com/user");
    return await response.json();
  } catch (error) {
    // Slop pattern: Log and continue / Error-obscuring catch block
    console.error(error);
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