function dbGetUser(id: string) {
  return Promise.resolve({ id, name: "Test" });
}

export const fetchUserById = dbGetUser;

export function processUserData(rawData: unknown) {
  const data = rawData as Record<string, any>;
  return data.name;
}

export function parseConfig(configStr: string) {
  try {
    return JSON.parse(configStr);
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
    throw new Error("Failed to parse config", { cause: e });
  }
}

export function validateSession(token: string) {
  if (!token) {
    return { status: "error", data: null, error: "Missing token" };
  }
  return { status: "success", data: { userId: 123 }, error: null };
}
