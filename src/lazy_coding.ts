export const fetchUserById = async (id: string) => {
  return Promise.resolve({ id, name: "Test" });
};

export function processUserData(rawData: unknown) {
  const data = rawData as Record<string, any>;
  return data.name;
}

export function parseConfig(configStr: string) {
  try {
    return JSON.parse(configStr);
  } catch (e) {
    const reason = e instanceof Error ? e.message : String(e);
    throw new Error(`Invalid config JSON: ${reason}`, { cause: e });
  }
}

export function validateSession(token: string) {
  if (!token) {
    return { status: "error", data: null, error: "Missing token" };
  }
  return { status: "success", data: { userId: 123 }, error: null };
}
